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
 *            Hans Jeria Díaz (hansjeria@gmail.com)
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

// Page booking for users
require_once (dirname ( __FILE__ ) . '/../../config.php');
require_once ($CFG->dirroot . '/local/reservasalas/forms.php');
require_once ($CFG->dirroot . '/local/reservasalas/lib.php');
require_once ($CFG->dirroot . '/local/reservasalas/tablas.php');

global $DB, $USER, $CFG;

require_login (); 

$baseurl = new moodle_url ( '/local/reservasalas/reservar.php' ); 
$context = context_system::instance (); 
$PAGE->set_context ( $context );
$PAGE->set_url ( $baseurl );
$PAGE->set_pagelayout ( 'standard' );
$PAGE->set_title ( get_string ( 'reserveroom', 'local_reservasalas' ) );
$PAGE->set_heading ( get_string ( 'reserveroom', 'local_reservasalas' ) );
$PAGE->navbar->add ( get_string ( 'roomsreserve', 'local_reservasalas' ) );
$PAGE->navbar->add ( get_string ( 'reserverooms', 'local_reservasalas' ), 'reservar.php' );
echo $OUTPUT->header (); 
echo $OUTPUT->heading ( get_string ( 'reserveroom', 'local_reservasalas' ) );

$form_buscar = new formBuscarSalas ( null );
echo $form_buscar->display ();

if ($fromform = $form_buscar->get_data ()) {	
		if (! has_capability ( 'local/reservasalas:typeroom', context_system::instance () )) {
			//roomtype = {1: class room, 2: study room, 3: reunion room}
			$fromform->roomstype = 2;
		}
		if (! has_capability ( 'local/reservasalas:advancesearch', context_system::instance () )) {
			$fromform->addmultiply = 0;
			$fromform->enddate = $fromform->fecha;
			$fromform->size = "1-25";
			$fromform->fr ['frequency'] = 1;
		}		
				
		$days = "";
		if ( has_capability ( 'local/reservasalas:advancesearch', context_system::instance () )) {		
			if($fromform->addmultiply == 0){
				$fromform->enddate = $fromform->fecha;
			}
			//Concatenated string with all the selected days
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
			if (! isset ( $fromform->size ))
				$fromform->size = "1-25";
			if (! isset ( $fromform->fr ['frequency'] ))
				$fromform->fr ['frequency'] = 1;
		}
		
		list($weekBookings,$todayBookings) = booking_availability($fromform->fecha);
		
		/*
		$selectDate=date('Y-m-d',$fromform->fecha);	
		$today=date('Y-m-d',time());
		$sqlWeekBookings = "SELECT * 
					FROM {reservasalas_reservas}
					WHERE fecha_reserva >= ? 
					AND fecha_reserva <= ADDDATE(?, 7) 
					AND alumno_id = ? AND activa = 1";
		
		$weekBookings = $DB->get_records_sql($sqlWeekBookings, array($today, $today, $USER->id));		
		$todayBookings = $DB->count_records ( 'reservasalas_reservas', array (
							'alumno_id' => $USER->id,
							'fecha_reserva' => $selectDate,
							'activa' => 1));
		*/
		
		$moodleurl = $CFG->wwwroot . '/local/reservasalas/ajax/data.php';
		
		//Booking preferences for basic users
		if ($CFG->reservasDia == null)
			$CFG->reservasDia = 2;
		if ($CFG->reservasSemana == null)
			$CFG->reservasSemana = 6;
		
		//Javascript,CSS and DIV for GWT
		?>
		<link rel="stylesheet" type="text/css"  
			href= "<?php echo $CFG->wwwroot . '/local/reservasalas/salas/css/Salas.css'; ?>"
		/>
		<script type="text/javascript" language="javascript" 
			src="<?php echo $CFG->wwwroot . '/local/reservasalas/salas/salas.nocache.js'; ?>">
		</script>
		
		<div
			id="buttonsRooms" 
			moodleurl = " <?php echo $moodleurl; ?>"	
			initialDate = "<?php echo $fromform->fecha; ?>"
			typeRoom= "<?php echo $fromform->roomstype; ?>"
			campus = "<?php echo $fromform->SedeEdificio; ?>"
			userDayReservations = "<?php echo $todayBookings; ?>"
			userWeeklyBooking = "<?php echo $weekBookings; ?>"
			maxDailyBookings = "<?php echo $CFG->reservasDia; ?>"
			maxWeeklyBookings = "<?php echo $CFG->reservasSemana; ?>"	
			size = "<?php echo $fromform->size; ?>"
 			endDate = "<?php echo $fromform->enddate; ?>"
 			selectDays = "<?php echo $days; ?>"
 			weeklyFrequencyBookings = "<?php echo $fromform->fr['frequency']; ?>"
 			advOptions = "<?php echo $fromform->addmultiply; ?>" >
		</div>
		
		<?php 
}
echo $OUTPUT->footer (); 