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
* @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
*/
defined ( 'MOODLE_INTERNAL' ) || die ();

global $CFG;

function get_modules($id) {
	global $DB;
	
$data= $DB->get_records('reservasalas_modulos',array('edificio_id'=>$id));
return $data;

}
function get_booking($type, $campusid,$date,$multiply,$size,$finaldate,$days,$frequency) {
	global $DB;
	
	
	
	$sqlfiltrocapacidad = '';
	if ($multiply == 1) {
		
		$fechas=days_calculator($date,$finaldate,$days,$frequency);
		$fechasArray=Array();
		foreach($fechas as $fecha){
			$fechasArray[]="'".$fecha."'";
		}
		$date=implode( ",", $fechasArray );

		if ($size != '0') {
			$sizePieces = explode ( "-", $size );
			if ($sizePieces [1] == "+") {
				$sizePieces [1] = 1000;
			}
			$sqlfiltrocapacidad = "AND rs.capacidad BETWEEN $sizePieces[0] AND $sizePieces[1]";
		
		}
	}else{
		$date="'".date ( 'Y-m-d', $date )."'";
		
	}
	$modulos = array ();
	
	
	
	$sqldisponibilidad = "SELECT salaid, salanombre, moduloid, modulonombre, moduloinicio, modulofin,capacidad , MAX(ocupada) as ocupada FROM (
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
	INNER JOIN {reservasalas_edificios} AS re ON (re.id = rs.edificios_id AND rs.tipo = $type AND re.id=$campusid)
	INNER JOIN {reservasalas_modulos} AS rm ON (rm.edificio_id = re.id AND rm.nombre_modulo not like '%B') 
	LEFT JOIN {reservasalas_reservas} AS rr ON (rr.salas_id = rs.id AND rr.modulo = rm.id AND rr.fecha_reserva IN ($date) AND rr.activa=1)
	WHERE 1=1
	
	ORDER BY rs.id, rm.nombre_modulo ASC) AS disp
	GROUP BY salaid, moduloid";
	// $sqlfiltrocapacidad (línea 84)
	
	$data = $DB->get_recordset_sql ( $sqldisponibilidad );
	
	return $data;

}
function validation_booking($room,$module,$date){
	global $DB;
	
	
	
	if($DB->get_record('reservasalas_reservas',Array('salas_id'=>$room,'fecha_reserva'=>$date,'modulo'=>$module,'activa'=>1))){
		return false;
		
	}
	else{
		return true;
	}
}

function days_calculator($date,$finalDate,$days,$frequency){
	
	$fecha1 = mktime ( 0, 0, 0, date ( "m", $date ), date ( "d", $date ), date ( "Y", $date ) );
	$fecha2 = mktime ( 0, 0, 0, date ( "m", $finalDate ), date ( "d", $finalDate ), date ( "Y", $finalDate ) );
		
	$diferencia = $fecha2 - $fecha1;
	$dias = $diferencia / (60 * 60 * 24);
		
	$repetir = array ();
	$diasArray = Array ();
	$arrayDays = Array ();
		
	$arrayDays = str_split($days);
	//var_dump($arrayDays);
	
	if (strpos($days, 'L') !== FALSE)
		$arreglo [] = "monday";
	if (strpos($days, 'M') !== FALSE)
		$arreglo [] = "tuesday";
	if (strpos($days, 'W') !== FALSE)
		$arreglo [] = "wednesday";
	if (strpos($days, 'J') !== FALSE)
		$arreglo [] = "thursday";
	if (strpos($days, 'V') !== FALSE)
		$arreglo [] = "friday";
	if (strpos($days, 'S') !== FALSE)
		$arreglo [] = "saturday";
	
	$arrayCount = count ( $arreglo ) - 1;
	$startDate=date ( 'Y-m-d', $date );
	
	
	for($f = 0; $f <= $arrayCount; $f ++) {
		$dow = $arreglo [$f];
	
		$step = $frequency;
		$unit = 'W';
		
		$start = new DateTime ( $startDate );
		
		$end = clone $start;
		
		// Move to first occurence
		$start->modify ( $dow ); 
		
		$dias = intval ( $dias );
		
		$end->add ( new DateInterval ( 'P' . $dias . 'D' ) ); // Move to 1 year from start
	
		$interval = new DateInterval ( "P{$step}{$unit}" );
		$period = new DatePeriod ( $start, $interval, $end );
	
		foreach ( $period as $date ) {
			$repetir [] = $date->format ( 'Y-m-d' );
		}
	}
	
	return $repetir;
}

function send_mail($values, $error, $user, $asistentes, $eventname){
	GLOBAL $USER;
	$userfrom = core_user::get_noreply_user ();
	$userfrom->maildisplay = true;
	
	
	$message = get_string('dear', 'local_reservasalas'). $USER->firstname . ' ' . $USER->lastname . ': ';
	$message .= '<br></br>';
	$message .= '<br></br>';
	$message .= get_string('bookinginformation', 'local_reservasalas');
	$message .= '<br></br>';
	$message .= '<br></br>';
	$message .= get_string('site', 'local_reservasalas').': ' . $campusId->nombre;
	$message .= '<br></br>';
	$message .= get_string('buildings', 'local_reservasalas').': ' . $buildingId->nombre;
	$message .= '<br></br>';
	$message .= get_string('roomtype', 'local_reservasalas').': Estudio';
	$message .= '<br></br>';
	$message .= get_string('event', 'local_reservasalas').': ' . $eventname;
	$message .= '<br></br>';
	$message .= get_string('assistants', 'local_reservasalas').': ' . $asistentes;
	$message .= '<br></br>';
	$message .= get_string('responsibility', 'local_reservasalas').': ' . $USER->firstname . ' ' . $USER->lastname;
	$message .= '<br></br>';
	$message .= get_string('rooms', 'local_reservasalas').': ';
	$message .= '<br></br>';
	foreach($values as $value){
		$stamp = strtotime($value["fecha"]);
		$day = date("l", $stamp);
		
		$message .= get_string('date', 'local_reservasalas').': ' .$day.' '.$value["fecha"] . ' - '.get_string('room', 'local_reservasalas').': ' .$value['nombresala'] . ' - '.get_string('module', 'local_reservasalas').': ' . $value['nombremodulo'];
		$message .= '<br></br>';
	}


	
	$eventdata = new stdClass ();
	$eventdata->component = 'local_reservasalas'; // your component name
	$eventdata->name = 'reservenotification'; // this is the message name from messages.php
	$eventdata->userfrom = $userfrom;
	$eventdata->userto = $user;
	$eventdata->subject = get_string('confirmationbooking', 'local_reservasalas');
	$eventdata->fullmessage = format_text_email ( $message, FORMAT_HTML );
	$eventdata->fullmessageformat = FORMAT_HTML;
	$eventdata->fullmessagehtml = '';
	$eventdata->smallmessage = '';
	$eventdata->notification = 1; // this is only set to 0 for personal messages between users
	 message_send($eventdata);
		
		


	
}
