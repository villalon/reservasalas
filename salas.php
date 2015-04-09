<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle. If not, see <http://www.gnu.org/licenses/>.
// a

/**
 *
 * @package local
 * @subpackage reservasalas
 * @copyright 2014 Francisco García Ralph (francisco.garcia.ralph@gmail.com)
 *            Nicolás Bañados Valladares (nbanados@alumnos.uai.cl)
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
require_once (dirname ( __FILE__ ) . '/../../config.php'); // Required
require_once ($CFG->dirroot . '/local/reservasalas/forms.php');
require_once ($CFG->dirroot . '/local/reservasalas/tablas.php');

// Code to set the context, url and layout.
global $PAGE, $CFG, $OUTPUT, $DB;
require_login ();
$url = new moodle_url ( '/local/reservasalas/salas.php' );
$context = context_system::instance ();
$PAGE->set_context ( $context );
$PAGE->set_url ( $url );
$PAGE->set_pagelayout ( 'standard' );

// Capabilities
if (! has_capability ( 'local/reservasalas:administration', $context )) {
	print_error ( get_string ( 'INVALID_ACCESS', 'Reserva_Sala' ) );
}

// We request the ACTION, it can be: ver, editar, borrar, agregar, crear, informe and sinedificios
$action = optional_param ( 'action', 'ver', PARAM_TEXT );

// corroborates if the campus and the building exists(can't be rooms without those).
if (! $DB->get_records ( 'reservasalas_salas' )) {
	$sedes = 1;
	$edificios = 1;
	if (! $DB->get_records ( 'reservasalas_edificios' )) {
		$edificios = 0;
		if (! $DB->get_records ( 'reservasalas_sedes' )) {
			$sedes = 0;
		}
	}
	/*
	 * If there is no buildings it trigger the ACTION sinedificios.
	 * In these view they send you to create the campus and then the buildings, with these you have the conditions to create rooms.
	 */
	if ($action == 'ver') {
		$action = "sinedificios";
	}
}
/*
 * Use of the ACTION editar.
 * Allows you to edit the atributes of a created room.
 */
if ($action == 'editar') {
	$idsala = required_param ( 'idsala', PARAM_INT );
	$prevaction = optional_param ( 'prevaction', 'ver', PARAM_TEXT );
	$sala = $DB->get_record ( 'reservasalas_salas', array (
			'id' => $idsala 
	) );
	$edificio = $DB->get_record ( 'reservasalas_edificios', array (
			'id' => $sala->edificios_id 
	) );
	$sede = $DB->get_record ( 'reservasalas_sedes', array (
			'id' => $edificio->sedes_id 
	) );
	
	$editarform = new editarSala ( null, array (
			'prevaction' => $prevaction,
			'edificioid' => $edificio->id 
	) );
	if ($editarform->is_cancelled ()) {
		$action = $prevaction;
		// If the edition form has data it will edit it.
	} else if ($fromform = $editarform->get_data ()) {
		// Recovers the inputed data from the edition form.
		$sala->nombre = $fromform->cambiarnombresala;
		$sala->nombre_pc = $fromform->cambiarnombrepc;
		$sala->capacidad = $fromform->cap;
		$sala->tipo = $fromform->roomType;
		// Edits the room with the new parameters added.
		$DB->update_record ( 'reservasalas_salas', $sala );
		$resources = $DB->get_records ( 'reservasalas_recursos' );
		foreach ( $resources as $resource ) {
			$conditional = $resource->id;
			$room_id = $DB->get_record ( 'reservasalas_salas', array (
					'nombre' => $fromform->cambiarnombresala,
					'edificios_id' => $edificio->id,
					'tipo' => $fromform->roomType 
			) );
			$resourcechange = $DB->get_records ( 'reservasalas_salarecursos', array (
					'salas_id' => $room_id->id 
			) );
			/*
			 * Condition if the selected resource in the edition form exist or not.
			 * It gets added or not to the relation sala-recurso.
			 */
			if ($_REQUEST [$conditional] == '1') {
				if ($DB->get_records ( 'reservasalas_salarecursos', array (
						'recursos_id' => $conditional,
						'salas_id' => $room_id->id 
				) ) == null) {
					$DB->insert_record ( 'reservasalas_salarecursos', array (
							'recursos_id' => $resource->id,
							'salas_id' => $room_id->id 
					) );
				}
			} else if ($_REQUEST [$conditional] == '0') {
				if ($DB->get_records ( 'reservasalas_salarecursos', array (
						'recursos_id' => $conditional,
						'salas_id' => $room_id->id 
				) ) != null) {
					$room_id = $DB->get_record ( 'reservasalas_salas', array (
							'nombre' => $fromform->cambiarnombresala 
					) );
					$DB->delete_records ( 'reservasalas_salarecursos', array (
							'recursos_id' => $resource->id,
							'salas_id' => $room_id->id 
					) );
				}
			}
		}
		$action = $prevaction;
	}
}
/*
 * Use of the ACTION borrar
 * delete an existing room
 */
if ($action == 'borrar') {
	$idsala = required_param ( 'idsala', PARAM_INT );
	$prevaction = optional_param ( 'prevaction', 'ver', PARAM_TEXT );
	if (confirm_sesskey ()) {
		$DB->delete_records ( 'reservasalas_salas', array (
				'id' => $idsala 
		) );
		$DB->delete_records ( 'reservasalas_reservas', array (
				'salas_id' => $idsala 
		) );
		$DB->delete_records ( 'reservasalas_salarecursos', array (
				'salas_id' => $idsala 
		) );
		$action = $prevaction;
	} else {
		print_error ( "ERROR" );
	}
}
/*
 * Use of the ACTION crear.
 * Ask que cuantity of rooms and then redirect to the ACTION agregar
 */
if ($action == 'crear') {
	$crearsalasform = new createRoomsTwo ();
	if ($crearsalasform->is_cancelled ()) {
		$action = 'ver';
	} else if ($fromform = $crearsalasform->get_data ()) {
		// redirect and send the parameters via URL
		$redirecturl = new moodle_url ( 'salas.php', array (
				'action' => 'agregar',
				'sede' => $fromform->SedeEdificio,
				'salas' => $fromform->sala,
				'type' => $fromform->roomType 
		) );
		redirect ( $redirecturl );
	}
}
/*
 * Use of the ACTION agregar.
 * Allows you to add the amount of room that were previusly set in the ACTION crear.
 */
if ($action == 'agregar') {
	$edificioid = optional_param ( 'sede', 0, PARAM_INT );
	$roomType = optional_param ( 'type', 1, PARAM_INT );
	if ($edificio = $DB->get_record ( 'reservasalas_edificios', array (
			'id' => $edificioid 
	) )) {
		$sede = $DB->get_record ( 'reservasalas_sedes', array (
				'id' => $edificio->sedes_id 
		) );
	}
	$sala = optional_param ( 'salas', 0, PARAM_INT );
	$agregarsalasform = new crearSalas ( null, array (
			'sala' => $sala,
			'SedeEdificio' => $edificioid,
			'type' => $roomType 
	) );
	
	$redirecturl = new moodle_url ( 'index.php', array (
			'action' => 'agregarsalas' 
	) );
	
	if ($agregarsalasform->is_cancelled ()) {
		$action = 'ver';
	} else if ($fromform = $agregarsalasform->get_data ()) {
		$action = "informe";
	}
}
/*
 * Use of the ACTION ver
 * Display of a table with all the existing rooms
 */
if ($action == 'ver') {
	$tabla = tablas::getSalas ();
} else if ($action == 'verporedificio') {
	
	$edificioid = optional_param ( 'edificio', NULL, PARAM_INT );
	$edificio = $DB->get_record ( 'reservasalas_edificios', array (
			'id' => $edificioid 
	) );
	$sede = $DB->get_record ( 'reservasalas_sedes', array (
			'id' => $edificio->sedes_id 
	) );
	
	$tabla = tablas::getSalas ( $edificioid );
}

// View of all th ACTIONS
// **************************************************************************************************************************************************
if ($action == 'ver') {
	$o = '';
	
	$toprow = array ();
	$toprow [] = new tabobject ( get_string ( 'sites', 'local_reservasalas' ), new moodle_url ( '/local/reservasalas/sedes.php' ), get_string ( 'places', 'local_reservasalas' ) );
	$toprow [] = new tabobject ( get_string ( 'buildings', 'local_reservasalas' ), new moodle_url ( '/local/reservasalas/edificios.php' ), get_string ( 'buildings', 'local_reservasalas' ) );
	$toprow [] = new tabobject ( get_string ( 'studyrooms', 'local_reservasalas' ), new moodle_url ( '/local/reservasalas/salas.php' ), get_string ( 'rooms', 'local_reservasalas' ) );
	$toprow [] = new tabobject ( get_string ( 'resources', 'local_reservasalas' ), new moodle_url ( '/local/reservasalas/resources.php' ), get_string ( 'resources', 'local_reservasalas' ) );
	
	$title = get_string ( 'seeandmodrooms', 'local_reservasalas' );
	$PAGE->navbar->add ( get_string ( 'roomsreserve', 'local_reservasalas' ) );
	$PAGE->navbar->add ( get_string ( 'adjustments', 'local_reservasalas' ) );
	$PAGE->navbar->add ( get_string ( 'seeandmodrooms', 'local_reservasalas' ), 'salas.php' );
	$PAGE->set_title ( $title );
	$PAGE->set_heading ( $title );
	
	$o .= $OUTPUT->header ();
	$o .= $OUTPUT->tabtree ( $toprow, get_string ( 'studyrooms', 'local_reservasalas' ) );
	$url = new moodle_url ( "salas.php", array (
			'action' => 'crear' 
	) );
	if (isset ( $nocreada )) {
		$o .= $nocreada;
	}
	$o .= $OUTPUT->single_button ( $url, get_string ( 'createnewrooms', 'local_reservasalas' ) );
	$o .= html_writer::table ( $tabla );
	$o .= $OUTPUT->single_button ( $url, get_string ( 'createnewrooms', 'local_reservasalas' ) );
	$o .= $OUTPUT->footer ();
} else if ($action == 'verporedificio') {
	
	$o = '';
	$title = get_string ( 'seeandmodrooms', 'local_reservasalas' );
	$PAGE->navbar->add ( get_string ( 'roomsreserve', 'local_reservasalas' ) );
	$PAGE->navbar->add ( get_string ( 'adjustments', 'local_reservasalas' ) );
	$PAGE->navbar->add ( get_string ( 'seeandmodrooms', 'local_reservasalas' ), 'salas.php' );
	$PAGE->set_title ( $title );
	$PAGE->set_heading ( $title );
	$o .= $OUTPUT->header ();
	$o .= $OUTPUT->heading ( get_string ( 'roomsreserve', 'local_reservasalas' ) );
	
	$secondtitle = "<h4>" . get_string ( 'campus', 'local_reservasalas' ) . ": " . $sede->nombre . "</h4><h4>" . get_string ( 'building', 'local_reservasalas' ) . ": " . $edificio->nombre . "</h4>";
	
	$o .= "<h2>" . $secondtitle . "</h2><br>";
	$o .= html_writer::table ( $tabla );
	$o .= "<hr>";
	$o .= $OUTPUT->single_button ( 'edificios.php', get_string ( 'backtobuildings', 'local_reservasalas' ) );
	$o .= $OUTPUT->footer ();
} else if ($action == 'crear') {
	$o = '';
	$title = get_string ( 'roomscreates', 'local_reservasalas' );
	$PAGE->navbar->add ( get_string ( 'roomsreserve', 'local_reservasalas' ) );
	$PAGE->navbar->add ( get_string ( 'adjustments', 'local_reservasalas' ) );
	$PAGE->navbar->add ( get_string ( 'seeandmodrooms', 'local_reservasalas' ), '' );
	$PAGE->navbar->add ( $title, 'salas.php?action=crear' );
	$PAGE->set_title ( $title );
	$PAGE->set_heading ( $title );
	$o .= $OUTPUT->header ();
	$o .= $OUTPUT->heading ( $title );
	ob_start ();
	$crearsalasform->display ();
	$o .= ob_get_contents ();
	ob_end_clean ();
	$o .= $OUTPUT->footer ();
} else if ($action == 'agregar') {
	$o = '';
	
	$title = get_string ( 'roomscreates', 'local_reservasalas' );
	$PAGE->navbar->add ( get_string ( 'roomsreserve', 'local_reservasalas' ) );
	$PAGE->navbar->add ( get_string ( 'adjustments', 'local_reservasalas' ) );
	$PAGE->navbar->add ( get_string ( 'seeandmodrooms', 'local_reservasalas' ), 'salas.php' );
	$PAGE->navbar->add ( $title, 'salas.php?action=crear' );
	$PAGE->set_title ( $title );
	$PAGE->set_heading ( $title );
	$o .= $OUTPUT->header ();
	$o .= $OUTPUT->heading ( $title );
	
	$secondtitle = "<h4>" . get_string ( 'campus', 'local_reservasalas' ) . ": " . $sede->nombre . "</h4><h4>" . get_string ( 'building', 'local_reservasalas' ) . ": " . $edificio->nombre . "</h4>";
	$o .= "<h2>" . $secondtitle . "</h2><br>";
	
	ob_start ();
	$agregarsalasform->display ();
	$o .= ob_get_contents ();
	ob_end_clean ();
	$o .= $OUTPUT->footer ();
} else if ($action == 'editar') {
	$o = '';
	$title = get_string ( 'roomedit', 'local_reservasalas' );
	$PAGE->navbar->add ( get_string ( 'roomsreserve', 'local_reservasalas' ) );
	$PAGE->navbar->add ( get_string ( 'adjustments', 'local_reservasalas' ) );
	$PAGE->navbar->add ( get_string ( 'seeandmodrooms', 'local_reservasalas' ), 'salas.php' );
	$PAGE->navbar->add ( $title, '' );
	$PAGE->set_title ( $title );
	$PAGE->set_heading ( $title );
	$o .= $OUTPUT->header ();
	$o .= $OUTPUT->heading ( get_string ( 'roomedit', 'local_reservasalas' ) );
	$o .= "<h4>" . get_string ( 'campus', 'local_reservasalas' ) . ": $sede->nombre </h4>";
	$o .= "<h4>" . get_string ( 'building', 'local_reservasalas' ) . ": $edificio->nombre </h4>";
	$o .= "<br>";
	
	ob_start ();
	$editarform->display ();
	$o .= ob_get_contents ();
	ob_end_clean ();
	
	$o .= $OUTPUT->footer ();
} else if ($action == 'informe') { // New action, informs about the result of the creation of the room.
	$o = '';
	
	$title = get_string ( 'report', 'local_reservasalas' );
	$PAGE->navbar->add ( get_string ( 'roomsreserve', 'local_reservasalas' ) );
	$PAGE->navbar->add ( get_string ( 'adjustments', 'local_reservasalas' ) );
	$PAGE->navbar->add ( get_string ( 'seeandmodrooms', 'local_reservasalas' ), 'salas.php' );
	$PAGE->navbar->add ( get_string ( 'roomscreates', 'local_reservasalas' ), 'salas.php?action=crear' );
	$PAGE->navbar->add ( $title, 'salas.php?action=informe' );
	$PAGE->set_title ( $title );
	$PAGE->set_heading ( $title );
	$o .= $OUTPUT->header ();
	$o .= $OUTPUT->heading ( $title );
	
	$secondtitle = "<h4>" . get_string ( 'campus', 'local_reservasalas' ) . ": " . $fromform->nombresede . "</h4><h4>" . get_string ( 'building', 'local_reservasalas' ) . ": " . $fromform->nombreedificio . "</h4>";
	$o .= "<h2>" . $secondtitle . "</h2><br>";
	
	ob_start ();
	/*
	 * Creates a table that informs about every room that was intented to be made.
	 * Informs about the error and why it couldn't be created or if it was succesfuly created.
	 */
	$table = new html_table ();
	$table->head = array (
			get_string ( 'room', 'local_reservasalas' ),
			get_string ( 'capacity', 'local_reservasalas' ),
			get_string ( 'created', 'local_reservasalas' ),
			get_string ( 'report', 'local_reservasalas' ) 
	);
	
	// Runs all the new rooms.
	for($i = 0; $i < $fromform->number; $i ++) {
		$nsala = "sala" . $i;
		$pc = "pc" . $i;
		$ntype = "cap$i";
		$nres = "res$i";
		// Corroborates if the room already exist.
		if ($DB->get_record ( 'reservasalas_salas', Array (
				'edificios_id' => $fromform->edificio,
				'nombre' => $_REQUEST [$nsala],
				'tipo' => $fromform->typeRoom 
		) )) {
			$row = new html_table_row ( array (
					$_REQUEST [$nsala],
					$_REQUEST [$ntype],
					'No',
					get_string ( 'nameoftheexisting', 'local_reservasalas' ) 
			) );
			$table->data [] = $row;
		} else {
			// If the room doesn't exist, validates the tipe and capacity, it gets created.
			if (($_REQUEST [$ntype] + 1) > 1 || $_REQUEST [$ntype] == 0) { // If the capacity is an interger, create it
				$DB->insert_record ( 'reservasalas_salas', Array (
						'id' => '',
						'nombre' => $_REQUEST [$nsala],
						'nombre_pc' => $_REQUEST [$pc],
						'edificios_id' => $fromform->edificio,
						'tipo' => $fromform->typeRoom,
						'capacidad' => $_REQUEST [$ntype] 
				) );
				$row = new html_table_row ( array (
						$_REQUEST [$nsala],
						$_REQUEST [$ntype],
						get_string ( 'yes', 'local_reservasalas' ),
						get_string ( 'clasroomsuccesscreated', 'local_reservasalas' ) 
				) );
				$table->data [] = $row;
				$resources = $DB->get_records ( 'reservasalas_recursos' );
				// creates the relationship room-resources.
				foreach ( $resources as $resource ) {
					$conditional = $i . $resource->id;
					if ($_REQUEST [$conditional] == '1') {
						$room_id = $DB->get_record ( 'reservasalas_salas', array (
								'nombre' => $_REQUEST [$nsala],
								'edificios_id' => $fromform->edificio,
								'tipo' => $fromform->typeRoom 
						) );
						$DB->insert_record ( 'reservasalas_salarecursos', array (
								'recursos_id' => $resource->id,
								'salas_id' => $room_id->id 
						) );
					}
				}
			} else {
				$row = new html_table_row ( array (
						$_REQUEST [$nsala],
						$_REQUEST [$ntype],
						'No',
						get_string ( 'roomcapacityacepted', 'local_reservasalas' ) 
				) );
				$table->data [] = $row;
			}
		}
	}
	$url = new moodle_url ( "salas.php", array (
			'action' => 'crear' 
	) );
	$url2 = new moodle_url ( "salas.php", array (
			'action' => 'ver' 
	) );
	$row = new html_table_row ( array (
			'',
			'',
			'',
			'' 
	) );
	$table->data [] = $row;
	$row = new html_table_row ( array (
			$OUTPUT->single_button ( $url, get_string ( 'createnewrooms', 'local_reservasalas' ) ),
			$OUTPUT->single_button ( $url2, get_string ( 'next', 'local_reservasalas' ) ),
			'',
			'' 
	) );
	$table->data [] = $row;
	echo html_writer::table ( $table );
	$o .= ob_get_contents ();
	ob_end_clean ();
	$o .= $OUTPUT->footer ();
} else if ($action == "sinedificios") {
	$o = '';
	$toprow = array ();
	$toprow [] = new tabobject ( get_string ( 'sites', 'local_reservasalas' ), new moodle_url ( '/local/reservasalas/sedes.php' ), get_string ( 'places', 'local_reservasalas' ) );
	$toprow [] = new tabobject ( get_string ( 'buildings', 'local_reservasalas' ), new moodle_url ( '/local/reservasalas/edificios.php' ), get_string ( 'buildings', 'local_reservasalas' ) );
	$toprow [] = new tabobject ( get_string ( 'studyrooms', 'local_reservasalas' ), new moodle_url ( '/local/reservasalas/salas.php' ), get_string ( 'rooms', 'local_reservasalas' ) );
	$toprow [] = new tabobject ( get_string ( 'resources', 'local_reservasalas' ), new moodle_url ( '/local/reservasalas/resources.php' ), get_string ( 'resources', 'local_reservasalas' ) );
	
	$title = get_string ( 'seeandmodrooms', 'local_reservasalas' );
	$PAGE->navbar->add ( get_string ( 'roomsreserve', 'local_reservasalas' ) );
	$PAGE->navbar->add ( get_string ( 'adjustments', 'local_reservasalas' ) );
	$PAGE->navbar->add ( get_string ( 'seeandmodrooms', 'local_reservasalas' ), 'salas.php' );
	$PAGE->set_title ( $title );
	$PAGE->set_heading ( $title );
	
	$o .= $OUTPUT->header ();
	$o .= $OUTPUT->tabtree ( $toprow, get_string ( 'studyrooms', 'local_reservasalas' ) );
	$o .= $OUTPUT->heading ( get_string ( 'roomsreserve', 'local_reservasalas' ) );
	
	if ($sedes == 0) {
		$url = new moodle_url ( "sedes.php", array (
				'action' => 'crear' 
		) );
		$o .= "<center><strong>" . get_string ( 'therearenotsites', 'local_reservasalas' ) . "<strong><center>";
		$o .= $OUTPUT->single_button ( $url, get_string ( 'campuscreate', 'local_reservasalas' ) );
	} elseif ($edificios == 0) {
		$url = new moodle_url ( "edificios.php", array (
				'action' => 'crear' 
		) );
		$o .= "<center><strong>" . get_string ( 'therearenotbuildings', 'local_reservasalas' ) . "<strong><center>";
		$o .= $OUTPUT->single_button ( $url, get_string ( 'createbuildings', 'local_reservasalas' ) );
	} else {
		
		$url = new moodle_url ( "salas.php", array (
				'action' => 'crear' 
		) );
		$o .= "<center><strong>" . get_string ( 'thereisnotrooms', 'local_reservasalas' ) . "<strong><center>";
		$o .= $OUTPUT->single_button ( $url, get_string ( 'createrooms', 'local_reservasalas' ) );
	}
	$o .= $OUTPUT->footer ();
} else {
	print_error ( get_string ( 'invalidaction', 'local_reservasalas' ) );
}

echo $o;