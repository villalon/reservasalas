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

//código para setear contexto, url, layout
global $PAGE, $CFG, $OUTPUT, $DB;
require_login();
$url = new moodle_url('/local/reservasalas/resources.php'); 
$context = context_system::instance();//context_system::instance();
$PAGE->set_context($context);
$PAGE->set_url($url);
$PAGE->set_pagelayout('standard');

//Capabilities
//Comprueba si la persona que accede a la pagina tiene la capacitadad de ver el contenido
//ej: un alumno no tendria dicha capacidad, para ver los recursos
if(!has_capability('local/reservasalas:administration', $context)) {
		print_error(get_string('INVALID_ACCESS','Reserva_Sala'));
}
			
//rescatamos la ACTION, pueden ser: ver, editar, crear y borrar
$action = optional_param('action', 'ver', PARAM_TEXT);

if(!$DB->get_records('reservasalas_recursos')){
	
	if($action=='ver'){
		$action = "sinrecursos";
	}	
}


//Implementación del action crear
//permite crear un recurso
if($action == 'crear'){
	$resourceform = new formResources();
	if ($resourceform->is_cancelled()) {
		$action= 'ver';			  
	} else if ($fromform = $resourceform->get_data()) {
		// la comprobacion de si el recurso ya existe corre por parte del formulario
		// crea el nuevo recurso
		$record = new stdClass();
		$record->nombre = $fromform->resource;
		$DB->insert_record('reservasalas_recursos', $record);
		$action = "ver";
	}
}

//Implementación del action editar
//edita un recurso ya existente
if($action == 'editar'){   
	$idresource= optional_param('idresource','0',PARAM_INT );
	$resourceid= optional_param('resourceid','0',PARAM_INT );
	$prevaction = optional_param('prevaction', 'ver', PARAM_TEXT);
	$resourcename = $DB->get_record('reservasalas_recursos', array('id'=>$idresource));
	$record = $DB->get_record('reservasalas_recursos', array('id'=>$idresource));
	$editform = new formResourcesEdit(null, 
				array('prevaction'=>$prevaction, 'idresource'=>$idresource, 'resourcename'=>$resourcename->nombre));
	if ($editform->is_cancelled()) {
		$action = $prevaction;			
	}else if ($fromform = $editform->get_data()) {		
		if($resourceid!=0){
			// el recurso se edita, se cambia su nombre por uno no existente
			$record = $DB->get_record('reservasalas_recursos', array('id'=>$resourceid));
			$record->nombre = $fromform->resource;
			$DB->update_record('reservasalas_recursos', $record);
			$action = $prevaction;
		}		
	}
}

// Implementacion action borrar
// elimina un recurso existente
if($action == 'borrar'){
	$idresource= required_param('idresource',PARAM_INT );
	if (confirm_sesskey()) {
		$resources = $DB->get_records('reservasalas_recursos',  array('id'=>$idresource));
		foreach ($resources as $resource){			
			$DB->delete_records('reservasalas_salarecursos', array('recursos_id'=>$resource->id));				
		}
		$DB->delete_records('reservasalas_recursos', array('id'=>$idresource));   		
		$action = "ver";
	}else{
		print_error("ERROR");
	}	
}

// Implementacion action ver
// muestra un tabla con todos los recursos
if($action == 'ver'){
	$tabla= tablas::getResources(); 	
}


//Vistas de los action
//**************************************************************************************************************************************************
if($action == 'editar'){
	
	$o= '';
	$title = get_string('editresource', 'local_reservasalas');
	$PAGE->navbar->add(get_string('roomsreserve', 'local_reservasalas'));
	$PAGE->navbar->add(get_string('adjustments', 'local_reservasalas'));
	$PAGE->navbar->add(get_string('seeandmodresources', 'local_reservasalas'), 'resources.php');
	$PAGE->navbar->add($title, '');
	$PAGE->set_title($title);
	$PAGE->set_heading($title);
	$o .= $OUTPUT->header();
	$o .= $OUTPUT->heading(get_string('editresource', 'local_reservasalas'));
	$o .= '<h4>'.get_string('resource', 'local_reservasalas').': '.$resourcename->nombre.'</h4>';
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
	
	$title = get_string('seeandmodresources', 'local_reservasalas');
	$PAGE->navbar->add(get_string('roomsreserve', 'local_reservasalas'));
	$PAGE->navbar->add(get_string('adjustments', 'local_reservasalas'));
	$PAGE->navbar->add($title, 'resources.php');
	$PAGE->set_title($title);
	$PAGE->set_heading($title);
	
	$o.= $OUTPUT->header();
	//$o.= $OUTPUT->heading($title);
	$o .= $OUTPUT->tabtree($toprow, get_string('resources', 'local_reservasalas'));
	$url = new moodle_url("resources.php", array('action'=>'crear'));
	$o.= $OUTPUT->single_button($url, get_string('createnewresource', 'local_reservasalas'));
	$o .= html_writer::table($tabla);
	$o.= $OUTPUT->single_button($url, get_string('createnewresource', 'local_reservasalas'));
	$o .= $OUTPUT->footer();
}else if($action == 'crear'){
	$o= '';
	$title = get_string('createresource', 'local_reservasalas');
	$PAGE->navbar->add(get_string('roomsreserve', 'local_reservasalas'));
	$PAGE->navbar->add(get_string('adjustments', 'local_reservasalas'));
	$PAGE->navbar->add(get_string('resources', 'local_reservasalas'), 'resources.php');
	$PAGE->navbar->add($title);
	$PAGE->set_title($title);
	$PAGE->set_heading($title);
	$o .= $OUTPUT->header();
	$o .= $OUTPUT->heading($title);
	ob_start();
    $resourceform->display();
    $o .= ob_get_contents();
    ob_end_clean();
	$o .= $OUTPUT->footer();
}
else if($action == "sinrecursos"){
	$o = '';
	$toprow = array();
	$toprow[] = new tabobject(get_string('sites', 'local_reservasalas'), new moodle_url('/local/reservasalas/sedes.php'), get_string('places', 'local_reservasalas'));
	$toprow[] = new tabobject(get_string('buildings', 'local_reservasalas'), new moodle_url('/local/reservasalas/edificios.php'), get_string('buildings', 'local_reservasalas'));
	$toprow[] = new tabobject(get_string('studyrooms', 'local_reservasalas'), new moodle_url('/local/reservasalas/salas.php'), get_string('rooms', 'local_reservasalas'));
	$toprow[] = new tabobject(get_string('resources', 'local_reservasalas'), new moodle_url('/local/reservasalas/resources.php'), get_string('resources', 'local_reservasalas'));
	
	$title = get_string('seeandmodrooms', 'local_reservasalas');
	$PAGE->navbar->add(get_string('roomsreserve', 'local_reservasalas'));
	$PAGE->navbar->add(get_string('adjustments', 'local_reservasalas'));
	$PAGE->navbar->add(get_string('seeandmodrooms', 'local_reservasalas'), 'resources.php');
	$PAGE->set_title($title);
	$PAGE->set_heading($title);

	$o.= $OUTPUT->header();
	$o .= $OUTPUT->tabtree($toprow, get_string('resources', 'local_reservasalas'));
	$o.= $OUTPUT->heading(get_string('roomsreserve', 'local_reservasalas'));


	
		$url = new moodle_url("resources.php", array('action'=>'crear'));
		$o.= "<center><strong>".get_string('nosystemresources', 'local_reservasalas')."<strong><center>";
		$o.= $OUTPUT->single_button($url, get_string('createresource', 'local_reservasalas')); 
		$o .= $OUTPUT->footer();
}
else{
	print_error(get_string('invalidaction', 'local_reservasalas'));
}
echo $o;