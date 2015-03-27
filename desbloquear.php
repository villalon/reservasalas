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
 * @copyright 2013 Marcelo Epuyao
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
require_once (dirname ( __FILE__ ) . '/../../config.php'); // Required.
require_once ($CFG->dirroot . '/local/reservasalas/forms.php');
require_once ($CFG->dirroot . '/local/reservasalas/tablas.php');

global $PAGE, $CFG, $OUTPUT, $DB;
// Verified if the user is logged in.
require_login ();
$url = new moodle_url ( '/local/reservasalas/editarsalas.php' );
$context = context_system::instance (); // context_system::instance();
$PAGE->set_context ( $context );
$PAGE->set_url ( $url );
$PAGE->set_pagelayout ( 'standard' );

// Capabilities.
// Validates the capability of the user, so he/she can see the content of the page.
// In these case only the admin can see the Module Admin can see the content.
if (! has_capability ( 'local/reservasalas:blocking', $context )) {
	print_error ( get_string ( 'INVALID_ACCESS', 'Reserva_Sala' ) );
}
// Bread Crumbs.
$PAGE->navbar->add ( get_string ( 'roomsreserve', 'local_reservasalas' ) );
$PAGE->navbar->add ( get_string ( 'users', 'local_reservasalas' ) );
$PAGE->navbar->add ( get_string ( 'unblockstudent', 'local_reservasalas' ) );

// Form to unblock the user.
$desbloquearform = new desbloquearAlumnoForm ();

if ($fromform = $desbloquearform->get_data ()) {
	/*
	 * If the form as sent and the student exist and is blocked, it will unblock him,
	 * Otherwise it will show a message regarding the error.
	 */
	if ($usuario = $DB->get_record ( 'user', array (
			'username' => $fromform->usuario 
	) )) {
		$dateahora = date ( 'Y-m-d' );
		if ($bloqueo = $DB->get_record ( 'reservasalas_bloqueados', array (
				'alumno_id' => $usuario->id,
				'estado' => 1 
		) )) {
			$record = new stdClass ();
			$record->id = $bloqueo->id;
			$record->id_reserva = $bloqueo->id_reserva;
			$record->comentarios = $fromform->comentario;
			$record->estado = 0;
			
			$DB->update_record ( 'reservasalas_bloqueados', $record );
			$desbloqueado = true;
		} else {
			print_error ( get_string('usernotblocked','local_reservasalas') );
		}
	} else {
		print_error ( get_string('userdonotexist','local_reservasalas')  );
	}
}

// It loads the page, header, title and breadcrumbs.

$o = '';
$title = get_string ( 'unblockstudent', 'local_reservasalas' );
$PAGE->set_title ( $title );
$PAGE->set_heading ( $title );
$o .= $OUTPUT->header ();
$o .= $OUTPUT->heading ( $title );

/*
 * If is the first time the page is loaded it will show the unblocking form,
 * if the information is already entered and is correct it will show a message of unlocking,
 * if the information is not correct it will show a message regarding the issue.
 */

if (isset ( $desbloqueado )) {
	$o .= get_string ( 'thestudent', 'local_reservasalas' ) . $usuario->firstname . " " . $usuario->lastname . get_string ( 'beenunlocked', 'local_reservasalas' );
	$o .= $OUTPUT->single_button ( 'desbloquear.php', get_string ( 'unblockagain', 'local_reservasalas' ) );
} else {
	ob_start ();
	$desbloquearform->display ();
	$o .= ob_get_contents ();
	ob_end_clean ();
}
$o .= $OUTPUT->footer ();
echo $o;
