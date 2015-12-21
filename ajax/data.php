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
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.
/**
 * @package mod
 * @subpackage emarking
 * @copyright 2014 Jorge Villalón {@link http://www.uai.cl}, Francisco García
 * @copyright 2015 Eduardo Aguirrebeña <eaguirrebena@alumnos.uai.cl>
 * @copyright 2015 Mark Michaelsen <mmichaelsen678@gmail.com>
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
//define("AJAX_SCRIPT", true);
//define("NO_DEBUG_DISPLAY", true);
require_once(dirname(dirname(dirname(dirname(__FILE__))))."/config.php");
require_once("qry/querylib.php");
require_once ($CFG->dirroot . "/local/reservasalas/lib.php");
global $CFG, $DB, $OUTPUT, $USER;
require_login();

$action = required_param("action", PARAM_TEXT);
$campusid = optional_param("campusid", 0, PARAM_INT);
$type = optional_param("type", 0, PARAM_INT);
$initialDate = optional_param("date", 1, PARAM_INT);
$multiply = optional_param("multiply", 0, PARAM_INT);
$size = optional_param("size", 0, PARAM_TEXT);
$userid = optional_param("userid", 0, PARAM_INT);
$moduleid = optional_param("moduleid", null, PARAM_TEXT);
$room = optional_param("room", null, PARAM_TEXT);
$eventname = optional_param("name", null, PARAM_TEXT);
$assistants = optional_param("asistentes", 0, PARAM_INT);
$enddate = optional_param("finalDate", 1, PARAM_INT);
$days = optional_param("days", null, PARAM_TEXT);
$frequency = optional_param("frequency", 0, PARAM_INT);
$start = optional_param("inicio", null, PARAM_TEXT);
$finish = optional_param("termino", null, PARAM_TEXT);
$roomname = optional_param("nombresala", null, PARAM_TEXT);
$modulename = optional_param("nombremodulo", null, PARAM_TEXT);
$resources = optional_param("resources", "prueba", PARAM_TEXT);

// Callback para from webpage
$callback = optional_param ( "callback", null, PARAM_RAW_TRIMMED );

// Headers
header ( "Content-Type: text/javascript" );
header ( "Cache-Control: no-cache" );
header ( "Pragma: no-cache" );

if($action == "getbooking"){
	$output = reservasalas_getBooking($type, $campusid, $initialDate, $multiply, $size, $enddate, $days, $frequency);
	$available = array();
	$modules = array();
	$rooms = array();
	$roombusy = array();
	$added = array();
	$modulesadded = array();
	$roomsadded = array();
	$contador = 0;
	foreach ($output as $availability) {
		if(!in_array($availability->moduloid, $added)){
			$added[] = $availability->moduloid;
			$modules[] = array(
				"id" => $availability->moduloid,
				"name" => $availability->modulonombre,
				"horaInicio" => $availability->moduloinicio,
				"horaFin" => $availability->modulofin
			);
		}
		if($contador > 0){
			if($anterior != $availability->salaid){
				$rooms[] = array(
						"salaid" => $salaid,
						"nombresala" => $roomname,
						"capacidad" => $capacidad,
						"disponibilidad" => $roombusy
				);
				$roombusy = array();
			}
		}
		$contador++;
		if(!in_array($availability->salaid, $roomsadded)){
			$anterior = $availability->salaid;
			$roomsadded[] = $availability->salaid;
			$salaid = $availability->salaid;
			$roomname = $availability->salanombre;
			$capacidad = $availability->capacidad;
		}
		$roombusy[] = array(
				"moduloid" => $availability->moduloid,
				"modulonombre" => $availability->modulonombre,
				"ocupada" => $availability->ocupada,
				"horaInicio" => $availability->moduloinicio,
				"horaFin" => $availability->modulofin
		);
	}
	$rooms[] = array(
			"salaid" => $salaid,
			"nombresala" => $roomname,
			"capacidad" => $capacidad,
			"disponibilidad" => $roombusy
	);
	$final = array(
			"Modulos" => $modules,
			"Salas" => $rooms
	);
	$output = $final;
	$jsonOutputs = array (
			"error" => "",
			"values" => $output
	);
}
else if($action == "info"){
	// 0 = false, 1 = true
	$isAdmin = 0;
	if ( has_capability ( "local/reservasalas:advancesearch", context_system::instance() )){
		$isAdmin = 1;
	}
	$infoUser = array(
			"firstname" => $USER->firstname,
			"lastname" => $USER->lastname,
			"email" => $USER->email,
			"isAdmin" => $isAdmin
	);
	$jsonOutputs = array (
			"error" => "",
			"values" => $infoUser
	);
}else if($action == "submission"){
	
	$campusid = optional_param("campusid", 0, PARAM_INT);
	$room = explode(",",$room);
	$moduleid = explode(",",$moduleid);
	$start = explode(",",$start);
	$finish = explode(",",$finish);
	$modulename = explode(",",$modulename);
	$roomname = explode(",",$roomname);
	$error= array();
	$values = array();
	if(!has_capability ( "local/reservasalas:advancesearch", context_system::instance () )){
		list($weekBookings,$todayBookings) = booking_availability($initialDate);
		if( $todayBookings == 2 
				|| count($room)>3 
				|| ( (($CFG->reservasDia - $todayBookings - count($room) + 1) < 0) 
						&& ($CFG->reservasSemana - $weekBookings - count($room)+1) < 0) ){
			$validation = false;
		}else{
			$validation = true;
		}
	}else{
		$validation = true;
	}
	$reservation = array ();
	for( $counter = 1; $counter < count($room); $counter++ ){
		if( $multiply == 1 && has_capability ( "local/reservasalas:advancesearch", context_system::instance () )){
			//calculate all the dates from reserves rooms (Y-m-d)
			$fechas = reservasalas_daysCalculator($initialDate,$enddate,$days,$frequency);
			foreach ($fechas as $fecha){
				if(reservasalas_validationBooking($room[$counter],$moduleid[$counter],$fecha) ){
					$time = time();
					$data = array ();
					$data ["fecha_reserva"] = $fecha;
					$data ["modulo"] = $moduleid[$counter];
					$data ["confirmado"] = 0;
					$data ["activa"] = 1;
					$data ["alumno_id"] = $USER->id;
					$data ["salas_id"] = $room[$counter];
					$data ["fecha_creacion"] = $time;
					$data ["nombre_evento"] = $eventname;
					$data ["asistentes"] = $assistants;
					
					array_push($reservation,$data);
					
					
					$values[]=array(
							"sala" => $room[$counter],
							"nombresala" => $roomname[$counter],
							"modulo" => $moduleid[$counter],
							"nombremodulo" => $modulename[$counter],
							"inicio" => $start[$counter],
							"termino" => $finish[$counter],
							"fecha" => $fecha
					);
				}else{
					$error[] = array(
							"sala" => $room[$counter],
							"nombresala" => $roomname[$counter],
							"modulo" => $moduleid[$counter],
							"nombremodulo" => $modulename[$counter],
							"inicio" => $start[$counter],
							"termino" => $finish[$counter],
							"fecha" => $fecha
					);
				}
			}
		}else{
			if( reservasalas_validationBooking($room[$counter],$moduleid[$counter],date("Y-m-d",$initialDate)) && $validation){
				$time = time();
				$data = array ();
				$data ["fecha_reserva"] = date ( "Y-m-d", $initialDate );
				$data ["modulo"] = $moduleid[$counter];
				$data ["confirmado"] = 0;
				$data ["activa"] = 1;
				$data ["alumno_id"] = $USER->id;
				$data ["salas_id"] = $room[$counter];
				$data ["fecha_creacion"] = $time;
				$data ["nombre_evento"] = $eventname;
				$data ["asistentes"] = $assistants;
				
				array_push($reservation,$data);
				$jsonOutputs = array (
						"error" => "",
						"values" => "ok"
				);
				$values[]=array(
						"sala" => $room[$counter],
						"nombresala" => $roomname[$counter],
						"modulo" => $moduleid[$counter],
						"nombremodulo" => $modulename[$counter],
						"inicio" => $start[$counter],
						"termino" => $finish[$counter],
						"fecha" => $initialDate
				);
			}else{
				$error[]=array(
						"sala" => $room[$counter],
						"nombresala" => $roomname[$counter],
						"modulo" => $moduleid[$counter],
						"nombremodulo" => $modulename[$counter],
						"inicio" => $start[$counter],
						"termino" => $finish[$counter],
						"fecha" => $initialDate
				);
			}
		}
	}
	
	$DB->insert_records("reservasalas_reservas", $reservation);
	
	$valuesArray = array(
			"well" => $values,
			"errors" => $error
	);
	
	$jsonOutputs = array (
			"error" => "",
			"values" => $valuesArray
	);
	//echo  "".$campusid."<br>";
	reservasalas_sendMail($values, $error, $USER->id, $assistants, $eventname, $campusid);
}

$jsonOutput = json_encode ( $jsonOutputs );
if ($callback){
	$jsonOutput = $callback . "(" . $jsonOutput . ");";
}
echo $jsonOutput;