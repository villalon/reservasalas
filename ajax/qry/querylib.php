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
 * @package mod
 * @subpackage emarking
 * @copyright 2012 Jorge Villalon <jorge.villalon@uai.cl>
 * @copyright 2014 Nicolas Perez <niperez@alumnos.uai.cl>
 * @copyright 2014 Carlos Villarroel <cavillarroel@alumnos.uai.cl>
 * @copyright 2015 Eduardo Aguirrebeña <eaguirrebena@alumnos.uai.cl>
 * @copyright 2015 Mark Michaelsen <mmichaelsen678@gmail.com>
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 *         
 */
defined ("MOODLE_INTERNAL") || die ();

global $CFG;
function reservasalas_getModules($id) {
	global $DB;
	
	$data = $DB->get_records("reservasalas_modulos", array(
			"edificio_id" => $id 
	));
	return $data;
}
function reservasalas_getBooking($type, $campusid, $date, $multiply, $size, $finaldate, $days, $frequency) {
	global $DB;
	
	if ($multiply == 1) {
		
		$times = reservasalas_daysCalculator($date, $finaldate, $days, $frequency);
		$timesArray = array();
		foreach ($times as $time) {
			$timesArray [] = "'" . $time . "'";
		}
		$date = implode(",", $timesArray);
		
		if ($size != "0") {
			$sizePieces = explode ("-", $size);
			if ($sizePieces [1] == "+") {
				$sizePieces [1] = 1000;
			}
			// $sqlCapacityFilter = "AND rs.capacidad BETWEEN $sizePieces[0] AND $sizePieces[1]";
		}
	} else {
		$date = "'" . date ("Y-m-d", $date) . "'";
	}
	
	$sqlDisponibility = "SELECT salaid, salanombre, moduloid, modulonombre, moduloinicio, modulofin,capacidad , MAX(ocupada) as ocupada FROM (
	SELECT rs.id AS salaid, 
	rs.nombre AS salanombre, 
	rs.capacidad as capacidad, 
	rm.id AS moduloid, 
	rm.nombre_modulo as modulonombre, 
	rm.hora_inicio as moduloinicio, 
	rm.hora_fin as modulofin, 
	rr.activa as status, 
	CASE WHEN rr.id IS NULL THEN 0 ELSE 1 END AS ocupada 
	FROM {reservasalas_salas} AS rs 
	INNER JOIN {reservasalas_edificios} AS re ON (re.id = rs.edificios_id AND rs.tipo = ? AND re.id = ?) 
	INNER JOIN {reservasalas_modulos} AS rm ON (rm.edificio_id = re.id AND rm.nombre_modulo not like '%B') 
	LEFT JOIN {reservasalas_reservas} AS rr ON (rr.salas_id = rs.id AND rr.modulo = rm.id AND rr.fecha_reserva IN ($date) AND rr.activa=1) 
	ORDER BY rs.id, rm.nombre_modulo ASC) AS disp 
	GROUP BY salaid, moduloid";
	
	$data = $DB->get_recordset_sql($sqlDisponibility, array($type, $campusid));
	
	return $data;
}
function reservasalas_validationBooking($room, $module, $date) {
	global $DB;
	
	// If "activa" = 1, the referred record is active, and so it returns false. Otherwise, if the record isn't active
	// or not present at all, it returns true.
	if ($DB->get_record("reservasalas_reservas", array(
			"salas_id" => $room,
			"fecha_reserva" => $date,
			"modulo" => $module,
			"activa" => 1 
	))) {
		return false;
	} else {
		return true;
	}
}
function reservasalas_daysCalculator($date, $finalDate, $days, $frequency) {
	$time1 = mktime(0, 0, 0, date("m", $date), date("d", $date), date("Y", $date));
	$time2 = mktime(0, 0, 0, date("m", $finalDate), date("d", $finalDate), date("Y", $finalDate));
	
	// Obtain the amount of time between the starting date and the final date
	$diference = $time2 - $time1;
	
	// $diference is in Unix time, seconds are converted to minutes (60), minutes to hours (60), and hours to days (24)
	$daysInterval = $diference / (60 * 60 * 24);
	
	$repeat = array();
	$daysOfWeek = array();
	
	if (strpos($days, "L") !== FALSE){
		$daysOfWeek [] = "monday";
	}
	if (strpos($days, "M") !== FALSE){
		$daysOfWeek [] = "tuesday";
	}
	if (strpos($days, "W") !== FALSE){
		$daysOfWeek [] = "wednesday";
	}
	if (strpos($days, "J") !== FALSE){
		$daysOfWeek [] = "thursday";
	}
	if (strpos($days, "V") !== FALSE){
		$daysOfWeek [] = "friday";
	}
	if (strpos($days, "S") !== FALSE){
		$daysOfWeek [] = "saturday";
	}
	
	$arrayCount = count($daysOfWeek) - 1;
	$startDate = date("Y-m-d", $date);
	
	for($counter = 0; $counter <= $arrayCount; $counter++) {
		$day = $daysOfWeek [$counter];
		
		$step = $frequency;
		
		$start = new DateTime($startDate);
		
		// Clone start date and modify it to the last ocurrence
		$end = clone $start;
		
		// Move to first occurence
		$start->modify($day);
		
		$daysInterval = intval($daysInterval);
		
		$end->add(new DateInterval("P" . $daysInterval . "D"));
		
		$interval = new DateInterval("P{$step}W");
		$period = new DatePeriod($start, $interval, $end);
		
		foreach ($period as $date) {
			$repeat [] = $date->format("Y-m-d");
		}
	}
	
	return $repeat;
}
function reservasalas_sendMail($values, $error, $user, $asistentes, $eventname, $buildingid) {
	GLOBAL $USER, $DB;
	$userfrom = core_user::get_noreply_user();
	$userfrom->maildisplay = true;
	
	$message = get_string("dear", "local_reservasalas") . $USER->firstname . " " . $USER->lastname . ": \n \n";
	
	if($buildingid>0){
		
		$sql = "SELECT s.nombre as sedenombre, e.nombre as edificionombre
				FROM {reservasalas_edificios} AS e JOIN {reservasalas_sedes} AS s ON (e.sedes_id = s.id)
				WHERE e.id = ?";
		
		$names = $DB->get_record_sql($sql, array($buildingid));
	
		$message .= get_string("bookinginformation", "local_reservasalas") . "\n \n";
		$message .= get_string("site", "local_reservasalas") . ": " . $names->sedenombre . "\n";
		$message .= get_string("buildings", "local_reservasalas") . ": " . $names->edificionombre . "\n";
	}
	
	$message .= get_string("roomtype", "local_reservasalas") . ": Estudio \n";
	$message .= get_string("event", "local_reservasalas") . ": " . $eventname . "\n";
	$message .= get_string("assistants", "local_reservasalas") . ": " . $asistentes . "\n";
	$message .= get_string("responsibility", "local_reservasalas") . ": " . $USER->firstname . " " . $USER->lastname . "\n";
	$message .= get_string("rooms", "local_reservasalas") . ": \n";
	$message .= "El id del edificio es ". $buildingid .": \n";
	
	foreach ($values as $value) {
		$stamp = strtotime($value["fecha"]);
		$day = date("l", $stamp);
		
		$message .= get_string("date", "local_reservasalas") . ": " . $day . " " . date("Y-m-d",$value["fecha"]) . " - " 
				. get_string("room", "local_reservasalas") . ": " . $value["nombresala"] . " - " 
				. get_string("module", "local_reservasalas") . ": " . $value["nombremodulo"] . "\n";
	}
	// Format each "\n" into a line break
	$formattedMessage = nl2br($message);
	
	$eventdata = new stdClass();
	$eventdata->component = "local_reservasalas"; // your component name
	$eventdata->name = "reservenotification"; // this is the message name from messages.php
	$eventdata->userfrom = $userfrom;
	$eventdata->userto = $user;
	$eventdata->subject = get_string("confirmationbooking", "local_reservasalas");
	$eventdata->fullmessage = format_text_email($formattedMessage, FORMAT_HTML);
	$eventdata->fullmessageformat = FORMAT_HTML;
	$eventdata->fullmessagehtml = "";
	$eventdata->smallmessage = "";
	$eventdata->notification = 1; // this is only set to 0 for personal messages between users
	message_send($eventdata);
}