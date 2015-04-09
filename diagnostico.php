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
//tercera prueba git
//código para setear contexto, url, layout
global $PAGE, $CFG, $OUTPUT, $DB;
require_login();
$url = new moodle_url('/local/reservasalas/diagnositco.php'); 
$context = context_system::instance();//context_system::instance();
$PAGE->set_context($context);
$PAGE->set_url($url);
$PAGE->set_pagelayout('standard');

if(!has_capability('local/reservasalas:bockinginfo', $context)) {
	// TODO: Log unsuccessful attempts for security
	print_error(get_string('INVALID_ACCESS','Reserva_Sala'));

}

$o = '';
$title = get_string('diagnostic', 'local_reservasalas');
$PAGE->navbar->add(get_string('roomsreserve', 'local_reservasalas'));
$PAGE->navbar->add(get_string('adjustments', 'local_reservasalas'));
$PAGE->navbar->add($title, 'diagnostico.php');

$PAGE->set_title($title);
$PAGE->set_heading($title);
$o.= $OUTPUT->header();
$o.= $OUTPUT->heading($title);
	


$ahoratime = time();
$ahoradate = date('Y-m-d');
$ahorahora = date('H:i:s');


//list($hora,$minuto) = explode(":",$horamodulo['inicio']);

// Se crea tabla que muestra la version del modulo, la fecha, hora y hora unix actual.
// También información respecto a la hora de inicio y fin de modulo.
$table = new html_table();
$table->data[] = array(get_string('version', 'local_reservasalas'), '2013050400');
$table->data[] = array(get_string('datediagnostic', 'local_reservasalas'), $ahoradate);
$table->data[] = array(get_string('hour', 'local_reservasalas'), $ahorahora);
$table->data[] = array(get_string('unixtime', 'local_reservasalas'), $ahoratime);


$o.= "<div class='no-overflow'>";
$o .= html_writer::table($table);
$o.= "</div>";


$o .= $OUTPUT->footer();
echo $o;



