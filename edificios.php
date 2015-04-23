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
//a

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

//Código para setear contexto, url, layout
global $PAGE, $CFG, $OUTPUT, $DB;
require_login();
$url = new moodle_url('/local/reservasalas/edificios.php'); 
$context = context_system::instance();//context_system::instance();
$PAGE->set_context($context);
$PAGE->set_url($url);
$PAGE->set_pagelayout('standard');

//Capabilities
if(!has_capability('local/reservasalas:administration', $context)) {
		print_error(get_string('INVALID_ACCESS','Reserva_Sala'));
}

//Para advertencia de módulos mal escritos
$warning = '';

//Rescatamos la ACTION, pueden ser: ver, editar, borrar, agregar, crear.
//Cada ACTION mostrara una version de la pagina la cual varia según lo que el usuario utilice
//Por defecto el ACTION es ver, de manera que se mostrara una tabla con todos los módulos que existen.
$action = optional_param('action', 'ver', PARAM_TEXT);

//Comprueba que existan sede, ya que los edificios se encuentran dentro de las sedes.
//Ejemplo sede peñalolen tiene el edificio A, B, C, D y E.
if(!$DB->get_records('reservasalas_edificios')){
	$sedes=1;
	if(!$DB->get_records('reservasalas_sedes')){
		
		$sedes=0;
	}
	if($action=='ver'){
		//Se modifica el ACTION si no existen sede para mostrar un mensaje acorde a la situación.
	$action = "sinsedes";
	}
}

//Captura el ACTION editar, este se modifico via accion del usuario.
//Permite editar un edificio ya creado
if($action == 'editar'){   
	// Recuperar variables enviadas ocultas por el formulario
	$idbuilding= optional_param('edificio','0',PARAM_INT);
	$prevaction = optional_param('prevaction', 'ver', PARAM_TEXT);
	if($idbuilding!=0){
		$buildingdata = $DB->get_record('reservasalas_edificios', array('id'=>$idbuilding));
    	$placedata = $DB->get_record('reservasalas_sedes', array('id'=>$buildingdata->sedes_id));
		$record = $DB->get_record('reservasalas_edificios', array('id'=>$idbuilding));
	}else{
		$buildingdata = new stdClass();
		$buildingdata->nombre="";		
	}	
	//Recuperar las sedes
	$sedes=$DB->get_records('reservasalas_sedes'); //obtengo las sedes
	$sedesArray=array();
	foreach($sedes as $key=>$value){ //recorro las sedes para crear el array
		$sedesArray[$value->id]=$value->nombre;
	}
	
	//Recuperar los módulos
	$moduledatas = $DB->get_records('reservasalas_modulos', array('edificio_id'=>$idbuilding));
	$stringmodules=array();
	foreach($moduledatas as $key=>$value){	
		$stringmodules[] ='#'.$value->nombre_modulo.','.$value->hora_inicio.'-'.$value->hora_fin.'';	
	}	
    
	// Enviar a formulario
	$editform = new formBuildingsEdit(null, array('prevaction'=>$prevaction, 'idbuilding'=>$idbuilding, 'buildingname'=>$buildingdata->nombre,'place'=>$sedesArray, 'modules'=>$stringmodules));
	//si se cancela la edicion, que muestre la vista normal. Tabla con todos los edificios
	if ($editform->is_cancelled()) {
		$action = 'ver';
	//si se acepto la edición, capturo los datos introducidos	
	}else if ($fromform = $editform->get_data()) {
     
        $hiddenid= optional_param('buildingid',0,PARAM_INT);
		
		if($hiddenid!=0){
		
			$explode = $fromform->modules;
			$modulesArray=array();
			$modulesArray = explode('#', $explode);
			$steps=array();
			// se crea arreglo con todos lo modulos del edificio que se ingresaron en la edición
			foreach($modulesArray as $moduleArray){			
				$steps[]=$moduleArray;		
			}
				
			// trae la informacion de todos los modulos del edificio que se edito	
			$recordtwo = $DB->get_records('reservasalas_modulos', array('edificio_id'=>$fromform->buildingid));
			$array=array();
			// crea arreglo con tantas filas como modulos tenga el edificio
			foreach($recordtwo as $recordt){
				$array[]=array("id"=>$recordt->id);
			}
			
			$result = count($array);
			$i=0;
			// recorre modulos ingresados por formulario de edicion
			foreach($steps as $step){
		
				if($step!=null){
					$string=explode(',' , $step);
				
					$time=explode('-' , $string[1]);
					// recupera la informacion ingresada en el formulario de edicion, nombre del modulo, hora inicio y fin									
					$moduleName=$string[0];
					$start_module= $time[0];
					$end_module= $time[1];
					
					if(!empty($moduleName)&&!empty($start_module)&&!empty($end_module)){
			       
						if($i < $result){// si el edificio ya tenia modulos los edita					
							$param=$array[$i]["id"];
							$info=$DB->get_record("reservasalas_modulos", array('id'=>$param,'edificio_id'=>$fromform->buildingid));
							$info->nombre_modulo = $moduleName;
							$info->hora_inicio = $start_module;
							$info->hora_fin = $end_module;						
							$DB->update_record('reservasalas_modulos', $info);		
							$i++;
						}else{ // el edificio no tenia modulos, los crea.
					
							$recordtwo = new stdClass();
							$recordtwo->nombre_modulo = $moduleName;
							$recordtwo->hora_inicio = $start_module;
							$recordtwo->hora_fin = $end_module;
							$recordtwo->edificio_id = $fromform->buildingid;					
							$DB->insert_record('reservasalas_modulos', $recordtwo);				
						}				
					}else{// los datos sobre modulos ingresados en el formulario de edicion no son correctos
						  // cambia el action para mostrar					
						$warning = get_string('warning', 'local_reservasalas').'</br>';
						$action = 'ver';
					}
				}		
			}
		
			if($i<$result){
				// si previamente existian mas modulo de los que se agregaron o modificaron via la edicion se borran
				$total=$result-$i;
				echo $total;
				$select="edificio_id='$fromform->buildingid' ORDER BY id DESC limit $total";
				$results = $DB->get_records_select('reservasalas_modulos',$select);
				foreach($results as $result){			
					$DB->delete_records('reservasalas_modulos', array('id'=>$result->id));				
				}			
			}
			// cambie el nombre del eficio y la sede a la que pertenece a los ingresado en el formularion de edicion
			$record = $DB->get_record('reservasalas_edificios', array('id'=>$fromform->buildingid));
			$record->nombre = $fromform->edificio;
			$record->sedes_id = $fromform->sede;
			$DB->update_record('reservasalas_edificios', $record);
			$action = $prevaction;
			
		}
		$action = 'ver'; 
	}
}


// Borra un edificio que ya existe
if($action== 'borrar'){
	$idedificio = required_param('edificio',PARAM_INT);
	// si el eficio tiene salas asociadas a el, se buscan y borran
	if($salas = $DB->get_records('reservasalas_salas', array('edificios_id'=>$idedificio))){
		foreach ($salas as $sala){
			$DB->delete_records('reservasalas_reservas', array('salas_id'=>$sala->id));
		}
		$DB->delete_records('reservasalas_salas', array('edificios_id'=>$idedificio));
	}
    $DB->delete_records('reservasalas_edificios', array('id'=>$idedificio));
	$action = "ver";
}


// Se crea un edificio nuevo 
if($action== 'crear'){
	// Formulario de creción
	$crearedificio = new createBuildingTwoAdminRoom();
	if ($crearedificio->is_cancelled()) {
		$action= 'ver';
	 // si el formulario de creacion no se cancelo y tiene los datos validados se crea el edificio 
	}else if ($fromform = $crearedificio->get_data()) {
		
		$record = new stdClass();
		$record->nombre = $fromform->edificio;
		$record->sedes_id = $fromform->sede;
		$explode = $fromform->modules;
		// se crea el edificio y su sede asosiada
 		if($DB->insert_record('reservasalas_edificios', $record)){			
			$recordtwo = new stdClass();
			$buildingid = $DB->get_record('reservasalas_edificios', array('nombre'=>$fromform->edificio, 'sedes_id'=>$fromform->sede));
			$modulesArray=array();
		    $modulesArray = explode('#', $explode);
			$steps=array();
			// crea arreglos con los modulos ingresados
			foreach($modulesArray as $moduleArray){			
					$steps[]=$moduleArray;								
			}
			// se agregan los modulos al edificio. El nombre, hora inicio y hora fin para cada modulo.
			foreach($steps as $step){
				if($step){
				$string=explode(',' , $step);
				$time=explode('-' , $string[1]);			
				$moduleName=$string[0];
				$start_module= $time[0];
				$end_module= $time[1];			
				if(!empty($moduleName)&&!empty($start_module)&&!empty($end_module)){
				
					$recordtwo->nombre_modulo = $moduleName;
					$recordtwo->hora_inicio = $start_module;
					$recordtwo->hora_fin = $end_module;
					$recordtwo->edificio_id = $buildingid->id;					
					$DB->insert_record('reservasalas_modulos', $recordtwo);			
				}
			}
		}
			
	}else{
 			print_error("ERROR");
 		}
		$action= 'ver';
	 }
}


//Si el ACTION es ver crea la tabla que despliega todos los edificios que existen
if($action == 'ver'){
	$tabla = tablas::datasPlacesBuildingsAdminRoom();
}


//**************************************************************************************************
//Se crean las vistas de cada ACTION previamente implementados.

if($action == 'editar'){
	
	$o= '';
	$title = get_string('editbuilding', 'local_reservasalas');
	$PAGE->navbar->add(get_string('roomsreserve', 'local_reservasalas'));
	$PAGE->navbar->add(get_string('adjustments', 'local_reservasalas'));
	$PAGE->navbar->add(get_string('seeandmodbuildings', 'local_reservasalas'), 'edificios.php');
	$PAGE->navbar->add($title, '');
	$PAGE->set_title($title);
	$PAGE->set_heading($title);
	$o .= $OUTPUT->header();
	$o .= $OUTPUT->heading(get_string('editbuilding', 'local_reservasalas'));
	
	 
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
	
	$title = get_string('seeandmodbuildings', 'local_reservasalas');
	$PAGE->navbar->add(get_string('roomsreserve', 'local_reservasalas'));
	$PAGE->navbar->add(get_string('adjustments', 'local_reservasalas'));
	$PAGE->navbar->add($title, 'edificios.php');
	$PAGE->set_title($title);
	$PAGE->set_heading($title);
	
	$o.= $OUTPUT->header();
	//$o.= $OUTPUT->heading("Edificios");
	$o .= $OUTPUT->tabtree($toprow, get_string('buildings', 'local_reservasalas'));
	$urledificio = new moodle_url("edificios.php", array('action'=>'crear'));
	$o.= $OUTPUT->single_button($urledificio, get_string('createbuildings', 'local_reservasalas'));
	$o .= html_writer::table($tabla);
	$o.= $OUTPUT->single_button($urledificio, get_string('createbuilding', 'local_reservasalas'));
	$o .= $OUTPUT->footer();
	
}else if($action== 'crear'){
	$o = '';
	$title = get_string('createbuildings', 'local_reservasalas');
	$PAGE->navbar->add(get_string('roomsreserve', 'local_reservasalas'));
	$PAGE->navbar->add(get_string('adjustments', 'local_reservasalas'));
	$PAGE->navbar->add(get_string('seeandmodbuildings', 'local_reservasalas'), 'edificios.php');
	$PAGE->navbar->add($title);
	$PAGE->set_title($title);
	$PAGE->set_heading($title);
	$o .= $OUTPUT->header();
	$o .= $OUTPUT->heading($title);
	ob_start();
    $crearedificio->display();
    $o .= ob_get_contents();
    ob_end_clean();
        
	$o .= $OUTPUT->footer();
}else if($action == "sinsedes"){
	$o = '';
	$toprow = array();
	$toprow[] = new tabobject(get_string('sites', 'local_reservasalas'), new moodle_url('/local/reservasalas/sedes.php'), get_string('sites', 'local_reservasalas'));
	$toprow[] = new tabobject(get_string('buildings', 'local_reservasalas'), new moodle_url('/local/reservasalas/edificios.php'), get_string('buildings', 'local_reservasalas'));
	$toprow[] = new tabobject(get_string('studyrooms', 'local_reservasalas'), new moodle_url('/local/reservasalas/salas.php'), get_string('rooms', 'local_reservasalas'));
	$toprow[] = new tabobject(get_string('resources', 'local_reservasalas'), new moodle_url('/local/reservasalas/resources.php'), get_string('resources', 'local_reservasalas'));
	
	$title = get_string('seeandmodbuildings', 'local_reservasalas');
	$PAGE->navbar->add(get_string('roomsreserve', 'local_reservasalas'));
	$PAGE->navbar->add(get_string('adjustments', 'local_reservasalas'));
	$PAGE->navbar->add($title, 'edificios.php');
	$PAGE->set_title($title);
	$PAGE->set_heading($title);
	
	$o.= $OUTPUT->header();
	$o .= $OUTPUT->tabtree($toprow, get_string('buildings', 'local_reservasalas'));
	$o.= $OUTPUT->heading(get_string('buildings', 'local_reservasalas'));
	

	if($sedes==0){
		$url = new moodle_url("sedes.php", array('action'=>'crear'));
		$o.= "<center><strong>".get_string('nosites', 'local_reservasalas')."<strong><center>";
		$o.= $OUTPUT->single_button($url, get_string('campuscreate', 'local_reservasalas'));
		
	}else{
		
		$url = new moodle_url("edificios.php", array('action'=>'crear'));
		$o.= "<center><strong>".get_string('nobuildings', 'local_reservasalas')."<strong><center>";
		$o.= $OUTPUT->single_button($url, get_string('createbuildings', 'local_reservasalas'));
	}
	$o .= $OUTPUT->footer();
	
}else{
	print_error(get_string('invalidaction', 'local_reservasalas'));
}

echo $o;