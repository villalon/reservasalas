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
require_once (dirname ( __FILE__ ) . '/../../config.php'); // Required.
require_once ($CFG->dirroot . '/local/reservasalas/forms.php');
require_once ($CFG->dirroot . '/local/reservasalas/tablas.php');

// Code to set the context, url and layout.
global $PAGE, $CFG, $OUTPUT, $DB;
require_login ();
$url = new moodle_url ( '/local/reservasalas/misreservas.php' );
$context = context_system::instance ();
$PAGE->set_context ( $context );
$PAGE->set_url ( $url );
$PAGE->set_pagelayout ( 'standard' );

$PAGE->navbar->add ( get_string ( 'roomsreserve', 'local_reservasalas' ) );
$PAGE->navbar->add ( get_string ( 'reservations', 'local_reservasalas' ), 'misreservas.php' );
$PAGE->set_pagelayout ( 'standard' );
$PAGE->set_title ( get_string ( 'reservations', 'local_reservasalas' ) );
$PAGE->set_heading ( get_string ( 'reservations', 'local_reservasalas' ) );

// We request the ACTION, it can be: ver, confirmar, cancelar.
$action = optional_param ( 'action', 'ver', PARAM_ACTION );
// The ACTION gets requested via URL, after an option of the page is selected.

// Use of the ACTION confirmar
// Allows the user to confirm a reservation that was previusly made, and also add a comment.
if ($action == 'confirmar') {
	$idreserva = required_param ( 'idreserva', PARAM_INT );
	$sesskey = required_param ( 'sesskey', PARAM_INT );
	$confirmacionform = new comentarioConfirmacion ( false, array (
			'idreserva' => $idreserva 
	) );
	
	if ($confirmacionform->is_cancelled ()) {
		$action = 'ver';
	} else if ($fromform = $confirmacionform->get_data ()) {
		// Edits the reservation and give the confirmed state, also saves the comment if exist and the computer ip adress.
		$record = new stdClass ();
		$record->id = $fromform->idreserva;
		$record->confirmado = true;
		$record->ip = gethostbyaddr ( $_SERVER ['REMOTE_ADDR'] );
		$record->comentario_alumno = $fromform->comentario;
		if (! $DB->update_record ( 'reservasalas_reservas', $record )) {
			print_error ( var_dump ( $record ) );
		}
		$action = 'ver';
	} else {
		if (! confirm_sesskey ()) {
			print_error ( "sesskey incorrecta" );
		}
	}
	
	// Use of the ACTION cancelar.
	// It refers to cancel the reservation that was previously made.
} else if ($action == 'cancelar') {
	if (confirm_sesskey ()) {
		// Uptdates the reservation state to unactive.
		$idreserva = required_param ( 'idreserva', PARAM_INT );
		$data = new stdClass ();
		$data->id = $idreserva;
		$data->activa = 0;
		$DB->update_record ( 'reservasalas_reservas', $data );
		$action = 'ver';
	} else {
		print_error ( 'ERROR' );
	}
}
// Use of the ACTION ver.
// Shows all the reservations made by the user, late, confirmed, and cancelled.
if ($action == 'ver') {
	$tablareservas = tablas::misReservas ();
}

// ************************************************************************************************************
// Views of the ACTIONS
if ($action == 'confirmar') {
	$o = '';
	$PAGE->navbar->add ( 'Confirmar Reserva', '' );
	$title = get_string ( 'reserveconfirm', 'local_reservasalas' );
	$o .= $OUTPUT->header ();
	$o .= $OUTPUT->heading ( $title );
	ob_start ();
	$confirmacionform->display ();
	$o .= ob_get_contents ();
	ob_end_clean ();
	$o .= $OUTPUT->footer ();
} else if ($action == 'ver') {
	$o = '';
	$title = get_string ( 'reservations', 'local_reservasalas' );
	$o .= $OUTPUT->header ();
	$o .= $OUTPUT->heading ( $title );
	if ($tablareservas->data) {
		$o .= html_writer::table ( $tablareservas );
		$o .= "<br><center><STRONG><p style=\"font-family:arial;color:red;\">" . get_string ( 'rememberconfirm', 'local_reservasalas' ) . "</STRONG></p></center>";
	} else {
		$o .= get_string ( 'youhavenotbooked', 'local_reservasalas' );
	}
	$hora = date ( 'H:i' );
	$o .= $OUTPUT->single_button ( 'reservar.php', get_string ( 'newbook', 'local_reservasalas' ) ) . '<br>'; // Print the link to GO BACK.
	                                                                                                          // $o.= "code to cancel and confirm missing, the format of the dates need to be fixed";
	
	$o .= "<br><p style=\"font-family:arial;color:red;\">" . get_string ( 'notes', 'local_reservasalas' ) . "<br>
	- " . get_string ( 'inordertoregister', 'local_reservasalas' ) . $OUTPUT->pix_icon ( 'i/valid', get_string ( 'confirm', 'local_reservasalas' ) ) . get_string ( 'whichisvisible', 'local_reservasalas' ) . "<br>
	- " . get_string ( 'youmustdo', 'local_reservasalas' ) . "<br>
	- " . get_string ( 'unabletoattend', 'local_reservasalas' ) . " </p>";
	$o .= $OUTPUT->footer ();
} else {
	print_error ( get_string ( 'invalidaction', 'local_reservasalas' ) );
}

echo $o;

