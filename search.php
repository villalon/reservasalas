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

//Pagina de reserva para los usuarios
//capacidades de: reservar, modificar, cancelar, consultar
require_once(dirname(__FILE__) . '/../../config.php');
require_once($CFG->dirroot.'/local/reservasalas/forms.php');
require_once($CFG->dirroot.'/local/reservasalas/lib.php');
require_once($CFG->dirroot.'/local/reservasalas/tablas.php');

global $DB,$USER;
$params = Array();

$baseurl = new moodle_url('/local/reservasalas/search.php'); //importante para crear la clase pagina
$context = context_system::instance();
$PAGE->set_context($context);
$PAGE->set_url($baseurl);

$PAGE->set_pagelayout('standard');
$PAGE->set_title(get_string('reserveroom', 'local_reservasalas'));
$PAGE->set_heading(get_string('reserveroom', 'local_reservasalas'));
$PAGE->navbar->add(get_string('roomsreserve', 'local_reservasalas'));
$PAGE->navbar->add(get_string('searchroom', 'local_reservasalas'),'search.php');

echo  $OUTPUT->header(); //Imprime el header
$action = optional_param('action', 'ver', PARAM_TEXT);
if($action=="ver"){
echo $OUTPUT->heading(get_string('searchroom', 'local_reservasalas'));
$buscador = new roomSearch();
$buscador->get_data();
$buscador->display();
$condition = '0';
if($fromform = $buscador->get_data()){
	
	$select ='1=1 ';
	
	$date=$fromform->startdate;
	$date=date("Y-m-d",$date);
	
	$endDate=$fromform->enddate;
	$multiple=$fromform->addmultiply;
	
	
	if($multiple==0){
		$select.="AND fecha_reserva='$date'";
		
	}else if($multiple == 1){
		
	
		$fecha1=mktime(0,0,0,date("m", $fromform->startdate),date("d", $fromform->startdate),date("Y", $fromform->startdate));
		$fecha2=mktime(0,0,0,date("m", $fromform->enddate),date("d", $fromform->enddate),date("Y", $fromform->enddate));
		$diferencia=$fecha2-$fecha1;
		$dias=$diferencia/(60*60*24)+1;
		//$dow   = $arreglo[$f];
	
		$step  = 1;
		$unit  = 'D';
	
		$start = new DateTime($date);
		$end   = clone $start; // ¿?
		
		//$start->modify($dow); // Move to first occurence
		$dias=intval($dias);
		
		$end->add(new DateInterval('P'.$dias.'D')); // Move to 1 year from start
	
		$interval = new DateInterval("P{$step}{$unit}");
		$period   = new DatePeriod($start, $interval, $end);
	
		foreach ($period as $date) {
			$repetir[]= "'".$date->format('Y-m-d')."'";
				
		}
		$repetir=implode(",",$repetir);
		$select.="AND fecha_reserva in($repetir) ";
	
	
	}
	
	if($fromform->name){
		//$select.="AND nombre_evento like '%$fromform->name%' ";
		$select.= "AND ".$DB->sql_like('nombre_evento', ':nombre_evento')." ";
		$params['nombre_evento'] = '%'.$fromform->name.'%';
		
	}
	if($fromform->responsable){
		
		$user=$DB->get_record('user',array('username'=>$fromform->responsable));
		
		if($user){
		$select.="AND alumno_id='$user->id' ";
		}
	
	}
	$id_salas=array();
	if(isset($fromform->campus)){
		$campus=$fromform->campus;
		$h=count($campus);
		
		if($h=!0){
			$h=$h-1;
		}
		if($fromform->eventType==0 && $fromform->roomsname==null){
		
			
		for($i=0;$i<=$h;$i++){
		$salas=$DB->get_records('reservasalas_salas',array('edificios_id'=>$campus[$i]));
		foreach($salas as $sala){
			$id_salas[]="'".$sala->id."'";
			
		}
		}
		if(empty($id_salas)){
			
			$condition = '1';
		}
		}
		else if($fromform->eventType!=0 && $fromform->roomsname==null){
			
			for($i=0;$i<=$h;$i++){
				$salas=$DB->get_records('reservasalas_salas',array('edificios_id'=>$campus[$i],'tipo'=>$fromform->eventType));
				foreach($salas as $sala){
					$id_salas[]="'".$sala->id."'";
						
				}
			}
			if(empty($id_salas)){
					
				$condition = '1';
			}
		}
		else if($fromform->eventType!=0 && $fromform->roomsname!=null){
			
			for($i=0;$i<=$h;$i++){
				$salas=$DB->get_records('reservasalas_salas',array('edificios_id'=>$campus[$i],'tipo'=>$fromform->eventType,'nombre'=>$fromform->roomsname));
				foreach($salas as $sala){
					$id_salas[]="'".$sala->id."'";
			
				}
			}
			if(empty($id_salas)){
					
				$condition = '1';
			}
		}
		else if($fromform->eventType==0 && $fromform->roomsname!=null){
		
			for($i=0;$i<=$h;$i++){
				$salas=$DB->get_records('reservasalas_salas',array('edificios_id'=>$campus[$i],'nombre'=>$fromform->roomsname));
				foreach($salas as $sala){
					$id_salas[]="'".$sala->id."'";
						
				}
			}
			if(empty($id_salas)){
					
				$condition = '1';
			}
		}
	
		if (!empty($id_salas)){
		$string_id_salas=implode(",",$id_salas);
	
	$select.="AND salas_id in ($string_id_salas) ";
		}
	}	
elseif($fromform->eventType!=0){

	if($fromform->roomsname!=null){
		
		$salas=$DB->get_records('reservasalas_salas',array('tipo'=>$fromform->eventType,'nombre'=>$fromform->roomsname));
		foreach($salas as $sala){
		$id_salas[]="'".$sala->id."'";
			
		}
		if(empty($id_salas)){
				
			$condition = '1';
		}
	}else{
		
		$salas=$DB->get_records('reservasalas_salas',array('tipo'=>$fromform->eventType));
		foreach($salas as $sala){
			$id_salas[]="'".$sala->id."'";
				
		}
			
	if(empty($id_salas)){
			
			$condition = '1';
		}
	}
	
		
		if (!empty($id_salas)){
	
		$string_id_salas=implode(",",$id_salas);
	
		$select.="AND salas_id in ($string_id_salas) ";
		}
		
}
	elseif($fromform->roomsname!=null){
		
		$salas=$DB->get_records('reservasalas_salas',array('nombre'=>$fromform->roomsname));
		foreach($salas as $sala){
			$id_salas[]="'".$sala->id."'";
				
		}
		if(empty($id_salas)){
				
			$condition = '1';
		}
	if (!empty($id_salas)){
		$string_id_salas=implode(",",$id_salas);
	
	$select.="AND salas_id in ($string_id_salas) ";
		}
	}
	$select.="AND activa=1";
	//$result = $DB->get_records_select('reservasalas_reservas',$select);
	$result = $DB->get_records_select('reservasalas_reservas',$select,$params);
	
	if(empty($result) || $condition == 1){ // $condition=1 significa que no hay salas
		
		echo '<h5>'.get_string('noreservesarefound', 'local_reservasalas').'</h5>';
		
	}else{
	
	$table = tablas::searchRooms($result);
	echo html_writer::tag('<form','',array('name'=>'search','method'=>'POST'));
	
	echo html_writer::table($table);
	if(has_capability('local/reservasalas:delete', $context)) {
	echo'<input type="submit" name="action" value="remove" onClick="return ComfirmDeleteOrder();">';
	}
	if(has_capability('local/reservasalas:changewith', $context)) {
	echo'<input type="submit" name="action" value="swap">';
	}
	
	echo html_writer::end_tag('form');
	}
}
}
else if($action=="remove"){
	
	echo $OUTPUT->heading(get_string('reserveseliminated', 'local_reservasalas').'!');
	
	
	if(!has_capability('local/reservasalas:delete', $context)) {
		print_error(get_string('INVALID_ACCESS','Reserva_Sala'));
	}
	
	
	$check_list=$_REQUEST['check_list'];
	$table = new html_table();
	$table->head = array(get_string('campus', 'local_reservasalas'), get_string('building', 'local_reservasalas'),get_string('room', 'local_reservasalas'), get_string('event', 'local_reservasalas'), get_string('reservedate', 'local_reservasalas'), get_string('createdate', 'local_reservasalas'), get_string('usercharge', 'local_reservasalas'),get_string('module', 'local_reservasalas'));
	foreach($check_list as $check){
		
        $data = $DB->get_record('reservasalas_reservas', array ('id'=>$check));
        $room = $DB->get_record('reservasalas_salas', array ('id'=>$data->salas_id));
        $building = $DB->get_record('reservasalas_edificios', array('id'=>$room->edificios_id));
        $campus = $DB->get_record('reservasalas_sedes', array('id'=>$building->sedes_id));
        $module = $DB->get_record('reservasalas_modulos', array('id'=>$data->modulo));	
        $responsable = $DB->get_record('user', array('id'=>$data->alumno_id));
        $table->data[] = array($campus->nombre, $building->nombre, $room->nombre, $data->nombre_evento, $data->fecha_reserva, date("Y-m-d",$data->fecha_creacion), $responsable->firstname.' '.$responsable->lastname, $module->nombre_modulo);
		$DB->delete_records('reservasalas_reservas', array ('id'=>$check)) ;
	}
	$table->size = array('8%', '8%','8%','23%','10%','10%','20%','5%','3%');
	echo html_writer::table($table);
	echo $OUTPUT->single_button('search.php', get_string('return', 'local_reservasalas'));
}
else if($action=="swap"){

	echo $OUTPUT->heading(get_string('change', 'local_reservasalas'));
	
	if(!has_capability('local/reservasalas:changewith', $context)) {
		print_error(get_string('INVALID_ACCESS','Reserva_Sala'));
	}
	
	if(isset($_REQUEST['check_list'])){
		$check_list=$_REQUEST['check_list'];
	}else{
		$check_list="";
	}

	$form = new cambiarReserva(null,array('x'=>$check_list));
	
	
if($fromform = $form->get_data()){
	
	$info=json_decode($fromform->info);	
	$sala=$DB->get_record('reservasalas_salas',array('nombre'=>$fromform->name,'edificios_id'=>$fromform->campus));

foreach($info as $check){

	$reserva=$DB->get_record('reservasalas_reservas',array('id'=>$check));
		$modulo=$DB->get_record('reservasalas_modulos',array('id'=>$reserva->modulo));
		if(strpos($modulo->nombre_modulo, "|")){
			$siguiente=$reserva->modulo+1;
			$anterior=$reserva->modulo-1;
			
			$select="nombre_modulo LIKE '%|%' and id in('$siguiente','$anterior')";
			$results = $DB->get_records_select('reservasalas_modulos',$select);
			foreach($results as $result){
				$module=$result;
			}
		
		
		}else{
			$module= new stdClass;
			$module->id=0;
		}

		
		
		
		$select="modulo in ('$reserva->modulo','$module->id') AND fecha_reserva = '$reserva->fecha_reserva' AND
		salas_id='$sala->id'";
		$newResera = $DB->get_record_select('reservasalas_reservas',$select);
		
	
		
		
		if($newResera){
			
			
			$nuevaSala=$newResera->salas_id;
			$newResera->salas_id=$reserva->salas_id;
			$reserva->salas_id=$nuevaSala;
			
			$DB->update_record('reservasalas_reservas', $reserva);
			$DB->update_record('reservasalas_reservas', $newResera);
			echo get_string('ithasbeenchanged', 'local_reservasalas');
		}
		else{
			
			$reserva->salas_id=$sala->id;
		$DB->update_record('reservasalas_reservas',$reserva);
		echo get_string('ithasbeenadded', 'local_reservasalas');
		}
		
	}

	echo $OUTPUT->single_button('search.php', get_string('return', 'local_reservasalas'));
}
else if ($form->is_cancelled()) {
	echo get_string('nochanges', 'local_reservasalas').'<br/><br/>'.$OUTPUT->single_button('search.php', get_string('return', 'local_reservasalas'));
}
else{
$form->display();

	

}
}
echo $OUTPUT->footer(); //imprime el footer
?>
<script>
function ComfirmDeleteOrder()
{
  var r=confirm("¿Esta seguro que quiere eliminar las reservas seleccionadas?");
  if(r == true){
   return true;
  }else{
   return false;
  }
}



function checkAll(){
	var check = document.getElementById("check").checked
	var value = document.getElementById("check").value
	
		
		var inputs = document.getElementsByClassName("check");
	

	if(check){
		
			for(var i = 0; i < inputs.length; i++)

		    if(inputs[i].type == "checkbox"){
			
				inputs[i].checked = true;
			}
			
			
		    }
	if(!check){
		for(var i = 0; i < inputs.length; i++)

		    if(inputs[i].type == "checkbox"){
			
				inputs[i].checked = false;
			}
			
			
        }
    
	}
	
 
</script>

