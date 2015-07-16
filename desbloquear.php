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
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

require_once(dirname(__FILE__) . '/../../config.php'); //obligatorio
require_once($CFG->dirroot.'/local/reservasalas/forms.php');
require_once($CFG->dirroot.'/local/reservasalas/tablas.php');


global $PAGE, $CFG, $OUTPUT, $DB;
//Verifica que el usuario que accese a la página este logeado en el sistema
require_login();
$url = new moodle_url('/local/reservasalas/desbloquear.php'); 
$context = context_system::instance();//context_system::instance();
$PAGE->set_context($context);
$PAGE->set_url($url);
$PAGE->set_pagelayout('standard');

//Capabilities
//Valida la capacidad del usuario de poder ver el contenido
//En este caso solo administradores del módulo pueden ingresar
if(!has_capability('local/reservasalas:blocking', $context)) {
		print_error(get_string('INVALID_ACCESS','Reserva_Sala'));
}
//Migas de pan
$PAGE->navbar->add(get_string('roomsreserve', 'local_reservasalas'));
$PAGE->navbar->add(get_string('users', 'local_reservasalas'));
$PAGE->navbar->add(get_string('unblockstudent', 'local_reservasalas'));

//$PAGE->set_title('UAI Webcursos');
//$PAGE->set_heading('UAI Webcursos');

//Formulario para desloquear a un alumno
$desbloquearform = new desbloquearAlumnoForm();

if($fromform = $desbloquearform->get_data()){
	//Si el formualario fue enviado y el alumno existe y ademas esta bloqueado, lo desbloqueara.
	//De lo contrario mostrata mensajes acordes al error ocurrido.
	if($usuario = $DB->get_record('user',array('username'=>$fromform->usuario))){
		$dateahora = date('Y-m-d');
		if($bloqueo = $DB->get_record('reservasalas_bloqueados',array('alumno_id'=>$usuario->id,'estado'=>1))){//('reservasalas_bloqueados', array('alumno_id'=>$usuario->id));
			$record = new stdClass();
			$record->id = $bloqueo->id;
			$record->id_reserva = $bloqueo->id_reserva;
			$record->comentarios = $fromform->comentario;
			$record->estado = 0;
	
			$DB->update_record('reservasalas_bloqueados', $record);
			$desbloqueado = true;
		}else{
			print_error(get_string('noblock', 'local_reservasalas'));
		}		
	}else{
		print_error(get_string('noexist', 'local_reservasalas'));
	}
}

//Se carga la página, ya sea el título, head y migas de pan.
$o = '';
$title = get_string('unblockstudent', 'local_reservasalas');
$PAGE->set_title($title);
$PAGE->set_heading($title);
$o .= $OUTPUT->header();
$o .= $OUTPUT->heading($title);

//Si es la 1era ves que se carga la página mostrara el formulario para desbloquear alumno,
//Si ya se ingreso información y esta es correcta mostrara mensaje de desbloqueo y
//Si es incorrecta mostrara mensaje acorde al error ocurrido.
if(isset($desbloqueado)){
	$o.= get_string('thestudent', 'local_reservasalas').$usuario->firstname." ".$usuario->lastname.get_string('beenunlocked', 'local_reservasalas');
	$o .= $OUTPUT->single_button('desbloquear.php', get_string('unblockagain', 'local_reservasalas'));
}else{
	ob_start();
    $desbloquearform->display();
    $o .= ob_get_contents();
    ob_end_clean();
}
$o .= $OUTPUT->footer();
echo $o;
