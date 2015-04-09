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
require_once (dirname ( __FILE__ ) . '/../../config.php');
require_once ($CFG->dirroot . '/local/reservasalas/tablas.php');
global $DB, $USER, $PAGE;

$url = new moodle_url ( '/local/reservasalas/info.php' );
$context = context_system::instance ();
$PAGE->set_context ( $context );
$PAGE->set_url ( $url );
$PAGE->set_pagelayout ( 'popup' );
echo $OUTPUT->header ();

$idsala = required_param ( "sala", PARAM_TEXT );
$idmodulo = required_param ( "modulo", PARAM_TEXT );
$idmoduloA = optional_param ( "moduloA", 0, PARAM_INT );
$inicio = required_param ( "inicio", PARAM_TEXT );
$fecha = date ( "Y-m-d", $inicio );
$multiply = required_param ( "multiply", PARAM_TEXT );

$fin = required_param ( "fin", PARAM_TEXT );

$sun = optional_param ( "sun", 0, PARAM_INT );
$mon = optional_param ( "m", 0, PARAM_INT );
$tue = optional_param ( "t", 0, PARAM_INT );
$wed = optional_param ( "w", 0, PARAM_INT );
$thr = optional_param ( "th", 0, PARAM_INT );
$fri = optional_param ( "f", 0, PARAM_INT );
$sat = optional_param ( "s", 0, PARAM_INT );

if ($multiply == 1) {
	
	$fecha1 = mktime ( 0, 0, 0, date ( "m", $inicio ), date ( "d", $inicio ), date ( "Y", $inicio ) );
	$fecha2 = mktime ( 0, 0, 0, date ( "m", $fin ), date ( "d", $fin ), date ( "Y", $fin ) );
	
	$diferencia = $fecha2 - $fecha1;
	$dias = $diferencia / (60 * 60 * 24);
	$dias = ( int ) $dias;
	$repetir = array ();
	$diasArray = Array ();
	
	$arreglo = Array ();
	if ($mon == 1) {
		
		$arreglo [] = "monday";
	}
	if ($tue == 1) {
		
		$arreglo [] = "tuesday";
	}
	if ($wed == 1) {
		
		$arreglo [] = "wednesday";
	}
	if ($thr == 1) {
		
		$arreglo [] = "thursday";
	}
	if ($fri == 1) {
		
		$arreglo [] = "friday";
	}
	if ($sat == 1) {
		
		$arreglo [] = "saturday";
	}
	if ($sun == 1) {
		
		$arreglo [] = "sunday";
	}
	$arrayCount = count ( $arreglo ) - 1;
	for($f = 0; $f <= $arrayCount; $f ++) {
		$dow = $arreglo [$f];
		
		$step = 1;
		$unit = 'W';
		
		$start = new DateTime ( $fecha );
		$end = clone $start;
		
		$start->modify ( $dow ); // Move to first occurence
		$end->add ( new DateInterval ( 'P' . $dias . 'D' ) ); // Move to 1 year from start
		
		$interval = new DateInterval ( "P{$step}{$unit}" );
		$period = new DatePeriod ( $start, $interval, $end );
		
		foreach ( $period as $date ) {
			
			$repetir [] = "'" . $date->format ( 'Y-m-d' ) . "'";
		}
	}
	
	$h = count ( $repetir ) - 1;
}
if ($multiply == 0) {
	$repetir [] = date ( 'Y-m-d', $inicio );
	$h = 0;
}

$tabla = tablas::getInfo ( $h, $idsala, $repetir, $idmodulo, $idmoduloA );

$roomName = $DB->get_record ( 'reservasalas_salas', array (
		'id' => $idsala 
) );
$moduleName = $DB->get_record ( 'reservasalas_modulos', array (
		'id' => $idmodulo 
) );
$buildingName = $DB->get_record ( 'reservasalas_edificios', array (
		'id' => $roomName->edificios_id 
) );
$campusName = $DB->get_record ( 'reservasalas_sedes', array (
		'id' => $buildingName->sedes_id 
) );

echo '<h4>' . get_string ( 'campus', 'local_reservasalas' ) . ': ' . $campusName->nombre . '</h4>';
echo '<h4>' . get_string ( 'building', 'local_reservasalas' ) . ': ' . $buildingName->nombre . '</h4>';
echo '<h4>' . get_string ( 'room', 'local_reservasalas' ) . ': ' . $roomName->nombre . '</h4>';
echo '</br>';

echo html_writer::table ( $tabla );
echo '</br>';

echo '<form><input style="float: right;" onclick="javascript:window.close();" type="button" value="Cerrar Ventana" /></form>
';

?>