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

// Code to set the context, url and layout.
global $PAGE, $CFG, $OUTPUT, $DB;
require_login ();
$url = new moodle_url ( '/local/reservasalas/estadisticas.php' );
$context = context_system::instance ();
$PAGE->set_context ( $context );
$PAGE->set_url ( $url );
$PAGE->set_pagelayout ( 'standard' );

if (! has_capability ( 'local/reservasalas:bockinginfo', $context )) {
	// TODO: Log unsuccessful attempts for security
	print_error ( get_string ( 'INVALID_ACCESS', 'Reserva_Sala' ) );
}

$o = '';
$title = get_string ( 'statistics', 'local_reservasalas' );
$PAGE->navbar->add ( get_string ( 'roomsreserve', 'local_reservasalas' ) );
$PAGE->navbar->add ( get_string ( 'adjustments', 'local_reservasalas' ) );
$PAGE->navbar->add ( $title, 'estadisticas.php' );
$PAGE->set_title ( $title );
$PAGE->set_heading ( $title );
$o .= $OUTPUT->header ();
$o .= $OUTPUT->heading ( $title );
$ahora = time ();

$fechahoy = date ( 'Y-m-d' );

$modulo = modulo_hora ( $ahora );

$table = new html_table ();

// Total of reservations made.
$totalreservas = $DB->count_records ( 'reservasalas_reservas' );
$totalvalidas = $DB->count_records ( 'reservasalas_reservas', array (
		'activa' => 1 
) );
$table->data [] = array (
		get_string ( 'totalreserves', 'local_reservasalas' ),
		$totalvalidas 
);

// Number of reservations made by the admin.
$admins = get_admins ();
$reservasdeadmin = 0;
foreach ( $admins as $admin ) {
	$count = $DB->count_records_select ( 'reservasalas_reservas', "alumno_id=$admin->id AND activa=1" );
	$reservasdeadmin += $count;
}
$table->data [] = array (
		get_string ( 'reservationsadm', 'local_reservasalas' ),
		$reservasdeadmin 
);

// Number of reservation made by the students
$table->data [] = array (
		get_string ( 'reservesstudents', 'local_reservasalas' ),
		$totalvalidas - $reservasdeadmin 
);

// Total of cancelled reservation
$totalcanceladas = $DB->count_records ( 'reservasalas_reservas', array (
		'activa' => 0 
) );
$table->data [] = array (
		get_string ( 'totalcancelled', 'local_reservasalas' ),
		$totalcanceladas . "/" . $totalreservas 
);

// Total of accepted reservation.
$totalconfirmadas = $DB->count_records ( 'reservasalas_reservas', array (
		'confirmado' => 1,
		'activa' => 1 
) );
$table->data [] = array (
		get_string ( 'totalconfirm', 'local_reservasalas' ),
		$totalconfirmadas 
);

// Total of reservations to be accepted.
$totalporconfirmar = $DB->get_records_sql ( "select * from {reservasalas_reservas} where confirmado = 0 AND fecha_reserva > '$fechahoy' AND activa = 1" );
$totalporconfirmarhoy = $DB->get_records_sql ( "select * from {reservasalas_reservas} where confirmado = 0 AND fecha_reserva = '$fechahoy' AND modulo > $modulo AND activa = 1" );
$table->data [] = array (
		get_string ( 'totalforconfirm', 'local_reservasalas' ),
		count ( $totalporconfirmar ) + count ( $totalporconfirmarhoy ) 
);

// Total of punished reservations
$totalcastigadas = $DB->get_records_sql ( "select * from {reservasalas_reservas} where confirmado = 0 AND fecha_reserva > 0 AND fecha_reserva < '$fechahoy' AND activa = 1" );
$totalcastigadashoy = $DB->get_records_sql ( "select * from {reservasalas_reservas} where confirmado = 0 AND fecha_reserva = '$fechahoy' AND modulo <= $modulo AND activa = 1" );
$table->data [] = array (
		get_string ( 'totalpunished', 'local_reservasalas' ),
		count ( $totalcastigadas ) + count ( $totalcastigadashoy ) 
);

// Total of students that were blocked.
$totalbloqueados = $DB->get_records_sql ( "select * from {reservasalas_bloqueados} group by alumno_id" );
$table->data [] = array (
		get_string ( 'studentblockedhistory', 'local_reservasalas' ),
		count ( $totalbloqueados ) 
);

// Total of students that are currently blocked.
$totalbloqueados = $DB->get_records_sql ( "select * from {reservasalas_bloqueados} where estado=1 group by alumno_id" );
$table->data [] = array (
		get_string ( 'studentblockpresent', 'local_reservasalas' ),
		count ( $totalbloqueados ) 
);

$o .= html_writer::table ( $table );

$o .= $OUTPUT->footer ();
echo $o;