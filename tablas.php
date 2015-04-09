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
defined('MOODLE_INTERNAL') || die();
require_once('lib.php');
class tablas{

	public function __construct(){

	}
	public static function getSalas($edificioid = null){
		global $DB, $OUTPUT;
		if($edificioid){
			$salas = $DB->get_records('reservasalas_salas', array('edificios_id'=>$edificioid));
				
		}else{
			$salas = $DB->get_records('reservasalas_salas');
			//$salas = $DB->get_records_sql('select * from {reservasalas_salas} order by edificios_id');
		}
		$tabla = new html_table();
		$tabla->head = array(get_string('campus', 'local_reservasalas'), get_string('building', 'local_reservasalas'), get_string('room', 'local_reservasalas'),get_string('roomtype', 'local_reservasalas'),get_string('capacity', 'local_reservasalas'), get_string('adjustments', 'local_reservasalas'));
		foreach($salas as $sala){
			$edificio= $DB->get_record('reservasalas_edificios', array('id'=>$sala->edificios_id));
			$sede= $DB->get_record('reservasalas_sedes', array('id'=>$edificio->sedes_id));
				
				
			if($edificioid){
				$editurl_sala = new moodle_url('salas.php', array('action'=>'editar', 'prevaction'=>'verporedificio','idsala'=>$sala->id, 'sesskey'=>sesskey()));
				$deleteurl_sala = new moodle_url('salas.php', array('action'=>'borrar', 'prevaction'=>'verporedificio','edificio'=>$edificio->id,'idsala'=>$sala->id, 'sesskey'=>sesskey()));
			}else{
				$editurl_sala = new moodle_url('salas.php', array('action'=>'editar', 'idsala'=>$sala->id, 'sesskey'=>sesskey()));
				$deleteurl_sala = new moodle_url('salas.php', array('action'=>'borrar', 'idsala'=>$sala->id, 'sesskey'=>sesskey()));
			}
				
				
			$editicon_sala = new pix_icon('t/editstring', get_string('modify', 'local_reservasalas'));
			$editaction_sala = $OUTPUT->action_icon($editurl_sala, $editicon_sala, new confirm_action(get_string('areyoueditroom', 'local_reservasalas')));
				
				
			$deleteicon_sala = new pix_icon('t/delete', get_string('remove', 'local_reservasalas'));
			$deleteaction_sala = $OUTPUT->action_icon($deleteurl_sala, $deleteicon_sala, new confirm_action(get_string('areyouremoveroom', 'local_reservasalas')));
			
			$typeRoom='';
			if($sala->tipo == 1){
				
				$typeRoom=get_string('classroom', 'local_reservasalas');
				
			}else if($sala->tipo == 2){
				
				$typeRoom=get_string('studyroom', 'local_reservasalas');
				
			}else if($sala->tipo == 3){
				
				$typeRoom=get_string('reunionroom', 'local_reservasalas');
				
			}
				
			$tabla->data[]= array($sede->nombre, $edificio->nombre, $sala->nombre,$typeRoom,$sala->capacidad, $editaction_sala.$deleteaction_sala);
		}
		return $tabla;

	}
	
	public static function datosSedesEdificios(){
		global $DB, $OUTPUT;
		//$edificios = $DB->get_records('reservasalas_edificios');
		$edificios = $DB->get_records_sql('select * from {reservasalas_edificios} order by sedes_id');
		$tabla = new html_table();
		$tabla->head = array(get_string('campus', 'local_reservasalas'), get_string('building', 'local_reservasalas'), get_string('seechangerooms', 'local_reservasalas'), get_string('deletebuilding', 'local_reservasalas'));
	
		foreach ($edificios as $edificio){
			$sede = $DB->get_record('reservasalas_sedes', array('id' => $edificio->sedes_id));
	
			$editurl_edificios =  new moodle_url('salas.php', array('action'=>'verporedificio', 'edificio'=>$edificio->id));
			$editurl_icon = new pix_icon('t/preview', 'Ver/Modificar');
			$editaction_edificios = $OUTPUT->action_icon($editurl_edificios, $editurl_icon);
	
			$deleteurl_sedes = new moodle_url('edificios.php', array('action'=>'borrar', 'edificio'=>$edificio->id, 'sesskey'=>sesskey()));
			$deleteicon_sedes = new pix_icon('t/delete', 'Eliminar');
			$deleteaction_sedes = $OUTPUT->action_icon($deleteurl_sedes, $deleteicon_sedes, new confirm_action('Esta a punto de eliminar el edificio de la sede junto a la
					informacion asociada'));
	
			$tabla->data[] = array($sede->nombre, $edificio->nombre, $editaction_edificios, $deleteaction_sedes);
	
		}
		return $tabla;
	
	}

	//Tabla utilizada en edificios.php, muestra todos los edificios que existen.
	public static function datasPlacesBuildingsAdminRoom(){
		global $DB, $OUTPUT;
		//$edificios = $DB->get_records('reservasalas_edificios');
		$edificios = $DB->get_records_sql('select * from {reservasalas_edificios} order by sedes_id');
		$tabla = new html_table();
		$tabla->head = array(get_string('campus', 'local_reservasalas'), get_string('building', 'local_reservasalas'), get_string('adjustments', 'local_reservasalas'));

		foreach ($edificios as $edificio){
			$sede = $DB->get_record('reservasalas_sedes', array('id' => $edificio->sedes_id));
				
			$editurl_edificios =  new moodle_url('edificios.php', array('action'=>'editar', 'edificio'=>$edificio->id));
			$editurl_icon = new pix_icon('t/editstring', get_string('modify', 'local_reservasalas'));
			$editaction_edificios = $OUTPUT->action_icon($editurl_edificios, $editurl_icon, new confirm_action(get_string('areyousureyouwanttoedit', 'local_reservasalas')));
				
			$deleteurl_sedes = new moodle_url('edificios.php', array('action'=>'borrar', 'edificio'=>$edificio->id, 'sesskey'=>sesskey()));
			$deleteicon_sedes = new pix_icon('t/delete', get_string('remove', 'local_reservasalas'));
			$deleteaction_sedes = $OUTPUT->action_icon($deleteurl_sedes, $deleteicon_sedes, new confirm_action(get_string('thisabouttoremove', 'local_reservasalas')));
			
			//CAMBIAR URL
			$seeurl_salas = new moodle_url('salas.php', array('action'=>'verporedificio', 'edificio'=>$edificio->id, 'sesskey'=>sesskey()));
			$seeicon_salas = new pix_icon('i/preview', get_string('seestudyrooms', 'local_reservasalas'));
			$seeaction_salas = $OUTPUT->action_icon($seeurl_salas, $seeicon_salas);
				
			$tabla->data[] = array($sede->nombre, $edificio->nombre, $seeaction_salas.$editaction_edificios.$deleteaction_sedes);
				
		}
		return $tabla;

	}
	
	
	
	public static function getSedes(){
		global $DB, $OUTPUT;
		$sedes = $DB->get_records('reservasalas_sedes');

		$tabla = new html_table();
		$tabla->head = array(get_string('campus', 'local_reservasalas'), get_string('deletecampus', 'local_reservasalas'));
		foreach ($sedes as $sede){
			$deleteurl_sedes = new moodle_url('sedes.php', array('action'=>'borrar', 'idsede'=>$sede->id, 'sesskey'=>sesskey()));
			$deleteicon_sedes = new pix_icon('t/delete', 'Eliminar');
			$deleteaction_sedes = $OUTPUT->action_icon($deleteurl_sedes, $deleteicon_sedes, new confirm_action('¿Desea Eliminar la Sede?'));
			$tabla->data[] = array($sede->nombre, $deleteaction_sedes);
		}
		return $tabla;

	}
	
	
	//Utilizado en sedes.php, tabla que lista todas las sedes existentes.
	public static function getPlacesAdminRoom(){
		global $DB, $OUTPUT;
		$places = $DB->get_records('reservasalas_sedes');
	
		$table = new html_table();
		$table->head = array(get_string('campus', 'local_reservasalas'), get_string('adjustments', 'local_reservasalas'));
		foreach ($places as $campus){
			$deleteurl_sedes = new moodle_url('sedes.php', array('action'=>'borrar', 'idsede'=>$campus->id, 'sesskey'=>sesskey()));
			$deleteicon_sedes = new pix_icon('t/delete', get_string('remove', 'local_reservasalas'));
			$deleteaction_sedes = $OUTPUT->action_icon($deleteurl_sedes, $deleteicon_sedes, new confirm_action(get_string('doyouwantdeletesite', 'local_reservasalas')));
			
			$editurl_sedes = new moodle_url('sedes.php', array('action'=>'editar','prevaction'=>'ver', 'idsede'=>$campus->id, 'sesskey'=>sesskey()));
			$editicon_sedes = new pix_icon('i/edit', get_string('edit', 'local_reservasalas'));
			$editaction_sedes = $OUTPUT->action_icon($editurl_sedes, $editicon_sedes, new confirm_action(get_string('doyouwanteditsite', 'local_reservasalas')));
				
			$table->data[] = array($campus->nombre, $editaction_sedes.$deleteaction_sedes);
		}
		return $table;
	
	}
	
	//Utilizado en resources.php, genera tabla con todos los recurso existentes.
	public static function getResources(){
		global $DB, $OUTPUT;
		$resources = $DB->get_records('reservasalas_recursos');
	
		$table = new html_table();
		$table->head = array(get_string('resources', 'local_reservasalas'), get_string('adjustments', 'local_reservasalas'));
		foreach ($resources as $resource){
			$deleteurl_resource = new moodle_url('resources.php', array('action'=>'borrar', 'idresource'=>$resource->id, 'sesskey'=>sesskey()));
			$deleteicon_resource = new pix_icon('t/delete', get_string('remove', 'local_reservasalas'));
			$deleteaction_resource = $OUTPUT->action_icon($deleteurl_resource, $deleteicon_resource, new confirm_action(get_string('doyouwantdelete', 'local_reservasalas')));
				
			$editurl_resource = new moodle_url('resources.php', array('action'=>'editar', 'prevaction'=>'ver', 'idresource'=>$resource->id, 'sesskey'=>sesskey()));
			$editicon_resource = new pix_icon('i/edit', get_string('edit', 'local_reservasalas'));
			$editaction_resource = $OUTPUT->action_icon($editurl_resource, $editicon_resource, new confirm_action(get_string('doyouwantedit', 'local_reservasalas')));
	
			$table->data[] = array($resource->nombre, $editaction_resource.$deleteaction_resource);
		}
		return $table;
	
	}
	
	
	public static function datosTodasReservas($reservas, $max, $page){
		global $CFG, $DB, $OUTPUT;
		$page = $page +1;

		$tabla = new html_table();
		$tabla->head = array(get_string('campus', 'local_reservasalas'), get_string('building', 'local_reservasalas'), get_string('room', 'local_reservasalas'),get_string('reservedate', 'local_reservasalas'),get_string('createdate', 'local_reservasalas'),get_string('student', 'local_reservasalas'), get_string('module', 'local_reservasalas'), get_string('state', 'local_reservasalas'), get_string('confirmedfrom', 'local_reservasalas'), "PC", get_string('reservecomment', 'local_reservasalas'), get_string('admincomment', 'local_reservasalas'));

		$count = 1;
		foreach ($reservas as $reserva){
				
			if($count <= $page*$max && $count > ($page-1)*$max ){

					
				$sala = $DB -> get_record('reservasalas_salas', array('id' => $reserva->salas_id));
				$edificio = $DB -> get_record('reservasalas_edificios', array('id' => $sala->edificios_id));
				$sede = $DB -> get_record('reservasalas_sedes', array('id' => $edificio->sedes_id));
				$alumno = $DB -> get_record('user', array('id' => $reserva->alumno_id));

				if($reserva->confirmado==1){
					$estado = "Confirmada";
				}else if($reserva->confirmado==0){
					$estado = "Pendiente";
				}
				$editurl_sala = new moodle_url('historial.php', array('action'=>'comentario', 'reserva'=>$reserva->id ));
				$editicon_sala = new pix_icon('t/edit', get_string('edit', 'local_reservasalas'));
				$editaction_sala = $OUTPUT->action_icon($editurl_sala, $editicon_sala, new confirm_action(get_string('areyousureaddcomments', 'local_reservasalas')));
				if($reserva->comentario_admin != NULL){
					$comentario = $reserva->comentario_admin;
				}
				else{
					$comentario = $editaction_sala;
				}

				$moduleName = $DB -> get_record('reservasalas_modulos', array('id' => $reserva->modulo));
				
				$tabla->data[] = array($sede->nombre, $edificio->nombre, $sala->nombre, $reserva->fecha_reserva,$reserva->fecha_creacion, $alumno->username, $moduleName->nombre_modulo, $estado,$reserva->ip , $sala->nombre_pc, $reserva->comentario_alumno, $comentario );
					

			}
			$count++;
		}

		return $tabla;


	}
	public static function misReservas($userid = null){
		global $DB, $USER, $OUTPUT;

		if($userid == null){
			$user_id = $USER->id;
		}else{
			$user_id = $userid;
		}

		$table = new html_table();
		$table->head = array(get_string('date', 'local_reservasalas'), get_string('campus', 'local_reservasalas'),get_string('building', 'local_reservasalas'), get_string('rooms', 'local_reservasalas'), get_string('module', 'local_reservasalas'), get_string('confirm', 'local_reservasalas'), get_string('cancel', 'local_reservasalas'));
		$reservas = $DB->get_records('reservasalas_reservas', array('alumno_id' => $user_id, 'activa' => '1'));
		foreach ($reservas as $reserva) {
				
			if($userid == null){
				$con_url = new moodle_url('misreservas.php', array('action'=>'confirmar', 'idreserva'=>$reserva->id, 'sesskey'=>sesskey()));//('confirmar.php?idconfirmar='. $reserva->id);
				$del_url = new moodle_url('misreservas.php', array('action'=>'cancelar', 'idreserva'=>$reserva->id, 'sesskey' =>sesskey()));
			}else{
				$con_url = new moodle_url('reservasusuarios.php', array('action'=>'confirmar', 'idreserva'=>$reserva->id, 'sesskey'=>sesskey()));//('confirmar.php?idconfirmar='. $reserva->id);
				$del_url = new moodle_url('reservasusuarios.php', array('action'=>'cancelar', 'idreserva'=>$reserva->id, 'sesskey' =>sesskey()));
			}
				
			$sala = $DB->get_record('reservasalas_salas', array('id'=>$reserva->salas_id));
			$edificio = $DB->get_record('reservasalas_edificios', array('id'=>$sala->edificios_id));
			$sede = $DB->get_record('reservasalas_sedes', array('id'=>$edificio->sedes_id));
			$modulo = $DB->get_record('reservasalas_modulos', array('id'=>$reserva->modulo));

			$horamodulo = hora_modulo($reserva->modulo);
			$tiempoactual=time();
			$horainicio=$horamodulo[0];
			$horafin=$horamodulo[1];
			$horainicio =  $horainicio->modify('-5 minutes');
			$antes=$horainicio->getTimestamp();
			$horainicio =  $horainicio->modify('+20 minutes');
			$despues=$horainicio->getTimestamp();
			$horainicio =  $horainicio->modify('-80 minutes');
			$horacancelar=$horainicio->getTimestamp();
			if($reserva->confirmado){
				$confaction_reserva = 'Confirmado';
			}else if($tiempoactual < $despues && $tiempoactual > $antes){ 
				$confurl_reserva = $con_url;
				$conficon_reserva = new pix_icon('i/valid', get_string('confirm', 'local_reservasalas'));
				$confaction_reserva = $OUTPUT->action_icon($confurl_reserva, $conficon_reserva);
			}else if($tiempoactual>$despues && $reserva->confirmado == 0){
				$confaction_reserva = get_string('thetimetoconfirm', 'local_reservasalas');
			}else{
				$confaction_reserva = $OUTPUT->pix_icon('t/block',get_string('stillcannotconfirm', 'local_reservasalas'));
			}
				
			if($tiempoactual < $horacancelar){
				$delurl_reserva = $del_url;
				$delicon_reserva = new pix_icon('i/invalid', get_string('cancel', 'local_reservasalas'));
				$delaction_reserva = $OUTPUT->action_icon($delurl_reserva, $delicon_reserva, new confirm_action(get_string('areyousuretocancel', 'local_reservasalas')));
			}else{
				$delaction_reserva = get_string('timetocancel', 'local_reservasalas');
			}

				
			$table->data[]=array($reserva->fecha_reserva,$sede->nombre,$edificio->nombre,$sala->nombre,$modulo->nombre_modulo."<br>(".$modulo->hora_inicio." - ".$modulo->hora_fin.")",$confaction_reserva,$delaction_reserva);;
				
		}
		$table->align = array('center', 'center','center','center','center','center','center');
		$table->size = array('12%', '16%','14%','14%','16%','14%','14%');
		return $table;
	}

	
	public static function searchRooms($data){
		global $DB, $USER, $OUTPUT;
		
		
		$table = new html_table();
		$table->head = array(get_string('campus', 'local_reservasalas'), get_string('building', 'local_reservasalas'),get_string('room', 'local_reservasalas'), get_string('event', 'local_reservasalas'), get_string('reservedate', 'local_reservasalas'), get_string('createdate', 'local_reservasalas'), get_string('usercharge', 'local_reservasalas'),get_string('module', 'local_reservasalas'),
				html_writer::checkbox("","0",false,'',array('onClick'=>'checkAll()','id'=>'check')));
		
		$i=0;	
	foreach($data as $info){
		
		$sala=$DB->get_record('reservasalas_salas',array('id'=>$info->salas_id));
		$edificio=$DB->get_record('reservasalas_edificios',array('id'=>$sala->edificios_id));
		$sede=$DB->get_record('reservasalas_sedes',array('id'=>$edificio->sedes_id));
		
			$nombre_evento=$info->nombre_evento;
			$fechaR=$info->fecha_reserva;
			$fechaC=$info->fecha_creacion;
			$fechaC=date("Y-m-d",$fechaC);
			$asistentes=$info->asistentes;
			$usuario=$DB->get_record('user',array('id'=>$info->alumno_id));
			
			
			$modulo=$DB->get_record('reservasalas_modulos',array('id'=>$info->modulo));
			
			 
		$table->data[] = array($sede->nombre,$edificio->nombre,$sala->nombre,$nombre_evento,$fechaR,$fechaC, $usuario->firstname.' '.$usuario->lastname,
		$modulo->nombre_modulo,html_writer::checkbox("check_list[".$i."]",$info->id,false,'',array('class'=>'check')));
		$i++;
	}
	
	
		
		

		$table->size = array('8%', '8%','8%','23%','10%','10%','20%','5%','3%');
		return $table;
	}

	public static function getInfo($h,$idsala,$repetir,$idmodulo,$idmoduloA=null){//$reserve, $module, $creation, $active){
		global $DB, $OUTPUT;
		
		$tabla = new html_table();
		$tabla->head = array(get_string('date', 'local_reservasalas'), get_string('event', 'local_reservasalas'), get_string('assistants', 'local_reservasalas'),get_string('usercharge', 'local_reservasalas'), get_string('module', 'local_reservasalas'));
		
		
			$fechassql = implode ( ",", $repetir );
			
			
			$datas=$DB->get_records_sql("select * from {reservasalas_reservas} where salas_id = '$idsala' AND  fecha_reserva in('$fechassql')
					AND modulo in ('$idmodulo','$idmoduloA') ORDER BY fecha_reserva ASC");
			
		   
			foreach($datas as $data){
					
				$user=$DB->get_record('user', array('id'=>$data->alumno_id));
				$module = $DB->get_record('reservasalas_modulos', array('id'=>$data->modulo));
				$pieces=explode("|",$module->nombre_modulo);
				if(count($pieces)>1){
				$module->nombre_modulo=$pieces[0].$pieces[1];
				}
				$tabla->data[] = array($data->fecha_reserva, $data->nombre_evento, $data->asistentes, $user->firstname.' '.$user->lastname, $module->nombre_modulo);
					
			}
		
		
		
	
		
		$tabla->size = array('15%', '35%','15%','35%');
		return $tabla;
	}
	
	public static function getMail($n,$messageRoom,$messageDate,$messageModule, $messageCap){
		global $DB, $OUTPUT;
		
		$tabla = new html_table();
		$tabla->head = array(get_string('date', 'local_reservasalas'), get_string('room', 'local_reservasalas'), get_string('module', 'local_reservasalas'), get_string('capacity', 'local_reservasalas')); //fecha, sede, edificio, sala, modulo, capacidad
		if($n!=0){
		
		$n=$n-1;
		}
		
		for($i=0; $i <= $n; $i++){
			
			$fechalatino = explode('-',$messageDate[$i]);
			$fechamail = $fechalatino[2].'-'.$fechalatino[1].'-'.$fechalatino[0];
			$tabla->data[] = array(str_replace("'", "", $fechamail), $messageRoom[$i], $messageModule[$i], $messageCap[$i]);
			
		}
		
		
	return $tabla;
	}
	
	public static function getMailStudent($SalasUno, $ModuloUno, $SalasDos, $ModuloDos){
		global $DB, $OUTPUT;
	
		$tabla = new html_table();
		$tabla->head = array(get_string('room', 'local_reservasalas'), get_string('module', 'local_reservasalas'));
			
			$tabla->data[] = array($SalasUno, $ModuloUno);
			$tabla->data[] = array($SalasDos, $ModuloDos);
	
		return $tabla;
	}
	public static function getList(){ // no probado
		global $DB;
		$tabla = new html_table();
		$planillas=$DB->get_records('reservasalas_planillas');
		$tabla->head = array(get_string('namelist', 'local_reservasalas') , get_string('adjustments', 'local_reservasalas'));
		if(!empty($planillas)){
			foreach($planillas as $planilla){
				$deleteurl_resource = new moodle_url('modulos.php', array('action'=>'borrar', 'idresource'=>$resource->id, 'sesskey'=>sesskey()));
				$deleteicon_resource = new pix_icon('t/delete', get_string('remove', 'local_reservasalas'));
				$deleteaction_resource = $OUTPUT->action_icon($deleteurl_resource, $deleteicon_resource, new confirm_action(get_string('doyouwantdelete', 'local_reservasalas')));
				
				$editurl_resource = new moodle_url('resources.php', array('action'=>'editar', 'prevaction'=>'ver', 'idresource'=>$resource->id, 'sesskey'=>sesskey()));
				$editicon_resource = new pix_icon('i/edit', get_string('edit', 'local_reservasalas'));
				$editaction_resource = $OUTPUT->action_icon($editurl_resource, $editicon_resource, new confirm_action(get_string('doyouwantedit', 'local_reservasalas')));
				
				$table->data[] = array($planilla->nombre, $editaction_resource.$deleteaction_resource);
				
			}
		}
		return $tabla;// si es retorne la tabla vacia crear boton de crear modulos
		
		
		
		
	}
	
}