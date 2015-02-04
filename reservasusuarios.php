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
 * @copyright  2013 Marcelo Epuyao
 * 					
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
require_once(dirname(__FILE__) . '/../../config.php'); //obligatorio
require_once($CFG->dirroot.'/local/reservasalas/forms.php');
require_once($CFG->dirroot.'/local/reservasalas/tablas.php');

//código para setear contexto, url, layout
global $PAGE, $CFG, $OUTPUT, $DB;
require_login();
$url = new moodle_url('/local/reservasalas/reservausuarios.php');
$context = context_system::instance();//context_system::instance();
$PAGE->set_context($context);
$PAGE->set_url($url);
$PAGE->set_pagelayout('standard');
$PAGE->set_title(get_string('userReserves', 'local_reservasalas'));

//Capabilities
//Comprueba si la persona que accede a la pagina tiene la capacitadad de ver el contenido
//ej: un alumno no tendria dicha capacidad en esta página
if(!has_capability('local/reservasalas:bockinginfo', $context)) {
	print_error(get_string('INVALID_ACCESS','Reserva_Sala'));
}

//rescatamos la ACTION, pueden ser: confirmar, cancelar, ver y buscarusuario.
$action = optional_param('action', 'buscarusuario', PARAM_ACTION);

//Implementacion action confirmar
// permite a un administrador confirmar una reserva, ya sea hecha por el o no.
if($action == 'confirmar'){
	$idreserva= required_param('idreserva', PARAM_INT);
	//$sesskey = required_param('sesskey', PARAM_INT);

	if(confirm_sesskey()){
		//actualiza reserva y pone estado de confirmada
		$record = new stdClass();
		$record->id = $idreserva;
		$record->confirmado = true;
		$record->ip = gethostbyaddr($_SERVER['REMOTE_ADDR']);
		$record->comentario_alumno = get_string('confirmedbyadmin', 'local_reservasalas');
		if(!$DB->update_record('reservasalas_reservas', $record)){
			print_error(var_dump($record));
		}
		$reserva = $DB->get_record('reservasalas_reservas', array('id'=>$idreserva));
		$usuario = $DB->get_record('user', array('id'=>$reserva->alumno_id));
		$action = 'ver';
	}else{
		print_error('ERROR');
	}

	
// implementacion action cancelar
// permite a un administrador concelar una reserva, ya sea hecha por el o no.
}else if($action == 'cancelar'){
	if(confirm_sesskey()){
		$idreserva= required_param('idreserva', PARAM_INT);
	
		// actualiza la reserva a un estado inactiva
		$data = new stdClass();
		$data->id= $idreserva;
		$data->activa = 0;
		$DB->update_record('reservasalas_reservas', $data);

		$reserva = $DB->get_record('reservasalas_reservas', array('id'=>$idreserva));
		$usuario = $DB->get_record('user', array('id'=>$reserva->alumno_id));
		$action = 'ver';
	}else{
		print_error('ERROR');
	}

}

// Implementacion action ver, por defecto es la 1era vista
// permite buscar un usuario por medio de su correo institucional, para luego mostrar sus reservas
if($action == 'buscarusuario'){

	$buscarform = new buscarUsuarioReservas();
	if ($fromform = $buscarform->get_data()) {
		$emailusuario =  $fromform->usuario;
		if(!$usuario = $DB->get_record('user', array('username'=>$emailusuario))){
			print_error(get_string('unregistereduser', 'local_reservasalas'));
		}
		$action = 'ver';
	}
}

// implementacion action ver
// en una tabla muestra las reservas de un usuario en especifico
if($action == 'ver'){
	$tablareservas = tablas::misReservas($usuario->id);
}

//********************************************************************************************
$o = '';
if($action == 'ver'){
	$title = get_string('reservations', 'local_reservasalas')." ".$usuario->firstname." ".$usuario->lastname; //*
	$PAGE->navbar->add(get_string('roomsreserve', 'local_reservasalas'));
	$PAGE->navbar->add(get_string('adjustments', 'local_reservasalas'));
	$PAGE->navbar->add(get_string('userReserves', 'local_reservasalas'), 'reservasusuarios.php');
	$PAGE->navbar->add($title);
	$o.= $OUTPUT->header();
	$o.= $OUTPUT->heading($title);
	if($tablareservas->data){
		$o.= html_writer::table($tablareservas);
	}else{
		$o.= get_string('userhasnotbooked', 'local_reservasalas');
	}
	$o.=$OUTPUT->single_button('reservasusuarios.php', get_string('return', 'local_reservasalas')).'<br>'; //imprime link volver.

	$o .= $OUTPUT->footer();

}else if($action == 'buscarusuario'){
	$title = get_string('usersearch', 'local_reservasalas');
	$PAGE->navbar->add(get_string('roomsreserve', 'local_reservasalas'));
	$PAGE->navbar->add(get_string('adjustments', 'local_reservasalas'));
	$PAGE->navbar->add(get_string('userReserves', 'local_reservasalas'), 'reservasusuarios.php');
	$PAGE->navbar->add($title, '');
	$PAGE->set_title($title);
	$PAGE->set_heading($title);
	$o .= $OUTPUT->header();
	$o .= $OUTPUT->heading($title);

	ob_start();
	$buscarform->display();
	$o .= ob_get_contents();
	ob_end_clean();

	$o .= $OUTPUT->footer();


}else{
	print_error(get_string('invalidaction', 'local_reservasalas'));
}
echo $o;