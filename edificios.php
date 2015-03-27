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
require_once (dirname ( __FILE__ ) . '/../../config.php'); // Required.
require_once ($CFG->dirroot . '/local/reservasalas/forms.php');
require_once ($CFG->dirroot . '/local/reservasalas/tablas.php');

// Code to set the context, url and layout.
global $PAGE, $CFG, $OUTPUT, $DB;
require_login ();
$url = new moodle_url ( '/local/reservasalas/edificios.php' );
$context = context_system::instance ();
$PAGE->set_context ( $context );
$PAGE->set_url ( $url );
$PAGE->set_pagelayout ( 'standard' );

// Capabilities
if (! has_capability ( 'local/reservasalas:administration', $context )) {
	print_error ( get_string ( 'INVALID_ACCESS', 'Reserva_Sala' ) );
}

// Warnings regarding misswriten modules.
$warning = '';
/*
 * We request the ACTION, it can be: ver, editar, borrar, agregar, crear,
 * each ACTION will show a version of the page, that user is currently using,
 * default ACTION is ver, this will show a table with all the modules that exists.
 */

$action = optional_param ( 'action', 'ver', PARAM_TEXT );

// Corroborates that the campuses exist, because the building are inside the campuses.
if (! $DB->get_records ( 'reservasalas_edificios' )) {
	$sedes = 1;
	if (! $DB->get_records ( 'reservasalas_sedes' )) {
		
		$sedes = 0;
	}
	if ($action == 'ver') {
		// It modifed the action if there is no campus so it will display a message regarding the situation.
		$action = "sinsedes";
	}
}
/*
 * It captures the ACTION editar, this was modifed by the action of the user,
 * it allows edit a building already created.
 */
if ($action == 'editar') {
	// It recovers the hidden variables sent throught the form.
	
	$idbuilding = optional_param ( 'edificio', '0', PARAM_INT );
	$prevaction = optional_param ( 'prevaction', 'ver', PARAM_TEXT );
	if ($idbuilding != 0) {
		$buildingdata = $DB->get_record ( 'reservasalas_edificios', array (
				'id' => $idbuilding 
		) );
		$placedata = $DB->get_record ( 'reservasalas_sedes', array (
				'id' => $buildingdata->sedes_id 
		) );
		$record = $DB->get_record ( 'reservasalas_edificios', array (
				'id' => $idbuilding 
		) );
	} else {
		$buildingdata = new stdClass ();
		$buildingdata->nombre = "";
	}
	// It recovers the campus.
	$sedes = $DB->get_records ( 'reservasalas_sedes' ); // It obtains the campus.
	$sedesArray = array ();
	foreach ( $sedes as $key => $value ) { // Run the campus in a loop to create an array.
		$sedesArray [$value->id] = $value->nombre;
	}
	
	// It recovers the modules.
	$moduledatas = $DB->get_records ( 'reservasalas_modulos', array (
			'edificio_id' => $idbuilding 
	) );
	$stringmodules = array ();
	foreach ( $moduledatas as $key => $value ) {
		$stringmodules [] = '#' . $value->nombre_modulo . ',' . $value->hora_inicio . '-' . $value->hora_fin . '';
	}
	
	// Form sent
	$editform = new formBuildingsEdit ( null, array (
			'prevaction' => $prevaction,
			'idbuilding' => $idbuilding,
			'buildingname' => $buildingdata->nombre,
			'place' => $sedesArray,
			'modules' => $stringmodules 
	) );
	
	// If the edition is cancel, show the normal view(table with all the buildings).
	
	if ($editform->is_cancelled ()) {
		$action = 'ver';
		// It captures all the data, if the edition was accepted.
	} else if ($fromform = $editform->get_data ()) {
		
		$hiddenid = optional_param ( 'buildingid', 0, PARAM_INT );
		
		if ($hiddenid != 0) {
			
			$explode = $fromform->modules;
			$modulesArray = array ();
			$modulesArray = explode ( '#', $explode );
			$steps = array ();
			
			// Creates an array with all the modules of the building that where added in the edition.
			foreach ( $modulesArray as $moduleArray ) {
				$steps [] = $moduleArray;
			}
			
			// Bring up all the info regarding every module of the building that was edited.
			$recordtwo = $DB->get_records ( 'reservasalas_modulos', array (
					'edificio_id' => $fromform->buildingid 
			) );
			$array = array ();
			
			// Creates an array with much rows as modules the building has.
			foreach ( $recordtwo as $recordt ) {
				$array [] = array (
						"id" => $recordt->id 
				);
			}
			
			$result = count ( $array );
			$i = 0;
			// Runs the modules added by the edition from.
			foreach ( $steps as $step ) {
				
				if ($step != null) {
					$string = explode ( ',', $step );
					
					$time = explode ( '-', $string [1] );
					// Recovers the information added in the edition form(name of the module, begining and ending time).
					$moduleName = $string [0];
					$start_module = $time [0];
					$end_module = $time [1];
					
					if (! empty ( $moduleName ) && ! empty ( $start_module ) && ! empty ( $end_module )) {
						
						if ($i < $result) { // If the building already has modules, it edits them.
							$param = $array [$i] ["id"];
							$info = $DB->get_record ( "reservasalas_modulos", array (
									'id' => $param,
									'edificio_id' => $fromform->buildingid 
							) );
							$info->nombre_modulo = $moduleName;
							$info->hora_inicio = $start_module;
							$info->hora_fin = $end_module;
							$DB->update_record ( 'reservasalas_modulos', $info );
							$i ++;
						} else { // If the building doesn't have modules, it creates them.
							
							$recordtwo = new stdClass ();
							$recordtwo->nombre_modulo = $moduleName;
							$recordtwo->hora_inicio = $start_module;
							$recordtwo->hora_fin = $end_module;
							$recordtwo->edificio_id = $fromform->buildingid;
							$DB->insert_record ( 'reservasalas_modulos', $recordtwo );
						}
					} else {
						// The information about the modules from the edition form are incorrect.
						// Change the ACTION to view.
						$warning = get_string ( 'warning', 'local_reservasalas' ) . '</br>';
						$action = 'ver';
					}
				}
			}
			
			if ($i < $result) {
				// if previously there was more modules that there were added or were modified by the edition, they get deleted.
				$total = $result - $i;
				echo $total;
				$select = "edificio_id='$fromform->buildingid' ORDER BY id DESC limit $total";
				$results = $DB->get_records_select ( 'reservasalas_modulos', $select );
				foreach ( $results as $result ) {
					$DB->delete_records ( 'reservasalas_modulos', array (
							'id' => $result->id 
					) );
				}
			}
			// Changes the name of the building and the campus to the one that were introduce in the edition form.
			$record = $DB->get_record ( 'reservasalas_edificios', array (
					'id' => $fromform->buildingid 
			) );
			$record->nombre = $fromform->edificio;
			$record->sedes_id = $fromform->sede;
			$DB->update_record ( 'reservasalas_edificios', $record );
			$action = $prevaction;
		}
		$action = 'ver';
	}
}
// Delete a building that already exists.
if ($action == 'borrar') {
	$idedificio = required_param ( 'edificio', PARAM_INT );
	// If the building has rooms, they get searched and deleted.
	if ($salas = $DB->get_records ( 'reservasalas_salas', array (
			'edificios_id' => $idedificio 
	) )) {
		foreach ( $salas as $sala ) {
			$DB->delete_records ( 'reservasalas_reservas', array (
					'salas_id' => $sala->id 
			) );
		}
		$DB->delete_records ( 'reservasalas_salas', array (
				'edificios_id' => $idedificio 
		) );
	}
	$DB->delete_records ( 'reservasalas_edificios', array (
			'id' => $idedificio 
	) );
	$action = "ver";
}

// It creates a building.
if ($action == 'crear') {
	// Creation form.
	$crearedificio = new createBuildingTwoAdminRoom ();
	if ($crearedificio->is_cancelled ()) {
		$action = 'ver';
		// if the creation form didn't cancel and has validated data it creates the building.
	} else if ($fromform = $crearedificio->get_data ()) {
		
		$record = new stdClass ();
		$record->nombre = $fromform->edificio;
		$record->sedes_id = $fromform->sede;
		$explode = $fromform->modules;
		// It creates the building and its campus.
		if ($DB->insert_record ( 'reservasalas_edificios', $record )) {
			$recordtwo = new stdClass ();
			$buildingid = $DB->get_record ( 'reservasalas_edificios', array (
					'nombre' => $fromform->edificio,
					'sedes_id' => $fromform->sede 
			) );
			$modulesArray = array ();
			$modulesArray = explode ( '#', $explode );
			$steps = array ();
			// Creates an array with all the added modules.
			foreach ( $modulesArray as $moduleArray ) {
				$steps [] = $moduleArray;
			}
			// Adds the modules to the building.(name,begining time and ending time for each module).
			foreach ( $steps as $step ) {
				if ($step) {
					$string = explode ( ',', $step );
					$time = explode ( '-', $string [1] );
					$moduleName = $string [0];
					$start_module = $time [0];
					$end_module = $time [1];
					if (! empty ( $moduleName ) && ! empty ( $start_module ) && ! empty ( $end_module )) {
						
						$recordtwo->nombre_modulo = $moduleName;
						$recordtwo->hora_inicio = $start_module;
						$recordtwo->hora_fin = $end_module;
						$recordtwo->edificio_id = $buildingid->id;
						$DB->insert_record ( 'reservasalas_modulos', $recordtwo );
					}
				}
			}
		} else {
			print_error ( "ERROR" );
		}
		$action = 'ver';
	}
}

// If the ACTION is "ver", it creates a table that will display all the existing building.
if ($action == 'ver') {
	$tabla = tablas::datasPlacesBuildingsAdminRoom ();
}

// **************************************************************************************************
// Creates the VIEW for each ACTION.

if ($action == 'editar') {
	
	$o = '';
	$title = get_string ( 'editbuilding', 'local_reservasalas' );
	$PAGE->navbar->add ( get_string ( 'roomsreserve', 'local_reservasalas' ) );
	$PAGE->navbar->add ( get_string ( 'adjustments', 'local_reservasalas' ) );
	$PAGE->navbar->add ( get_string ( 'seeandmodbuildings', 'local_reservasalas' ), 'edificios.php' );
	$PAGE->navbar->add ( $title, '' );
	$PAGE->set_title ( $title );
	$PAGE->set_heading ( $title );
	$o .= $OUTPUT->header ();
	$o .= $OUTPUT->heading ( get_string ( 'editbuilding', 'local_reservasalas' ) );
	
	ob_start ();
	$editform->display ();
	$o .= ob_get_contents ();
	ob_end_clean ();
	
	$o .= $OUTPUT->footer ();
} else if ($action == 'ver') {
	$o = '';
	
	$toprow = array ();
	$toprow [] = new tabobject ( get_string ( 'sites', 'local_reservasalas' ), new moodle_url ( '/local/reservasalas/sedes.php' ), get_string ( 'places', 'local_reservasalas' ) );
	$toprow [] = new tabobject ( get_string ( 'buildings', 'local_reservasalas' ), new moodle_url ( '/local/reservasalas/edificios.php' ), get_string ( 'buildings', 'local_reservasalas' ) );
	$toprow [] = new tabobject ( get_string ( 'studyrooms', 'local_reservasalas' ), new moodle_url ( '/local/reservasalas/salas.php' ), get_string ( 'rooms', 'local_reservasalas' ) );
	$toprow [] = new tabobject ( get_string ( 'resources', 'local_reservasalas' ), new moodle_url ( '/local/reservasalas/resources.php' ), get_string ( 'resources', 'local_reservasalas' ) );
	
	$title = get_string ( 'seeandmodbuildings', 'local_reservasalas' );
	$PAGE->navbar->add ( get_string ( 'roomsreserve', 'local_reservasalas' ) );
	$PAGE->navbar->add ( get_string ( 'adjustments', 'local_reservasalas' ) );
	$PAGE->navbar->add ( $title, 'edificios.php' );
	$PAGE->set_title ( $title );
	$PAGE->set_heading ( $title );
	
	$o .= $OUTPUT->header ();
	// $o.= $OUTPUT->heading("Edificios");
	$o .= $OUTPUT->tabtree ( $toprow, get_string ( 'buildings', 'local_reservasalas' ) );
	$urledificio = new moodle_url ( "edificios.php", array (
			'action' => 'crear' 
	) );
	$o .= $OUTPUT->single_button ( $urledificio, get_string ( 'createbuildings', 'local_reservasalas' ) );
	$o .= html_writer::table ( $tabla );
	$o .= $OUTPUT->single_button ( $urledificio, get_string ( 'createbuilding', 'local_reservasalas' ) );
	$o .= $OUTPUT->footer ();
} else if ($action == 'crear') {
	$o = '';
	$title = get_string ( 'createbuildings', 'local_reservasalas' );
	$PAGE->navbar->add ( get_string ( 'roomsreserve', 'local_reservasalas' ) );
	$PAGE->navbar->add ( get_string ( 'adjustments', 'local_reservasalas' ) );
	$PAGE->navbar->add ( get_string ( 'seeandmodbuildings', 'local_reservasalas' ), 'edificios.php' );
	$PAGE->navbar->add ( $title );
	$PAGE->set_title ( $title );
	$PAGE->set_heading ( $title );
	$o .= $OUTPUT->header ();
	$o .= $OUTPUT->heading ( $title );
	ob_start ();
	$crearedificio->display ();
	$o .= ob_get_contents ();
	ob_end_clean ();
	
	$o .= $OUTPUT->footer ();
} else if ($action == "sinsedes") {
	$o = '';
	$toprow = array ();
	$toprow [] = new tabobject ( get_string ( 'sites', 'local_reservasalas' ), new moodle_url ( '/local/reservasalas/sedes.php' ), get_string ( 'sites', 'local_reservasalas' ) );
	$toprow [] = new tabobject ( get_string ( 'buildings', 'local_reservasalas' ), new moodle_url ( '/local/reservasalas/edificios.php' ), get_string ( 'buildings', 'local_reservasalas' ) );
	$toprow [] = new tabobject ( get_string ( 'studyrooms', 'local_reservasalas' ), new moodle_url ( '/local/reservasalas/salas.php' ), get_string ( 'rooms', 'local_reservasalas' ) );
	$toprow [] = new tabobject ( get_string ( 'resources', 'local_reservasalas' ), new moodle_url ( '/local/reservasalas/resources.php' ), get_string ( 'resources', 'local_reservasalas' ) );
	
	$title = get_string ( 'seeandmodbuildings', 'local_reservasalas' );
	$PAGE->navbar->add ( get_string ( 'roomsreserve', 'local_reservasalas' ) );
	$PAGE->navbar->add ( get_string ( 'adjustments', 'local_reservasalas' ) );
	$PAGE->navbar->add ( $title, 'edificios.php' );
	$PAGE->set_title ( $title );
	$PAGE->set_heading ( $title );
	
	$o .= $OUTPUT->header ();
	$o .= $OUTPUT->tabtree ( $toprow, get_string ( 'buildings', 'local_reservasalas' ) );
	$o .= $OUTPUT->heading ( get_string ( 'buildings', 'local_reservasalas' ) );
	
	if ($sedes == 0) {
		$url = new moodle_url ( "sedes.php", array (
				'action' => 'crear' 
		) );
		$o .= "<center><strong>" . get_string ( 'nosites', 'local_reservasalas' ) . "<strong><center>";
		$o .= $OUTPUT->single_button ( $url, get_string ( 'campuscreate', 'local_reservasalas' ) );
	} else {
		
		$url = new moodle_url ( "edificios.php", array (
				'action' => 'crear' 
		) );
		$o .= "<center><strong>" . get_string ( 'nobuildings', 'local_reservasalas' ) . "<strong><center>";
		$o .= $OUTPUT->single_button ( $url, get_string ( 'createbuildings', 'local_reservasalas' ) );
	}
	$o .= $OUTPUT->footer ();
} else {
	print_error ( get_string ( 'invalidaction', 'local_reservasalas' ) );
}

echo $o;