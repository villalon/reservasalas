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

/**
 *
 * @package local
 * @subpackage reservasalas
 * @copyright 2014 Francisco García Ralph (francisco.garcia.ralph@gmail.com)
 *            Nicolás Bañados Valladares (nbanados@alumnos.uai.cl)
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

// Reservation user page.
// Capabilities: reservar, modificar, cancelar, consultar.
require_once (dirname ( __FILE__ ) . '/../../config.php');
require_once ($CFG->dirroot . '/local/reservasalas/forms.php');
require_once ($CFG->dirroot . '/local/reservasalas/lib.php');
require_once ($CFG->dirroot . '/local/reservasalas/tablas.php');

global $DB, $USER, $CFG;

require_login (); // Require login

$baseurl = new moodle_url ( '/local/reservasalas/reservar.php' ); // Important to create the page class.
$context = context_system::instance ();
$PAGE->set_context ( $context );
$PAGE->set_url ( $baseurl );
$PAGE->set_pagelayout ( 'standard' );
$PAGE->set_title ( get_string ( 'reserveroom', 'local_reservasalas' ) );
$PAGE->set_heading ( get_string ( 'reserveroom', 'local_reservasalas' ) );
$PAGE->navbar->add ( get_string ( 'roomsreserve', 'local_reservasalas' ) );
$PAGE->navbar->add ( get_string ( 'reserverooms', 'local_reservasalas' ), 'reservar.php' );
echo $OUTPUT->header (); // Header.
echo $OUTPUT->heading ( get_string ( 'reserveroom', 'local_reservasalas' ) );

$form_buscar = new formBuscarSalas ( null );
echo $form_buscar->display ();

if ($fromform = $form_buscar->get_data ()) {
	if (! has_capability ( 'local/reservasalas:typeroom', context_system::instance () )) {
		$fromform->roomstype = 2;
	}
	if (! has_capability ( 'local/reservasalas:advancesearch', context_system::instance () )) {
		$fromform->addmultiply = 0;
		$fromform->enddate = $fromform->fecha;
	}
	
	$recursoskeys = "";
	$rev = false;
	$totalrecursos = 0;
	if (isset ( $fromform->recursos ) && count ( $fromform->recursos ) > 0) {
		$recursoskeysarr = array ();
		foreach ( $fromform->recursos as $key => $value ) {
			
			if ($value) {
				
				$recursoskeysarr [] = $key;
				$rev = true;
				$totalrecursos ++;
			}
		}
	}
	$days = "";
	if (has_capability ( 'local/reservasalas:advancesearch', context_system::instance () )) {
		
		if ($fromform->ss ['monday'] == 1)
			$days = $days . "L";
		if ($fromform->ss ['tuesday'] == 1)
			$days = $days . "M";
		if ($fromform->ss ['wednesday'] == 1)
			$days = $days . "W";
		if ($fromform->ss ['thursday'] == 1)
			$days = $days . "J";
		if ($fromform->ss ['friday'] == 1)
			$days = $days . "V";
		if ($fromform->ss ['saturday'] == 1)
			$days = $days . "S";
	}
	$date = date ( 'Y-m-d', $fromform->fecha );
	$hoy = date ( 'Y-m-d', time () );
	$sqlsemana = "SELECT * 
				FROM {reservasalas_reservas}
				WHERE fecha_reserva >= '$hoy' AND fecha_reserva <= ADDDATE('$hoy', 7) AND alumno_id=$USER->id AND activa = 1";
	$reservasSemana = $DB->get_records_sql ( $sqlsemana );
	$reservasDia = $DB->count_records ( 'reservasalas_reservas', array (
			'alumno_id' => $USER->id,
			'fecha_reserva' => $date,
			'activa' => 1 
	) );
	
	if ( has_capability ( 'local/reservasalas:libreryrules', context_system::instance () )) {
					
<<<<<<< HEAD
			    $reservashoy=1000000000;
				$reservasemana=1000000000;
=======
			    $reservashoy=$CFG->reservas_dia_admin;
				$reservasemana=$CFG->reservas_semana_admin;
>>>>>>> 9920d14df9baf4113a7feaf71be671d75dcf39ea
					
			}else{
				
				$reservashoy= $CFG->reservasDia;
				$reservasemana=$CFG->reservasSemana;
			}
		

		?>
<link rel="stylesheet" type="text/css"  href= "salas/css/Salas.css"/>
<script type="text/javascript" language="javascript"src="salas/salas.nocache.js"></script>
<?php
		
		$moodleurl = $CFG->wwwroot . '/local/reservasalas/ajax/data.php';
		if (! isset ( $fromform->size )) 
			$fromform->size = "1-25";
		if (! isset ( $fromform->fr ['frequency'] )) 
			$fromform->fr ['frequency'] = 1;
		if ($CFG->reservasDia == null) 
			$CFG->reservasDia = 2;
		if ($CFG->reservasSemana == null) 
			$CFG->reservasSemana = 6;
		echo '<div
					 id="salas" 
					moodleurl="' . $moodleurl . '"	
					fecha="' . $fromform->fecha . '"
					type="' . $fromform->roomstype . '"
					campus="' . $fromform->SedeEdificio . '"
					userdailybooking="'.$reservasDia.'"
					userweeklybooking="'.count($reservasSemana).'"
					reservasdia="' . $reservashoy . '"
					reservassemana="' . $reservasemana . '"	
					size="' . $fromform->size . '"
 					finalDate="' . $fromform->enddate . '"
 					days="' . $days . '"
 					frequency="' . $fromform->fr ['frequency'] . '"
 					multiply="' . $fromform->addmultiply . '"
 		>
		</div>';
}
echo $OUTPUT->footer (); // Footer.