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
 * @copyright 2014 Jorge VillalÃ³n {@link http://www.uai.cl}, Francisco GarcÃ­a
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
define('AJAX_SCRIPT', true);
define('NO_DEBUG_DISPLAY', true);

require_once(dirname(dirname(dirname(dirname(__FILE__)))).'/config.php');
require_once('qry/querylib.php');
require_once ($CFG->dirroot . '/local/reservasalas/lib.php');

global $CFG, $DB, $OUTPUT, $PAGE, $USER;

require_login();

$action = required_param('action', PARAM_TEXT);
$campusid=optional_param('campusid', 0, PARAM_INT);
$type=optional_param('type', 0, PARAM_INT);
$initialDate=optional_param('date', 1, PARAM_INT);
//$rev=optional_param('rev', false, PARAM_BOOL);
$multiply=optional_param('multiply', 0, PARAM_INT);
$size=optional_param('size', 0, PARAM_TEXT);
$userid=optional_param('userid', 0, PARAM_INT);
$moduleid=optional_param('moduleid', null, PARAM_TEXT);
$room=optional_param('room', null, PARAM_TEXT);
$eventname=optional_param('name', null, PARAM_TEXT);
$asistentes=optional_param('asistentes', 0, PARAM_INT);
$finaldate=optional_param('finalDate', 1, PARAM_INT);
$days=optional_param('days', null, PARAM_TEXT);
$frequency=optional_param('frequency', 0, PARAM_INT);
$inicio=optional_param('inicio', null, PARAM_TEXT);
$termino=optional_param('termino', null, PARAM_TEXT);
$nombresala=optional_param('nombresala', null, PARAM_TEXT);
$nombremodulo=optional_param('nombremodulo', null, PARAM_TEXT);

$resources=optional_param('resources', "prueba", PARAM_TEXT);
// Callback para from webpage
$callback = optional_param ( 'callback', null, PARAM_RAW_TRIMMED );

// Headers
header ( 'Content-Type: text/javascript' );
header ( 'Cache-Control: no-cache' );
header ( 'Pragma: no-cache' );

if($action=="getbooking"){

	$output = get_booking($type, $campusid, $initialDate, $multiply, $size,$finaldate,$days,$frequency);

	$disponible=Array();
	$modulos = Array();
	$salas = Array();
	$ocupado=Array();
	$agregadosModulos=Array();
	$agregadosSalas=Array();
	$output2=$output;
	$contador=0;

	foreach ( $output as $disponibilidad) {
		if(!in_array($disponibilidad->moduloid, $agregados)){
			$agregados[]=$disponibilidad->moduloid;
			$modulos[]=array(
				"id"=>$disponibilidad->moduloid,
				"name"=>$disponibilidad->modulonombre,
				"horaInicio"=>$disponibilidad->moduloinicio,
				"horaFin"=>$disponibilidad->modulofin
			);
		}
		if($contador > 0){
			if($anterior!=$disponibilidad->salaid){
				$salas[] =array(
						"salaid"=>$salaid,
						"nombresala"=>$nombresala,
						"capacidad"=>$capacidad,
						"disponibilidad"=>$ocupado
				);
				$ocupado=Array();
			}
		}

		$contador++;
		if(!in_array($disponibilidad->salaid, $agregadosSalas)){
			$anterior=$disponibilidad->salaid;
			$agregadosSalas[]=$disponibilidad->salaid;
			$salaid=$disponibilidad->salaid;
			$nombresala=$disponibilidad->salanombre;
			$capacidad=$disponibilidad->capacidad;
		}
		$ocupado[]=Array(
				"moduloid"=>$disponibilidad->moduloid,
				"modulonombre"=>$disponibilidad->modulonombre,
				"ocupada"=>$disponibilidad->ocupada,
				"horaInicio"=>$disponibilidad->moduloinicio,
				"horaFin"=>$disponibilidad->modulofin
		);
	}
	$salas[] =array(
			"salaid"=>$salaid,
			"nombresala"=>$nombresala,
			"capacidad"=>$capacidad,
			"disponibilidad"=>$ocupado
	);

	$final = Array(
			"Modulos"=>$modulos,
			"Salas"=>$salas);
	$output=$final;
	$jsonOutputs = array (
			'error' => '',
			'values' => $output
	);
}

else if($action=="info"){
	// 0 = false, 1 = true
	$isAdmin= 0;
	if ( has_capability ( 'local/reservasalas:advancesearch', context_system::instance() )){
		$isAdmin= 1;
	}


	$infoUser=Array(
			"firstname"=>$USER->firstname,
			"lastname"=>$USER->lastname,
			"email"=>$USER->email,
			"isAdmin"=> "$isAdmin"

	);

	$jsonOutputs = array (
			'error' => '',
			'values' => $infoUser
	);

}else if($action=="submission"){

	$room=explode(",",$room);
	$moduleid=explode(",",$moduleid);
	$inicio=explode(",",$inicio);
	$termino=explode(",",$termino);
	$nombremodulo=explode(",",$nombremodulo);
	$nombresala=explode(",",$nombresala);

	$error= Array();
	$values=Array();
	if(!has_capability ( 'local/reservasalas:advancesearch', context_system::instance () )){
		list($weekBookings,$todayBookings) = booking_availability($initialDate);
		if((count($room)-1) > $todayBookings && ( (6 - $weekBookings) >= (count($room)-1) )){
			$validation = true;
		}else{
			$validation = false;
		}
	}else{
		$validation = true;
	}
	
	for( $i=1; $i<count($room); $i++ ){
		if( $multiply==1 && has_capability ( 'local/reservasalas:advancesearch', context_system::instance () )){
			$fechas=days_calculator($initialDate,$finaldate,$days,$frequency);
			foreach ($fechas as $fecha){
				if(validation_booking($room[$i],$moduleid[$i],$fecha)  ){
					$time = time();
					$data = array ();
					$data ['fecha_reserva'] = $fecha[$i];
					$data ['modulo'] = $moduleid[$i];
					$data ['confirmado'] = 0;
					$data ['activa'] = 1;
					$data ['alumno_id'] = $USER->id;
					$data ['salas_id'] = $room[$i];
					$data ['fecha_creacion'] = $time;
					$data ['nombre_evento'] = $eventname;
					$data ['asistentes'] = $asistentes;
					
					$DB->insert_record ( 'reservasalas_reservas', $data );
					$values[]=Array(
							'sala'=>$room[$i],
							'nombresala'=>$nombresala[$i],
							'modulo'=>$moduleid[$i],
							'nombremodulo'=>$nombremodulo[$i],
							'inicio'=>$inicio[$i],
							'termino'=>$termino[$i],
							'fecha'=>$initialDate);

				}else{
					$error[]=Array(
							'sala'=>$room[$i],
							'nombresala'=>$nombresala[$i],
							'modulo'=>$moduleid[$i],
							'nombremodulo'=>$nombremodulo[$i],
							'inicio'=>$inicio[$i],
							'termino'=>$termino[$i],
							'fecha'=>$initialDate);
				}
			}

		}else{

			if( validation_booking($room[$i],$moduleid[$i],date('Y-m-d',$initialDate)) && $validation){
				$time = time();
				$data = array ();
				$data ['fecha_reserva'] = date ( 'Y-m-d', $initialDate );
				$data ['modulo'] = $moduleid[$i];
				$data ['confirmado'] = 0;
				$data ['activa'] = 1;
				$data ['alumno_id'] = $USER->id;
				$data ['salas_id'] = $room[$i];
				$data ['fecha_creacion'] = $time;
				$data ['nombre_evento'] = $eventname;
				$data ['asistentes'] = $asistentes;

				$DB->insert_record ( 'reservasalas_reservas', $data );

				$jsonOutputs = array (
						'error' => '',
						'values' => 'ok'
				);

				$values[]=Array(
						'sala'=>$room[$i],
						'nombresala'=>$nombresala[$i],
						'modulo'=>$moduleid[$i],
						'nombremodulo'=>$nombremodulo[$i],
						'inicio'=>$inicio[$i],
						'termino'=>$termino[$i],
						'fecha'=>$initialDate);
			}else{
				$error[]=Array(
						'sala'=>$room[$i],
						'nombresala'=>$nombresala[$i],
						'modulo'=>$moduleid[$i],
						'nombremodulo'=>$nombremodulo[$i],
						'inicio'=>$inicio[$i],
						'termino'=>$termino[$i],
						'fecha'=>$initialDate);
					
			}
		}
	}

	$array=array('well'=>$values,'errors'=>$error);

	send_mail($values,$error,$USER->id,$asistentes,$eventname);
	$jsonOutputs = array (
			'error' => '',
			'values' => $array
	);
}


$jsonOutput=json_encode ( $jsonOutputs );

if ($callback)
	$jsonOutput = $callback . "(" . $jsonOutput . ");";

echo $jsonOutput;
