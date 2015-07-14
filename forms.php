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
 * @package    local
 * @subpackage reservasalas
 * @copyright  2014 Francisco García Ralph (francisco.garcia.ralph@gmail.com)
 * 					Nicolás Bañados Valladares (nbanados@alumnos.uai.cl)
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
require_once(dirname(__FILE__) . '/../../config.php');
require_once($CFG->libdir.'/formslib.php');
require_once($CFG->dirroot.'/local/reservasalas/tablas.php');

//Utilizado en salas.php, formulario para editar una sala existente.
class editarSala extends moodleform{
	function definition(){
		global $CFG, $DB;
		$mform =& $this->_form;
		$instance = $this->_customdata;
		$prevaction=$instance['prevaction'];
		$edificioid=$instance['edificioid'];
		$idsala = optional_param('idsala', NULL, PARAM_RAW);
		$nombresala = $DB->get_record('reservasalas_salas', array('id'=>$idsala));
		if(empty($nombresala)){
			$nombresala = new stdClass();
			$nombresala->nombre = "101";
			$nombresala->nombre_pc = "PC 1";
			$nombresala->capacidad = '0';
			
		}
		
		$resourcesArray=array();
		$seeResources = $DB->get_records('reservasalas_recursos');
		
		foreach($seeResources as $seeResource){
			$nresources = $seeResource->id;
			$checkName=$nresources;
				
			$resourcesArray[] =& $mform->createElement('advcheckbox', $checkName, $seeResource->nombre, $seeResource->nombre.' ');
			if($DB->get_records('reservasalas_salarecursos', array('salas_id'=>$idsala, 'recursos_id'=>$seeResource->id))!=null){
			
				$mform->setDefault($checkName, '1');
			}
		}

		$mform->addElement('text', 'cambiarnombresala', get_string('roomsname', 'local_reservasalas').': ', array('value' => $nombresala->nombre));
		$mform->setType('cambiarnombresala', PARAM_TEXT);
		$mform->addRule('cambiarnombresala',get_string('indicateroomname', 'local_reservasalas'),'required');
		$mform->addElement('text', 'cambiarnombrepc', get_string('pcname', 'local_reservasalas').': ', array('value' => $nombresala->nombre_pc));
		$mform->setType('cambiarnombrepc', PARAM_TEXT);
		$mform->addRule('cambiarnombrepc',get_string('indicatepcname', 'local_reservasalas'),'required');
		$mform->addElement('hidden','action','editar');
		
		$types = array('1'=>get_string('class', 'local_reservasalas'), '2'=>get_string('study', 'local_reservasalas'),'3'=>get_string('reunion', 'local_reservasalas'));
		
		$mform->addElement('select', 'roomType', get_string('selectTypeRoom', 'local_reservasalas').': ', $types);
		$mform->setDefault('roomType', $nombresala->tipo);
		$mform->setType('roomType', PARAM_INT);
		$mform->addElement('text', 'cap', get_string('roomcapacity', 'local_reservasalas').': ', array('value'=>$nombresala->capacidad));
		$mform->setType('cap', PARAM_INT);
		$mform->AddGroup($resourcesArray,'', get_string('resources', 'local_reservasalas').': ');
		$mform->setType('action', PARAM_TEXT);
		$mform->addElement('hidden','edificio',$edificioid);
		$mform->setType('edificio', PARAM_INT);
		$mform->addElement('hidden','prevaction',$prevaction);
		$mform->setType('prevaction', PARAM_TEXT);
		$mform->addElement('hidden','idsala',$idsala);
		$mform->setType('idsala', PARAM_TEXT);
		$this->add_action_buttons();

	}
	function validation($data, $files){
		global $DB;
		$errors = array();
		if($DB->get_records_sql('select * from {reservasalas_salas} where nombre = ? AND edificios_id = ? AND tipo = ? AND id != ?', array($data['cambiarnombresala'],$data['edificio'], $data['roomType'], $data['idsala']))){
			$errors['cambiarnombresala'] = '*'.get_string('roomNameExists', 'local_reservasalas');
		}
		return $errors;
	}

}

//Utilizada en salas.php, formulario para crear salas, pide la cantidad de salas a crear.
class createRoomsTwo extends moodleform {
   function definition() {
		global $CFG, $DB;

		$mform =& $this->_form;
		
		$edificios = $DB->get_records('reservasalas_edificios');
		foreach ($edificios as $edificio){
			$sede = $DB->get_record('reservasalas_sedes', array('id'=>$edificio->sedes_id));
			$sedeedificio[$edificio->id] = $sede->nombre." - ".$edificio->nombre;
		}
		
		$types = array('1'=>get_string('class', 'local_reservasalas'), '2'=>get_string('study', 'local_reservasalas'),'3'=>get_string('reunion', 'local_reservasalas'));
		
		$mform->addElement('select', 'SedeEdificio', get_string('selectabuilding', 'local_reservasalas').': ', $sedeedificio);
		$mform->setType('SedeEdificio', PARAM_INT);
        $mform->addElement('select', 'roomType', get_string('selectTypeRoom', 'local_reservasalas').': ', $types);
        $mform->setType('roomType', PARAM_INT);
		$mform->addElement('text', 'sala', get_string('numbersofrooms', 'local_reservasalas').': ');
		$mform->setType('sala', PARAM_TEXT);
		$mform->addRule('sala',get_string('indicatenumbersofrooms', 'local_reservasalas'),'required');
		
		$mform->addRule('sala',get_string('indicatenumbersofrooms', 'local_reservasalas'),'nonzero');
		$mform->addElement('hidden','action','crear');
		$mform->setType('action', PARAM_TEXT);
		$this->add_action_buttons(true, get_string('next', 'local_reservasalas'));

	}
	
	function validation($data, $files){
		$errors=array();
		$salas=$data['sala'];
		if(empty($data['sala']) || is_null($data['sala'])){
			$errors['sala']=get_string('enteravalidnumericvalue', 'local_reservasalas');
		}
		if( !is_number($data['sala']) ){ 	
			$errors['sala']=get_string('enteravalidnumericvalue', 'local_reservasalas');			
		}
		if($data['sala']<0){
			$errors['sala']=get_string('enteravalidnumericvalue', 'local_reservasalas');
		}
		return $errors;
	}
	
}
class crearSalas extends moodleform {
	//Add elements to form
  function definition() {
		Global $DB;
		$mform =& $this->_form;
		$instance = $this->_customdata;
		$numerodesalas =$instance['sala'];
        $roomtype = $instance['type'];
        $edificioid=$instance['SedeEdificio'];

		if($edificio = $DB->get_record("reservasalas_edificios", array('id'=>$edificioid))){

			$sede = $DB -> get_record('reservasalas_sedes', array('id' => $edificio->sedes_id));
			$mform->addElement('hidden','sede',$sede->id);
			$mform->setType('sede', PARAM_INT);
		}
		
		$seeResources = $DB->get_records('reservasalas_recursos');
        $mform->addElement('hidden','edificio',$edificioid);
        $mform->setType('edificio', PARAM_INT);
        $mform->addElement('hidden','nombreedificio',$edificio->nombre); // nombre del edifcio
        $mform->setType('nombreedificio', PARAM_TEXT);
        $mform->addElement('hidden','nombresede',$sede->nombre); // nombre de la sede
        $mform->setType('nombresede', PARAM_TEXT);
		//$mform->addElement('hidden','numero',$instance['sala']);
		//$mform->setType('numero', PARAM_INT);
			
		for($i=0;$i<$numerodesalas;$i++){
			$resourcesArray=array();
			foreach($seeResources as $seeResource){
				$nresources = $seeResource->id;
				$checkName=$i.$nresources;
				$resourcesArray[] =& $mform->createElement('advcheckbox', $checkName, $seeResource->nombre, $seeResource->nombre.' ', array('group' => 1), array(0, 1));
			}
			$nsala =strval("sala$i");
			$npc = "pc$i";
			$ntype = "cap$i";
			$nres= "res$i";
			$value=101+$i;
			$mform->addElement('text', $nsala, get_string('roomsname', 'local_reservasalas'), array('value' => $value )); //***
			$mform->addRule($nsala, get_string('roomsname', 'local_reservasalas'), 'required'); // *******
			$mform->setType($nsala, PARAM_INT);
			$mform->addElement('text', $ntype, get_string('roomcapacity', 'local_reservasalas').': ');
			$mform->setType($ntype, PARAM_INT);
			$mform->setDefault($ntype,0);
	        $mform->AddGroup($resourcesArray,'', get_string('resources', 'local_reservasalas').': ');
			$mform->addElement('text', $npc ,get_string('pcname', 'local_reservasalas').': ', array('value' => 'Pc de Sala '.($i+1)));
			$mform->setType($npc, PARAM_INT);
			$mform->addElement('static'); //para crear un espacio entre los pc :)
		}
		$mform->addElement('hidden', 'typeRoom', $roomtype);
		$mform->setType('typeRoom', PARAM_INT);
		$mform->addElement('hidden', 'number', $numerodesalas);
		$mform->setType('number', PARAM_INT);
		$mform->addElement('hidden','action','agregar');
		$mform->setType('action', PARAM_TEXT);
		$this->add_action_buttons(true, get_string('roomscreates', 'local_reservasalas'));
	}
	function validation ($data, $files){
		/*
		global $DB;
		$errors=array();
		
		for($i=0;$i<$data['number'];$i++){
			$nsala =strval("sala$i");
			//$aux=101+$i;
			if($DB->get_record('reservasalas_salas', array('edificios_id'=>$data['edificio'],'nombre'=>$data[$nsala],'tipo'=>$data['typeRoom']))){
				$errors[$nsala]= "Este nombre ya existe en el Edficio";
			}
		}
		return $errors;
		/*
		$j=0;
		$todaslassalas=$DB->get_records('reservasalas_salas');
		foreach ($todaslassalas as $sala){
			$nsala="sala".$j;
			if($sala->nombre == $data[$nsala]){
				$errors[$nsala]= "Este nombre ya existe en el Edficio";
			}
			$j++;
		}
		
		
		return $errors;

		/*global $DB;
		
		$errors = array();
		for($i=0; $i<$data['number']; $i++){
			$nsala = 101+$i;
		if($DB->get_record('reservasalas_salas', Array('edificios_id'=>$data['edificio'],'nombre'=>$data[$nsala], 'tipo'=>$data['typeRoom']))){
			$errors[$nsala] = "*Sala no creada debido a que el nombre ya fue utilizado en esta sede";
		}
	}
return $errors;
	*/}	
}

class crearSala extends moodleform{
	function definition(){
		global $DB;
		$mform =& $this->_form;
		$instance = $this->_customdata;
		$edificioid =$instance['edificioid'];

		$resourcesArray=array();
		$seeResources = $DB->get_records('reservasalas_recursos');

		foreach($seeResources as $seeResource){
			$nresources = $seeResource->id;
			$checkName=$nresources;
				
			$resourcesArray[] =& $mform->createElement('advcheckbox', $checkName, $seeResource->nombre, $seeResource->nombre.' ', array('group' => 1), array(0, 1));
		}

		$mform->addElement('text', 'nombresala', get_string('roomsname', 'local_reservasalas').': ');
		$mform->setType('nombresala', PARAM_TEXT);
		$mform->addRule('nombresala',get_string('indicateroomname', 'local_reservasalas'),'required');
		$mform->addElement('text', 'nombrepc', get_string('pcname', 'local_reservasalas').': ');
		$mform->setType('nombrepc', PARAM_TEXT);
		$mform->addRule('nombrepc',get_string('indicatepcname', 'local_reservasalas'),'required');

		$types = array('1'=>get_string('class', 'local_reservasalas'), '2'=>get_string('study', 'local_reservasalas'),'3'=>get_string('reunion', 'local_reservasalas'));
		
		$mform->addElement('select', 'roomType', get_string('selectTypeRoom', 'local_reservasalas').': ', $types);
		$mform->setType('roomType', PARAM_INT);
		$mform->addElement('text', 'cap', get_string('roomcapacity', 'local_reservasalas').': ');
		$mform->setType('cap', PARAM_INT);
		$mform->AddGroup($resourcesArray,'', get_string('resources', 'local_reservasalas').': ');
		$mform->addElement('hidden','action','verporedificio');
		$mform->setType('action', PARAM_TEXT);
		$mform->addElement('hidden','edificio',$edificioid);
		$mform->setType('edificio', PARAM_INT);
		$mform->addElement('submit', 'boton', get_string('create', 'local_reservasalas'));
	}
	function validation($data, $files){
		global $DB;
		$errors = array();
		if($DB->get_records('reservasalas_salas', array('nombre'=>$data['nombresala'], 'edificios_id'=>$data['edificio']))){
			$errors['nombresala'] = '*'.get_string('roomNameExists', 'local_reservasalas');
		}
		return $errors;
	}
}

//Utilizado en edificios.php, formulario para la creación de edificios.
class createBuildingTwoAdminRoom extends moodleform {

	function definition() {
		global $CFG, $DB;

		$mform =& $this->_form;
		$sedes=$DB->get_records('reservasalas_sedes'); //obtengo las sedes
		$sedesArray=array();
		foreach($sedes as $key=>$value){ //recorro las sedes para crear el array
			$sedesArray[$value->id]=$value->nombre;
		}
		$mform->addElement('select', 'sede',get_string('campus', 'local_reservasalas').': ' , $sedesArray); //agrego el select para las sedes
		$mform->addElement('text', 'edificio',get_string('newbuilding', 'local_reservasalas').': ');//Agregar nuevos edificos
		$mform->setType('edificio', PARAM_TEXT);
		$mform->addRule('edificio',get_string('indicatenametobuilding', 'local_reservasalas'),'required');
		$mform->addElement('textarea', 'modules', get_string('modules', 'local_reservasalas').': ');
		$mform->setType('modules', PARAM_TEXT);
		$mform->addRule('modules', get_string('indicatemodules', 'local_reservasalas'), 'required');
		$mform->addElement('static', 'rule', get_string('modulerule', 'local_reservasalas'));
		$mform->addElement('static', 'condition',get_string('modulecondition', 'local_reservasalas'));
		$mform->addElement('hidden','action','crear');
		$mform->setType('action', PARAM_TEXT);
		$this->add_action_buttons(true,get_string('createnewbuilding', 'local_reservasalas'));
}
	function validation($data, $files){
		global $DB;
		$errors = array();
		if($DB->get_records('reservasalas_edificios', array('nombre'=>$data['edificio'], 'sedes_id'=>$data['sede']))){
			$errors['edificio'] = '*'.get_string('buildingExists', 'local_reservasalas');
		}
		
		$line = '';
		$linearray = array();
		$linestring = '';
		$explode = $data['modules'];
		$modulesArray=array();
		$modulesArray = explode('#', $explode);
		$steps=array();
	    foreach($modulesArray as $moduleArray){
		        $steps[]=$moduleArray;
		}
			foreach($steps as $step){
			if($step){
				$string=explode(',' , $step);
				$time=explode('-' , $string[1]);
				$moduleName=$string[0];
				$start_module= $time[0];
				$end_module= $time[1];
				$line ++;
				 
					if(empty($moduleName)||empty($start_module)||empty($end_module)){
		                	
						    $linearray[] = $line++;
						    $linestring = implode(', ', $linearray);
		                	$errors['modules'] = get_string('checkthestructure', 'local_reservasalas').$linestring.get_string('usethereference', 'local_reservasalas');
						}
		             }
                  }
                $linearray = array();
                $line = ''; 
                return $errors; 
	}
}
	

//Utilzado en sedes.php, formulario para la creación de sedes
class formSede extends moodleform {
	//Add elements to form
	function definition() {
		global $CFG,$DB;

		$mform =& $this->_form; // Don't forget the underscore!

		$mform->addElement('text', 'sede',get_string('newcampus', 'local_reservasalas').': ');
		$mform->setType('sede', PARAM_TEXT);
		$mform->addRule('sede',get_string('thenameexists', 'local_reservasalas'),'required');
		$mform->addElement('hidden','action','crear');
		$mform->setType('action', PARAM_TEXT);

		$this->add_action_buttons(true,get_string('campuscreate', 'local_reservasalas'));
	}
	function validation($data, $files){
		global $DB;
		$errors=array();
		$recuperarsede=$DB->get_record('reservasalas_sedes',array('nombre'=>$data['sede']));
		if(!empty($recuperarsede)){
			$errors['sede']=get_string('thenameexists', 'local_reservasalas');
		}
		if(empty($data['sede'])){
			$errors['sede']=get_string('thecampisempty', 'local_reservasalas');
			}
		return $errors;
	}
	
}

//Utilizado en sedes.php, formulario para la edición de una sede ya existente
class formEditPlaces extends moodleform {
	//Add elements to form
function definition() {
		global $CFG;

		$mform =& $this->_form; // Don't forget the underscore!
		$instance = $this->_customdata;
		$placeid = $instance['idplace'];
		$prevaction=$instance['prevaction'];
		$name = $instance['placename'];
		$idres = optional_param('idsede', NULL, PARAM_RAW);
		
    	$mform->addElement('text', 'place',get_string('campusname', 'local_reservasalas').': ', array('value'=> $name));
		$mform->setType('place', PARAM_TEXT);
		$mform->addRule('place',get_string('indicatecampus', 'local_reservasalas'),'required');
		$mform->addElement('hidden','action','editar');
		$mform->setType('action', PARAM_TEXT);
		$mform->addElement('hidden','idplace',$placeid);
		$mform->setType('idplace', PARAM_INT);
		$mform->addElement('hidden','prevaction',$prevaction);
		$mform->setType('prevaction', PARAM_TEXT);
		
		$this->add_action_buttons(true,get_string('changecampusname', 'local_reservasalas'));
	}
	
	function validation($data, $files){
		global $DB;
		$errors=array();
		$recuperarsede = $DB->get_records('reservasalas_sedes',array('nombre'=>$data['place']));
		if(!empty($recuperarsede)){
			$errors['place']= get_string('thenameexists', 'local_reservasalas');
		}
		return $errors;		
	}
	
}

//Utilizado en resources.php, formulario para la creación de recursos
class formResources extends moodleform {
	//Add elements to form
	function definition() {
		global $CFG;

		$mform =& $this->_form; // Don't forget the underscore!
        $mform->addElement('text', 'resource',get_string('newresource', 'local_reservasalas').': ');
		$mform->setType('resource', PARAM_TEXT);
		$mform->addRule('resource',get_string('indicateresource', 'local_reservasalas'),'required');
		$mform->addElement('hidden','action','crear');
		$mform->setType('action', PARAM_TEXT);
		$this->add_action_buttons(true,get_string('createresource', 'local_reservasalas'));
	}
	
	function validation($data, $files){
		global $DB;
		$errors=array();
		$nombredelrecurso = $DB->get_records('reservasalas_recursos', array('nombre'=>$data['resource']));
		if( !empty($nombredelrecurso) ){
			$errors['resource']= get_string('theresourceexist', 'local_reservasalas');
		}
		return $errors;
	}
}

//Utilizado por resources.php, formulario para la edición de un recurso existente.
class formResourcesEdit extends moodleform {
	//Add elements to form
	function definition() {
		global $CFG;

		$mform =& $this->_form; // Don't forget the underscore!
		$instance = $this->_customdata;
		$resourceid = $instance['idresource'];
		$prevaction=$instance['prevaction'];
		$name = $instance['resourcename'];
		$idres = optional_param('idresource', NULL, PARAM_RAW);
		
		$mform->addElement('text', 'resource',get_string('resourcename', 'local_reservasalas').': ', array('value'=> $name));
		$mform->setType('resource', PARAM_TEXT);
		$mform->addRule('resource',get_string('indicateresource', 'local_reservasalas').': ','required');
		$mform->addElement('hidden','action','editar');
		$mform->setType('action', PARAM_TEXT);
		$mform->addElement('hidden','resourceid',$resourceid);
		$mform->setType('resourceid', PARAM_INT);
		$mform->addElement('hidden','prevaction',$prevaction);
		$mform->setType('prevaction', PARAM_TEXT);
		$mform->addElement('hidden','idres',$idres);
		$mform->setType('idres', PARAM_INT);
		$this->add_action_buttons(true,get_string('changeresource', 'local_reservasalas'));
	}

	function validation($data, $files){
		global $DB;
		$errors=array();
		$buscarrecursoexistente= $DB->get_records('reservasalas_recursos',array('nombre'=>$data['resource']));
		if(!empty($buscarrecursoexistente)){
			$errors['resource']= get_string('thenameexists', 'local_reservasalas');
		}
		return $errors;
		
	}
}

//Utilizado en edificios.php, formulario para editar un edificio ya existente. 
//En via por parametro todos los atributros del edificio
class formBuildingsEdit extends moodleform {
	//Add elements to form
	function definition() {
		global $CFG, $DB;

		$mform =& $this->_form; // Don't forget the underscore!
		$instance = $this->_customdata;
	    $buildingid = $instance['idbuilding'];
	    $prevaction=$instance['prevaction'];
		$name = $instance['buildingname'];
		$modules=$instance['modules'];
		$places=$instance['place'];
		$idres = optional_param('edificio', NULL, PARAM_RAW);
        $moduleforline = implode('', $modules);
        $buildingplace = $DB->get_record('reservasalas_edificios', array('id'=>$buildingid));
		$placename = $DB->get_record('reservasalas_sedes', array('id'=>$buildingplace->sedes_id));
     
		$mform->addElement('select', 'sede', get_string('campus', 'local_reservasalas').': ', $places); //agrego el select para las sedes
		$mform->setDefault('sede',$placename->id);
		$mform->setType('sede', PARAM_INT);
		$mform->addElement('text', 'edificio',get_string('newbuildingname', 'local_reservasalas').': ', array('value'=>$name));//Agregar nuevos edificos
		$mform->setType('edificio', PARAM_TEXT);
		$mform->addElement('hidden', 'testbuilding', $name);
		$mform->setType('testbuilding', PARAM_TEXT);
		$mform->addRule('edificio',get_string('indicatenametobuilding', 'local_reservasalas').': ','required');
		$mform->addElement('textarea', 'modules', get_string('modules', 'local_reservasalas').': ');
		$mform->setDefault('modules',$moduleforline);
		$mform->setType('modules', PARAM_TEXT);
		$mform->addRule('modules', get_string('indicatemodules', 'local_reservasalas'), 'required');
		$mform->addElement('static', 'rule', get_string('modulerule', 'local_reservasalas').': ');
		$mform->addElement('static', 'condition',  get_string('modulecondition', 'local_reservasalas'));
		$mform->addElement('hidden','action','editar');
		$mform->setType('action', PARAM_TEXT);
		$mform->addElement('hidden','buildingid',$buildingid);
		$mform->setType('buildingid', PARAM_INT);
		$mform->addElement('hidden','prevaction',$prevaction);
		$mform->setType('prevaction', PARAM_INT);
		$this->add_action_buttons(true,get_string('changebuilding', 'local_reservasalas'));
	}
	
	function validation($data, $files){
	
		global $DB;
		
		$errors = array();
		$buildings = $DB->get_records('reservasalas_edificios', array('sedes_id'=>$data['sede']));
		foreach($buildings as $building){
			if($data['edificio'] != $data['testbuilding'] && $building->nombre == $data['edificio']){
				$errors['edificio'] = '*'.get_string('buildingExists', 'local_reservasalas');
				}
			}
		
	$line = '';
	$linearray = array();
	$linestring = '';
	$explode = $data['modules'];
	$modulesArray=array();
	$modulesArray = explode('#', $explode);
	$steps=array();
	foreach($modulesArray as $moduleArray){
		$steps[]=$moduleArray;
	}
	foreach($steps as $step){
		if($step){
			$string=explode(',' , $step);
			$time=explode('-' , $string[1]);
			$moduleName=$string[0];
			$start_module= $time[0];
			$end_module= $time[1];
			$line ++;
				
			if(empty($moduleName)||empty($start_module)||empty($end_module)){
				 
				$linearray[] = $line++;
				$linestring = implode(', ', $linearray);
				$errors['modules'] = get_string('checkthestructure', 'local_reservasalas').$linestring.get_string('usethereference', 'local_reservasalas');
			}
		}
	}
	
	$linearray = array();
	$line = '';
	return $errors;
	}
}


class comentarioAdmin extends moodleform{
	function definition(){
		$mform =& $this->_form;
		$instance = $this->_customdata;

		$reservaid =$instance['reservaid'];
		$mform->addElement('textarea', 'comentario', get_string('comment', 'local_reservasalas').': ', 'wrap="virtual" rows="5" cols="40"');
		$mform->addElement('hidden','action','comentario');
		$mform->setType('action', PARAM_TEXT);
		$mform->addElement('hidden','reserva',$reservaid);
		$mform->setType('reserva', PARAM_INT);
		$this->add_action_buttons(true, get_string('tocomment', 'local_reservasalas'));

	}
}

//Utilizado en misreservas.php, formulario para agregar un comentario en una reserva de sala.
class comentarioConfirmacion extends moodleform{
	function definition(){
		$mform =& $this->_form;
		$instance = $this->_customdata;
        $reservaid =$instance['idreserva'];
	
		$mform->addElement('textarea', 'comentario', get_string('reservecomment', 'local_reservasalas'), 'wrap="virtual" rows="5" cols="40"');
		$mform->setType('comentario', PARAM_TEXT);
		$mform->addElement('hidden','action','confirmar');
		$mform->setType('action', PARAM_TEXT);
		$mform->addElement('hidden', 'idreserva', $reservaid);
		$mform->setType('idreserva', PARAM_INT);
		$this->add_action_buttons(true, get_string('confirm', 'local_reservasalas'));
	}
}

class formularioprueba extends moodleform {
	
	function definition() {
	
		global $CFG, $DB;
	
		$mform =& $this->_form;
		$mform->addElement('date_selector', 'fecha', get_string('date', 'local_reservasalas').': ');
		$this->add_action_buttons(false, 'ver');
		
	}
	
}
class formBuscarSalas extends moodleform {

	function definition() {
		
		global $CFG, $DB;

		$mform =& $this->_form;
		// Copy center instructions
		$mform->addElement ( 'header', 'headerdate', get_string('basicoptions', 'local_reservasalas'));
		$mform->addElement('date_selector', 'fecha', get_string('date', 'local_reservasalas').': ', array(
    					'startyear' => date('Y'), 
    					'stopyear'  => date('Y')+2,
						));
		$sedeedificio = array();
		$edificios = $DB->get_records('reservasalas_edificios');
		$sedeedificio[0]=" ";
		foreach ($edificios as $edificio){
			$sede = $DB->get_record('reservasalas_sedes', array('id'=>$edificio->sedes_id));
			$sedeedificio[$edificio->id] = $sede->nombre." - ".$edificio->nombre;
		}
		
		$select=$mform->addElement('select', 'SedeEdificio', get_string('choose_buildings','local_reservasalas'),$sedeedificio);
		if(has_capability('local/reservasalas:advancesearch', context_system::instance())){
		
			if(has_capability('local/reservasalas:typeroom', context_system::instance())){
				$options=array(0=>"",1=>get_string('class', 'local_reservasalas'), 2=>get_string('study', 'local_reservasalas'), 3=>get_string('reunion', 'local_reservasalas'));
				$mform->addElement('select', 'roomstype', get_string('selectTypeRoom', 'local_reservasalas').': ', $options);
				$mform->setDefault('roomstype', '2');
			}
			
		// Copy center instructions
		$mform->addElement ( 'header', 'headeradvanced', get_string('advanceoptions', 'local_reservasalas'));
		$mform->setExpanded('headeradvanced', false);
		
			$mform->addElement('advcheckbox', 'addmultiply', get_string('activateadvanceoptions', 'local_reservasalas').': ');
		
			$mform->addElement('date_selector', 'enddate', get_string('enddate','local_reservasalas'));		
		$mform->disabledIf('enddate', 'addmultiply', 'notchecked');
		
		$array = Array();
		$array[]= $mform->createElement('advcheckbox', 'monday', '',get_string('monday', 'local_reservasalas'));
		$array[]= $mform->createElement('advcheckbox', 'tuesday', '',get_string('tuesday', 'local_reservasalas'));
		$array[]= $mform->createElement('advcheckbox', 'wednesday', '',get_string('wednesday', 'local_reservasalas'));
		$array[]= $mform->createElement('advcheckbox', 'thursday', '',get_string('thursday', 'local_reservasalas'));
		$array[]= $mform->createElement('advcheckbox', 'friday', '',get_string('friday', 'local_reservasalas'));
		$array[]= $mform->createElement('advcheckbox', 'saturday', '',get_string('saturday', 'local_reservasalas'));
		
		
		
		$mform->addGroup($array, 'ss', get_string('select','local_reservasalas'));
		$mform->disabledIf('ss', 'addmultiply', 'notchecked');
		
		$selectArray=array();
		$options = array(
				'1' => '1',
				'2' => '2',
				'3' => '3',
				'4' => '4');
		$selectArray[] = $mform->createElement('select', 'frequency', '', $options);
		$selectArray[] =$mform->createElement('static', '', '',get_string('week','local_reservasalas'));
		$mform->addGroup($selectArray, 'fr', get_string('frequency','local_reservasalas'));
		$mform->disabledIf('fr', 'addmultiply', 'notchecked');
		
		
		$options = array(
				'0' => get_string('notapplicable', 'local_reservasalas'),
				'1-25' => '0-25',
				'26-45' => '26-45',
				'46-75' => '46-75',
				'75-+' => '+75'
				);
		
		$mform->addElement('select', 'size', get_string('capacity', 'local_reservasalas').': ', $options);
		$mform->disabledIf('size', 'addmultiply', 'notchecked');
	    
		}
		$this->add_action_buttons(false, get_string('search', 'local_reservasalas'));

	}
	function validation($data,$files) {	
		global $DB;
	
		// Se crea objeto DateTime	
		$today = new DateTime();
		// Se deja hora y minutos en 0 (medianoche)
		$today->setTime(0,0,0);
		// Se clona objeto para hoy
		$week =  clone $today;
		// Se calcula la misma fecha con 7 dias hacia adelante
		$week =  $week->modify('+7 days');

		$errors=array();

		// Verifica que la fecha del formulario sea al menos hoy
		if($data['fecha']<$today->getTimestamp()){
			$errors['fecha'] = get_string('checkthedate', 'local_reservasalas');
		
		}
	
		// Verifica que la fecha solicitada no sea en Domingo	
		if(date('N',$data['fecha'])==7) {
			
			$errors['fecha'] = get_string('cannotreservesunday', 'local_reservasalas');
			
		}
		
		
		
		if(!(has_capability('local/reservasalas:libreryrules', context_system::instance()))){
			// Si no es biblioteca verifica que no reserve mas alla de 7 dias adelante
			if($data['fecha']>$week->getTimestamp()){
				$errors['fecha'] = get_string('checkthedate', 'local_reservasalas');
			
			}
			
			
		}

		
		
		
		if(has_capability('local/reservasalas:typeroom', context_system::instance())){
			if($data['roomstype']==0){
				$errors['roomstype'] = get_string('selectaroom', 'local_reservasalas');
		
			}
		}
		if(isset($data['alumno'])){
			if ($data['alumno'] != "") {
				if(!$DB->get_record('user', array('username'=>$data['alumno']))){
					$errors['alumno'] = get_string('notexiststudent', 'local_reservasalas');
				}
			}
				
		}
		if(!has_capability('local/reservasalas:typeroom', context_system::instance())){
			if($data['SedeEdificio']==0){
				$errors['SedeEdificio'] = get_string('selectbuilding', 'local_reservasalas');
			
			}elseif(!$DB->get_records('reservasalas_salas', array('edificios_id'=>$data['SedeEdificio'],'tipo'=>'2'))){
			$errors['SedeEdificio'] = get_string('arenotrooms', 'local_reservasalas');
				
		}
		}
			
			
		
		if(has_capability('local/reservasalas:advancesearch', context_system::instance())){
			
			$diasArray=$data['ss'];
			$fecha1=mktime(0,0,0,date("m", $data['fecha']),date("d", $data['fecha']),date("Y", $data['fecha']));
			$fecha2=mktime(0,0,0,date("m", $data['enddate']),date("d", $data['enddate']),date("Y", $data['enddate']));
			
			$diferencia=$fecha2-$fecha1;
			$dias=$diferencia/(60*60*24);
			if($data['SedeEdificio']==0){
				$errors['SedeEdificio'] = get_string('selectbuilding', 'local_reservasalas');
					
			}
			else if(has_capability('local/reservasalas:typeroom', context_system::instance())){
			
			if(!$DB->get_records('reservasalas_salas', array('edificios_id'=>$data['SedeEdificio'],'tipo'=>$data['roomstype']))){
				$errors['SedeEdificio'] = get_string('arenotrooms', 'local_reservasalas');
			}
			}else if(!$DB->get_records('reservasalas_modulos', array('edificio_id'=>$data['SedeEdificio']))){
				$errors['SedeEdificio'] = get_string('arenotmodules', 'local_reservasalas');
					
			}
			
			
			
			
		if($data['addmultiply']==1){
			if($diasArray['monday']==0 && $diasArray['tuesday']==0 && $diasArray['wednesday']==0 && $diasArray['thursday']== 0 &&
			$diasArray['friday']==0 && $diasArray['saturday']==0 && $diasArray['sunday']==0){
				
				$errors['ss'] = get_string('selectatleastoneday', 'local_reservasalas');
			}else if($dias < 7){
				$param=false;
				for($i=0;$i<=$dias;$i++){					
					$siguiente = strtotime('+'.$i.' day',$data['fecha']);	
								
					$dia_siguiente = strtolower(date("l",$siguiente));
					
								
					if($diasArray[$dia_siguiente] == 1){
						$i=$dias+1;
						$param=true;
					}	
				}
				if($param==false){					
					$errors['ss'] = get_string('checkthedays', 'local_reservasalas');
				}	
			}
			if($data['enddate']<$data['fecha']|| $data['fecha']==$data['enddate']){
				$errors['enddate'] = get_string('checkthedate', 'local_reservasalas');
				
			}
	}
 
		}
	 		
	
	
	
	
		return $errors;
	}
}
//Formulario utlizado en bloquear.php
//Pide un correo institucional para llevar a cabo un bloqueo del módulo
class buscadorUsuario extends moodleform{
	function definition() {
		global $CFG;
		$usertype=$CFG->user;
		$mform =& $this->_form;
		$mform->addElement('text', 'usuario', get_string('uaiemail', 'local_reservasalas').': ');
		$mform->setType('usuario', PARAM_TEXT);
		$mform->addRule('usuario', get_string('uaiemail', 'local_reservasalas'), 'required');
		$mform->addElement('static','','', $usertype);
		$mform->addElement('textarea', 'comentario', get_string('comment', 'local_reservasalas').': ', 'cols="40" rows="10"' );

		$this->add_action_buttons(false, get_string('block', 'local_reservasalas'));
	}
	function validation($data,$files) {
		global $DB;
		$errors=array();

		if($user = $DB->get_record('user', array('username'=>$data['usuario']))){
			if($bloqueos = $DB->get_records('reservasalas_bloqueados', array('alumno_id'=>$user->id))){
				foreach($bloqueos as $bloqueo){
					if($bloqueo->estado ==1){
						$errors['usuario'] = '*'.get_string('blockuser', 'local_reservasalas');
					}
				}
			}
		}else{
			$errors['usuario'] = '*'.get_string('notuser', 'local_reservasalas').': ';
		}
		return $errors;
	}
}
//Formulario para desbloquear alumno
class desbloquearAlumnoForm extends moodleform{
	function definition(){
		global $CFG, $DB, $OUTPUT;
		$usertype=$CFG->user;
		$mform =& $this->_form;
        $mform->addElement('text', 'usuario', get_string('uaiemail', 'local_reservasalas').': ');
        $mform->addRule('usuario', get_string('uaiemail', 'local_reservasalas'), 'required');
		$mform->setType('usuario', PARAM_TEXT);
		$mform->addElement('static','','', $usertype);
		$mform->addElement('textarea', 'comentario', get_string('comment', 'local_reservasalas').': ', 'cols="40" rows="10"' );

		$this->add_action_buttons(false, get_string('unblock', 'local_reservasalas'));
	}
	function validation($data,$files) {
		global $DB;
		$errors=array();
		$datenow = date('Y-m-d');
		$bloqueado = false;
		if($user = $DB->get_record('user', array('username'=>$data['usuario']))){
			
			if($DB->get_record('reservasalas_bloqueados',array('alumno_id'=>$user->id,'estado'=>1))){
				$bloqueado = true;
			}
				
			if($bloqueado==false){
				$errors['usuario'] = '*'.get_string('unblockuser', 'local_reservasalas').': ';
			}
		}else{
			$errors['usuario'] = '*'.get_string('notuser', 'local_reservasalas').': ';
		}
		return $errors;
	}
}
class formReservarFecha extends moodleform  {
	//Add elements to form
	public function definition() {

		global $CFG, $DB, $USER;
		$mform =& $this->_form; // Don't forget the underscore!
		$instance = $this->_customdata;
		$valueSemana = $instance['semana'];
		$valueDia = $instance['dia'];
        $valueModulo="";
		$fecha= $instance['fecha'];//$_REQUEST['fecha']['day']."/".$_REQUEST['fecha']['month']."/".$_REQUEST['fecha']['year'];
			
		$mform->addElement('hidden','fecha',$fecha);
		$mform->setType('fecha',PARAM_TEXT);
		$mform->addElement('hidden','elegir',$instance['SedeEdificio']);
		$mform->setType('elegir',PARAM_INT);
		$mform->addElement('hidden','selectSalaUno','','id="id_selectSalaUno"');
		$mform->setType('selectSalaUno',PARAM_INT);
		$mform->addElement('hidden','selectModuloUno','','id="id_selectModuloUno"');
		$mform->setType('selectModuloUno',PARAM_INT);
		$mform->addElement('hidden','idsalaUno','','id="id_idsalaUno"');
		$mform->setType('idsalaUno',PARAM_INT);
		$mform->addElement('hidden','salaUnoParam','','id="id_salaUnoParam"');
		$mform->setType('salaUnoParam',PARAM_INT);
		$mform->addElement('hidden','selectSalaDos','','id="id_selectSalaDos"');
		$mform->setType('selectSalaDos',PARAM_INT);
		$mform->addElement('hidden','selectModuloDos','','id="id_selectModuloDos"');
		$mform->setType('selectModuloDos',PARAM_INT);
		$mform->addElement('hidden','idsalaDos','','id="id_idsalaDos"');
		$mform->setType('idsalaDos',PARAM_INT);
		$mform->addElement('hidden','salaDosParam','','id="id_salaDosParam"');
		$mform->setType('salaDosParam',PARAM_INT);
		$mform->addElement('hidden','numModulos', '','id="id_numModulos"');
		$mform->setType('numModulos',PARAM_INT);
		
		$id=$instance['idalumno'];
		$mform->addElement('hidden','alumno',$id);
		$mform->setType('alumno',PARAM_INT);
		$mform->addElement('hidden','form','1');
		$mform->setType('form',PARAM_INT);
		$fechahoy = date('Y-m-d');
		if($DB->get_records_sql("select * from {reservasalas_bloqueados} where alumno_id = $USER->id AND estado = 1")){
			$mform->addElement('static','','','<p style=\"font-family:arial;color:red;\">**No puedes reservar salas de estudio ya que te encuentras bloqueado.
						</p>');
		}
		elseif($valueSemana>=6){
			$mform->addElement('static','','','<p style=\"font-family:arial;color:red;\">**Ya has utilizado tus 6 módulos de la semana.<br>Tendrás que esperar hasta la próxima semana.
						</p>');
		}else if($valueDia >= 2){
			$mform->addElement('static','','','<p style=\"font-family:arial;color:red;\">**Lo sentimos, pero solo puedes reservar dos módulos al dia.
							</p>');
		}else{
			$mform->addElement('static','','','');
			$mform->addElement('static','','','');
			$value = "value = 'Estudio de $USER->firstname $USER->lastname'";
		$mform->addElement('text', 'evento', get_string('event', 'local_reservasalas').': ',"$value");
		$mform->setType('evento',PARAM_TEXT);
		$mform->addRule('evento',get_string('indicateEvent', 'local_reservasalas'),'required');
		$mform->addElement('text', 'asistentes', '#'.get_string('assistants', 'local_reservasalas').': ');
		$mform->setType('asistentes',PARAM_TEXT);
		$mform->addRule('asistentes',get_string('indicateassistants', 'local_reservasalas').': ','required');
		//$mform->addRule('asistentes',get_string('indicateassistants', 'local_reservasalas').': ','numeric');
			$mform->addElement('submit','Reservar',get_string('reserve', 'local_reservasalas'));
			$mform->addElement('static','','','*'.get_string('reservemessage', 'local_reservasalas'));
			$mform->addElement('static','','','');
			$mform->addElement('static','','','');
			$mform->addElement('static','','','');
			$mform->addElement('static','','','');
		}
		
		
		
	}      //formulario primer modulo seleccionado

	/*function validation($data,$files) {
		global $DB;
		$errors=array();
	    $rule = $data['asistentes'];
		
		if(!is_numeric($rule)){
				
			$errors['asistentes'] = '*Debes ingresar un numero';
		}
		return $errors;
	}*/
	
}
class formReservarAdmin extends moodleform  {
	//Add elements to form

	public function definition() {

		global $CFG, $DB, $USER;
		$usertype=$CFG->user;
		$mform =& $this->_form; // Don't forget the underscore!
		$instance = $this->_customdata;
        $fecha=$instance['fecha'];// $_REQUEST['fecha']['day']."/".$_REQUEST['fecha']['month']."/".$_REQUEST['fecha']['year'];

        $mform->addElement('hidden','alumno',$instance['idalumno']);
		$mform->setType('alumno',PARAM_INT);
		$mform->addElement('hidden','form','1');
		$mform->setType('form',PARAM_INT);
		$mform->addElement('hidden','fecha',$fecha);
		$mform->setType('fecha',PARAM_TEXT);
		$mform->addElement('hidden','json',$instance['y']);
		$mform->setType('json',PARAM_TEXT);
		$mform->addElement('hidden','repetir',$instance['w']);
		$mform->setType('repetir',PARAM_TEXT);
		$mform->addElement('hidden','elegir',$instance['SedeEdificio']);
		$mform->setType('elegir',PARAM_INT);
		$mform->addElement('hidden','tipo',$instance['tipo']);
		$mform->setType('tipo',PARAM_TEXT);
		$mform->addElement('hidden','numModulos', '','id="id_numModulos"');
		$mform->setType('numModulos',PARAM_INT);
		$verificador = true;
		$contadorSalas = 0;
	if($instance['z']==0 ||$instance['z']==3){
		
		foreach($instance['x'] as $data){
			
			foreach ($data as $modulo){
				
				$ID=$modulo[0];
				$i = $modulo[1];
				$v=$modulo[2];
				
				if ($verificador == true){
			    $mform->addElement('hidden', 'numSalas', '', 'id="id_numSalas"');
				$mform->setType('numSalas',PARAM_INT);
				$verificador = false;
			}
			$contadorSalas++;
		
		    $mform->addElement('hidden', 'nomID'.$ID.$i.'','','id="id_ID'.$ID.$i.'"');
			$mform->setType('nomID'.$ID.$i.'',PARAM_TEXT);
			$mform->addElement('hidden', 'nomSala'.$ID.$i.'','','id="id_Sala'.$ID.$i.'"');
			$mform->setType('nomSala'.$ID.$i.'',PARAM_TEXT);
			$mform->addElement('hidden', 'nomModulo'.$ID.$i.'','','id="id_Modulo'.$ID.$i.'"');
			$mform->setType('nomModulo'.$ID.$i.'',PARAM_TEXT);
			$mform->addElement('hidden', 'reserva'.$ID.$i.'','','id="id_Reserva'.$ID.$i.'"');
			$mform->setType('reserva'.$ID.$i.'',PARAM_TEXT);
			
				if ($v == 0){
				
					$mform->addElement('hidden', 'nomEstado'.$ID.$i.'','disponible','id="id_Estado'.$ID.$i.'"');
					$mform->setType('nomEstado'.$ID.$i.'',PARAM_TEXT);
				}
				elseif ($v == 1) {
			
					$mform->addElement('hidden', 'nomEstado'.$ID.$i.'','ocupado','id="id_Estado'.$ID.$i.'"');
					$mform->setType('nomEstado'.$ID.$i.'',PARAM_TEXT);
				}
             }
         }
		$mform->setDefault('numSalas', $contadorSalas);
		$mform->addElement('static','','','');
		$mform->addElement('text', 'evento', get_string('event', 'local_reservasalas').': ');
		$mform->setType('evento',PARAM_TEXT);
		$mform->addRule('evento',get_string('indicateEvent', 'local_reservasalas'),'required');
		$mform->addElement('text', 'asistentes', '#'.get_string('assistants', 'local_reservasalas').': ');
		$mform->setType('asistentes',PARAM_TEXT);
		$mform->addRule('asistentes',get_string('indicateassistants', 'local_reservasalas').': ','required');
		//$mform->addRule('asistentes',get_string('indicateassistants', 'local_reservasalas').': ','numeric');
		$mform->addElement('text', 'usuario', get_string('uaiemail', 'local_reservasalas').': ');
		$mform->setType('usuario',PARAM_TEXT);
		$mform->addRule('usuario',get_string('indicateuser', 'local_reservasalas').': ','required');
		$mform->addElement('static','','', $usertype);
		$mform->addElement('submit','Reservar',get_string('reserve', 'local_reservasalas'));
		$mform->addElement('static','','','');
		$mform->addElement('static','','','');
		$mform->addElement('static','','','');
		$mform->addElement('static','','','');
		$mform->addElement('static','','','');
}
	}
	
	function validation($data,$files) {
		global $DB;
		$errors=array();

/*if(!is_numeric($data['asistentes'])){
	
			$errors['asistentes'] = '*Debes ingresar un numero';
		}
		return $errors;
	}*/
	

}
}	

//Utilizado en reservausuarios.php, formulario para la busqueda del historial de reservas de un usuario especifico.
class buscarUsuarioReservas extends moodleform{
	function definition() {
		global $CFG, $DB, $OUTPUT;
		$usertype=$CFG->user;
		$mform =& $this->_form;
		$mform->addElement('text', 'usuario', get_string('uaiemail', 'local_reservasalas').': ');
		$mform->setType('usuario', PARAM_TEXT);
		$mform->addRule('usuario',get_string('indicateuser', 'local_reservasalas'),'required');
		$mform->addElement('static','','', $usertype);
		$mform->addElement('hidden','action','buscarusuario');
		$mform->setType('action', PARAM_ACTION);
	    $this->add_action_buttons(false, get_string('search', 'local_reservasalas'));
	}
	function validation($data,$files) {
		global $DB;
		$errors=array();

		if(!$user = $DB->get_record('user', array('username'=>$data['usuario']))){
			
			$errors['usuario'] = '*'.get_string('notuser', 'local_reservasalas');
		}
		return $errors;
	}
}

class roomSearch extends moodleform  {
	function definition(){
		
		global $DB, $USER;
		
		$mform =& $this->_form;
	    $mform->addElement('header','', '');
		$mform->addElement('header','expanded', get_string('date', 'local_reservasalas')." and ".get_string('event','local_reservasalas'));
		$mform->addElement('date_selector', 'startdate', get_string('startdate','local_reservasalas'),array(
    					'startyear' => date('Y')-2, 
    					'stopyear'  => date('Y')+2,
						));
		$mform->addElement('advcheckbox', 'addmultiply', '',get_string('addend', 'local_reservasalas'));
		$mform->addElement('date_selector', 'enddate', get_string('enddate','local_reservasalas'),array(
    					'startyear' => date('Y'), 
    					'stopyear'  => date('Y')+3,
						));
		$mform->disabledIf('enddate', 'addmultiply', 'notchecked');
		
        $options = array(
				'1' => '1',
				'2' => '2',
				'3' => '3',
				'4' => '4',
				'5' => '5',
				'6' => '6',
				'7' => '7',
				'8' => '8');
        $mform->addElement('advcheckbox', 'more', '',get_string('event','local_reservasalas'));
        
        $mform->addElement('text', 'name', get_string('eventName','local_reservasalas'));
		$mform->setType('name', PARAM_TEXT);
		$mform->addElement('text', 'responsable', get_string('usercharge', 'local_reservasalas').': ');
		$mform->setType('responsable', PARAM_TEXT);
		$mform->setDefault('responsable', "user@alumnos.uai.cl");
		
		$mform->disabledIf('name', 'more', 'notchecked');
		$mform->disabledIf('responsable', 'more', 'notchecked');
		
		$mform->addElement('header','notexpandedtwo', get_string('room','local_reservasalas'));
		
	    $sedeedificio = array();
		$edificios = $DB->get_records('reservasalas_edificios');
		foreach ($edificios as $edificio){
			$sede = $DB->get_record('reservasalas_sedes', array('id'=>$edificio->sedes_id));
			$sedeedificio[$edificio->id] = $sede->nombre." - ".$edificio->nombre;
		}
	
		$select = $mform->addElement('select', 'campus', get_string('choose_buildings','local_reservasalas'),$sedeedificio);
		$select->setMultiple(true);
		$options = array(
				'0'=>' ',
				'1'=>get_string('class', 'local_reservasalas'),
				'2'=>get_string('study', 'local_reservasalas'),
				'3'=>get_string('reunion', 'local_reservasalas'));
		$mform->addElement('select', 'eventType', get_string('eventType','local_reservasalas'), $options);
		$mform->addElement('text', 'roomsname', get_string('roomsname','local_reservasalas'));
		$mform->setType('roomsname', PARAM_TEXT);
	    $this->add_action_buttons(false, get_string('search', 'local_reservasalas'));
	}
	function validation($data,$files) {
		global $DB;
		$errors=array();
	if($data['addmultiply']==1){
		if(  $data['startdate'] > $data['enddate']){
			
			$errors['enddate'] = get_string('datecannot', 'local_reservasalas');
		}
	}
		return $errors;
	}
}
class cambiarReserva extends moodleform{
	function definition() {
		global $DB;
		$mform =& $this->_form;
		$instance = $this->_customdata;
		$sedeedificio = array();
		$edificios = $DB->get_records('reservasalas_edificios');
		foreach ($edificios as $edificio){
			$sede = $DB->get_record('reservasalas_sedes', array('id'=>$edificio->sedes_id));
			$sedeedificio[$edificio->id] = $sede->nombre." - ".$edificio->nombre;
		}
		
		$info=json_encode($instance['x']);
		$mform->addElement('select', 'campus', get_string('choose_buildings','local_reservasalas'),$sedeedificio);
		$mform->addElement('text', 'name', get_string('roomsname', 'local_reservasalas').': ');
		$mform->setType('name', PARAM_TEXT);
		$mform->addElement('hidden', 'info',$info);
		$mform->setType('info', PARAM_TEXT);
		$mform->addElement('hidden', 'action','Cambiar con');
		$mform->setType('action', PARAM_TEXT);
		$this->add_action_buttons(true, get_string('changewhit', 'local_reservasalas'));
	}
	function validation($data,$files) {
		global $DB;
		$errors=array();
	
		if(!$DB->get_record('reservasalas_salas',array('nombre'=>$data['name'],'edificios_id'=>$data['campus']))){
			
			$errors['name'] = '*'.get_string('notrooms', 'local_reservasalas').': ';
		}
		return $errors;
	}
}

class up_csv extends moodleform {
	function definition() {
		global $CFG, $DB;

		$mform =& $this->_form;

		
		$mform->addElement('text', 'sep','Ingrese el separador');
		$mform->addElement ( 'filepicker', 'csv_file', 'Suba un archivo .csv', null );
		$mform->addRule('csv_file', 'Suba algun archivo' ,'required');
		$mform->addElement('static', 'rule', '*Recuerde que solo debe ser un archivo .csv, ademas recuerde que los titulos deben estar sin espacion entre palabras');
		$this->add_action_buttons(true,'Ver Estructura');
		
		
	}

}

/*class crearlista extends moodleform{
	function definition(){
		global $CFG, $DB;
				
		$mform =& $this->_form;
		
		$prevaction=$instance['prevaction'];

		$mform->addElement('text', 'nombrelista', get_string('namelist', 'local_reservasalas'));
		$mform->setType('nombrelista', PARAM_TEXT);
		$mform->addRule('nombrelista', 'Debe ingresar algun nombre' ,'required');
		$mform->addElement('text', 'cantidadmodulos', get_string('numbermodules', 'local_reservasalas'));
		$mform->setType('cantidadmodulos', PARAM_INT);
		$mform->addRule('cantidadmodulos', 'Debe ingresar alguna cantidad' ,'required');
		// opciones avanzadas
		$mform->addElement ( 'header', 'headeradvanced', get_string('advanceoptions', 'local_reservasalas'));
		$mform->setExpanded('headeradvanced', false);
		
		$mform->addElement('advcheckbox', 'addmultiply', get_string('activateadvanceoptions', 'local_reservasalas').': ');
		
		$mform->addElement('duration', 'duracion', get_string('duration','local_reservasalas'));
		$mform->disabledIf('duracion',addmultiply,'notchecked');
		$mform->addElement('hidden','prevaction',$prevaction);
		$mform->setType('prevaction', PARAM_TEXT);
		$this->add_action_buttons(true, get_string('next', 'local_reservasalas'));
		/*
		$hora=array();
		$minutos=array();
		for($i=0;$i<24;$i++){
			if($i<10){
				$hora["0".$i]="0".$i;
			}else{
				$hora[$i]=$i;
			}
		}
		for($j=0;$j<60;$j++){
			if($j<10){
				$minutos["0".$j]="0".$j;
			}else{
				$minutos[$j]=$j;
			}
		}
		$buttonarray=array();
		$buttonarray[]=$mform->createElement('select', 'hora', 'hora',$hora);
		$buttonarray[]=$mform->createElement('select', 'minutos', 'minutos', $minutos);
		$mform->addGroup($buttonarray);
		$mform->addElement('duration', 'timelimit', 'Duración');
		

		
	}
	
	function validation(){
		global $DB;
		
	}
	
}

class crearmodulos extends moodleform{
	function definition(){
		$mform =& $this->_form;
		$instance = $this->_customdata;
		$listname=$instance['listname']; // información enviada al crear objeto form
		$numeromodulos =$instance['modulenum']; // información enviada al crear objeto form
		
		$hora=array();
		$minutos=array();
		for($n=0;$n<24;$n++){
			if($n<10){
				$hora["0".$n]="0".$n;
			}else{
				$hora[$n]=$n;
			}
		}
		for($j=0;$j<60;$j++){
			if($j<10){
				$minutos["0".$j]="0".$j;
			}else{
				$minutos[$j]=$j;
			}
		}
		
		//$numeromodulos = 4;
		for($i=1;$i<=$numeromodulos;$i++){
			$mform->addElement('html', '<h3>Módulo'.$i.'</h3>'); 
			$mform->addElement('text','nombremodulo'.$i , get_string('modulename', 'local_reservasalas'),'required');
			$mform->setType('nombremodulo'.$i , PARAM_TEXT);
			
			$buttonarray=array();
			$buttonarray[]=$mform->createElement('html', '<b>Hora inicio</b>');
			$buttonarray[]=$mform->createElement('select', 'horainicio'.$i,'hora',$hora);
			$buttonarray[]=$mform->createElement('select', 'minutosinicio'.$i,'minutos' ,$minutos);
			$mform->addGroup($buttonarray);

			$buttonarray2=array();
			$buttonarray2[]=$mform->createElement('html', '<b>Hora Fin</b>');
			$buttonarray2[]=$mform->createElement('select', 'horafin'.$i,'hora',$hora);
			$buttonarray2[]=$mform->createElement('select', 'minutosfin'.$i,'minutos' ,$minutos);
			$mform->addGroup($buttonarray2);
			
			
		}
		
		$mform->addElement('hidden', 'nombrelista', $listname);
		$mform->setType('nombrelista', PARAM_TEXT);
		$this->add_action_buttons(true, get_string('next', 'local_reservasalas'));
		
	}
	
}
}*/
