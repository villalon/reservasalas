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
 * 
 *
 * @package    local
 * @subpackage reservasalas
 * @copyright  2014 Francisco García Ralph (francisco.garcia.ralph@gmail.com)
 * 					Nicolás Bañados Valladares (nbanados@alumnos.uai.cl)
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
require_once(dirname(__FILE__) . '/../../config.php'); //obligatorio
require_once($CFG->dirroot.'/local/reservasalas/forms.php');
require_once($CFG->dirroot.'/local/reservasalas/tablas.php');

// Code to set the context, url and layout.
global $PAGE, $CFG, $OUTPUT, $DB;
require_login();
$url = new moodle_url('/local/reservasalas/sedes.php'); 
$context = context_system::instance();
$PAGE->set_context($context);
$PAGE->set_url($url);
$PAGE->set_pagelayout('standard');

//Capabilities
if(!has_capability('local/reservasalas:administration', $context)) {
		print_error(get_string('INVALID_ACCESS','Reserva_Sala'));
}
			
//We request the ACTION, it can be: ver, editar, eliminar, agregar, crear
$action = optional_param('action', 'ver', PARAM_TEXT);


//ACTION Controller
if($action == 'crear'){

	$sedeform = new formSede();
	if ($sedeform->is_cancelled()) {
		$action= 'ver';
			  
	} else if ($fromform = $sedeform->get_data()) {
		$record = new stdClass();
		$record->nombre = $fromform->sede;
		$DB->insert_record('reservasalas_sedes', $record);
		$action = "ver";
	}
	
	
}
if($action == 'editar'){

	$idplace= optional_param('idsede','0',PARAM_INT );
	$hiddenid= optional_param('idplace','0',PARAM_INT );
	$prevaction = optional_param('prevaction', 'ver', PARAM_TEXT);
	$placename = $DB->get_record('reservasalas_sedes', array('id'=>$idplace));
	$record = $DB->get_record('reservasalas_sedes', array('id'=>$idplace));
	 
	$editform = new formEditPlaces(null, array('prevaction'=>$prevaction, 'idplace'=>$idplace, 'placename'=>$placename->nombre));
	if ($editform->is_cancelled()) {
		$action = $prevaction;
			
	}else if ($fromform = $editform->get_data()) {

		if($hiddenid!=0){
			$record = $DB->get_record('reservasalas_sedes', array('id'=>$hiddenid));
			$record->nombre = $fromform->place;
			$DB->update_record('reservasalas_sedes', $record);
			$action = $prevaction;
			
		}
	}
}

if($action == 'borrar'){

	$idsede= required_param('idsede',PARAM_INT );
	if (confirm_sesskey()) {
		$edificios = $DB->get_records('reservasalas_edificios',  array('sedes_id'=>$idsede));
		foreach ($edificios as $edificio){
			$salas = $DB->get_records('reservasalas_salas', array('edificios_id'=>$edificio->id));
			foreach ($salas as $sala){
				$DB->delete_records('reservasalas_reservas', array('salas_id'=>$sala->id));
			}
			$DB->delete_records('reservasalas_salas', array('edificios_id'=>$edificio->id));
			
		}
		$DB->delete_records('reservasalas_edificios', array('sedes_id'=>$idsede));
   		$DB->delete_records('reservasalas_sedes', array('id'=>$idsede));
  
		$action = "ver";
	}else{
		print_error("ERROR");
	}
	
}
if($action == 'ver'){

	$tabla= tablas::getPlacesAdminRoom(); 
	
}

//View of the ACTIONS
//**************************************************************************************************************************************************
if($action == 'editar'){
	
	$o= '';
	$title = get_string('editcampus', 'local_reservasalas');
	$PAGE->navbar->add(get_string('roomsreserve', 'local_reservasalas'));
	$PAGE->navbar->add(get_string('adjustments', 'local_reservasalas'));
	$PAGE->navbar->add(get_string('seeandmodplaces', 'local_reservasalas'), 'sedes.php');
	$PAGE->navbar->add($title, '');
	$PAGE->set_title($title);
	$PAGE->set_heading($title);
	$o .= $OUTPUT->header();
	$o .= $OUTPUT->heading(get_string('editcampus', 'local_reservasalas'));
	$o .= "<h4>".get_string('campus', 'local_reservasalas').": $placename->nombre </h4>";
	$o .= "<br>";
	 
	ob_start();
	$editform->display();
	$o .= ob_get_contents();
	ob_end_clean();

	$o .= $OUTPUT->footer();
	
}else if($action == 'ver'){
	$o = '';
	
	$toprow = array();
	$toprow[] = new tabobject(get_string('sites', 'local_reservasalas'), new moodle_url('/local/reservasalas/sedes.php'), get_string('places', 'local_reservasalas'));
	$toprow[] = new tabobject(get_string('buildings', 'local_reservasalas'), new moodle_url('/local/reservasalas/edificios.php'), get_string('buildings', 'local_reservasalas'));
	$toprow[] = new tabobject(get_string('studyrooms', 'local_reservasalas'), new moodle_url('/local/reservasalas/salas.php'), get_string('rooms', 'local_reservasalas'));
	$toprow[] = new tabobject(get_string('resources', 'local_reservasalas'), new moodle_url('/local/reservasalas/resources.php'), get_string('resources', 'local_reservasalas'));
	
	$title = get_string('seeandmodplaces', 'local_reservasalas');																			
	$PAGE->navbar->add(get_string('roomsreserve', 'local_reservasalas'));
	$PAGE->navbar->add(get_string('adjustments', 'local_reservasalas'));
	$PAGE->navbar->add($title, 'sedes.php');
	$PAGE->set_title($title);
	$PAGE->set_heading($title);
	
	$o.= $OUTPUT->header();
	$o .= $OUTPUT->tabtree($toprow, get_string('sites', 'local_reservasalas'));
	$url = new moodle_url("sedes.php", array('action'=>'crear'));

	$o .= html_writer::table($tabla);
	$o.= $OUTPUT->single_button($url, get_string('createnewplace', 'local_reservasalas'));
	$o .= $OUTPUT->footer();
}else if($action = "crear"){
	$o= '';
	$title = get_string('campuscreate', 'local_reservasalas');
	$PAGE->navbar->add(get_string('roomsreserve', 'local_reservasalas'));
	$PAGE->navbar->add(get_string('adjustments', 'local_reservasalas'));
	$PAGE->navbar->add(get_string('places', 'local_reservasalas'), 'sedes.php');
	$PAGE->navbar->add($title);
	$PAGE->set_title($title);
	$PAGE->set_heading($title);
	$o .= $OUTPUT->header();
	$o .= $OUTPUT->heading($title);
	ob_start();
    $sedeform->display();
    $o .= ob_get_contents();
    ob_end_clean();
	$o .= $OUTPUT->footer();
}else{
	print_error(get_string('invalidaction', 'local_reservasalas'));
}
echo $o;