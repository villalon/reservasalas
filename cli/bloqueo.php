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
 * This script send notifications on facebook
 *
 * @package    local/facebook/
 * @subpackage cli
 * @copyright  2010 Jorge Villalon (http://villalon.cl)
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

define('CLI_SCRIPT', true);

require_once(dirname(dirname(dirname(dirname(__FILE__)))).'/config.php');
require_once($CFG->libdir.'/clilib.php');      // cli only functions
require_once($CFG->libdir.'/moodlelib.php');      // moodle lib functions
require_once($CFG->libdir.'/datalib.php');      // data lib functions
require_once($CFG->libdir.'/accesslib.php');      // access lib functions
require_once($CFG->dirroot.'/course/lib.php');      // course lib functions
require_once($CFG->dirroot.'/enrol/guest/lib.php');      // guest enrol lib functions
require_once($CFG->dirroot.'/local/reservasalas/lib.php');
// now get cli options
list($options, $unrecognized) = cli_get_params(array('help'=>false),
                                               array('h'=>'help'));

if ($unrecognized) {
    $unrecognized = implode("\n  ", $unrecognized);
    cli_error(get_string('cliunknowoption', 'admin', $unrecognized));
}

if ($options['help']) {
    $help =
"Bloquea y desbloquea a los alumnos según sus reservas.

Options:
-h, --help            Print out this help

Example:
\$sudo -u apache /usr/bin/php /local/reservasalas/cli/bloqueo.php
"; //TODO: localize - to be translated later when everything is finished

    echo $help;
    die;
}

cli_heading('Blocking students'); // TODO: localize
$time=time();

echo "\nStarting at ".date("F j, Y, G:i:s")."\n";


$fechahoy = date ( 'Y-m-d' );
$horahoy = date ( 'H' ).'%';

$sql="	Select rr.id as id, rr.alumno_id as userid
			FROM mdl_reservasalas_reservas AS rr
			INNER JOIN mdl_reservasalas_salas AS rs ON (rr.salas_id = rs.id AND rs.tipo = 2)
			INNER JOIN mdl_reservasalas_edificios AS re ON (re.id = rs.edificios_id)
			INNER JOIN mdl_reservasalas_modulos AS rm ON (rm.edificio_id = re.id)
			WHERE rr.modulo = rm.id AND rm.hora_inicio like '$horahoy' AND rr.fecha_reserva ='$fechahoy' AND rr.confirmado=0
";
$result=$DB->get_records_sql($sql);
$i=0;
foreach($result as $data){
	
	$userid=$data->userid;
	$idreserva=$data->id;
	if(!$DB->get_record('reservasalas_bloqueados',array('alumno_id'=>$userid,'estado'=>1) )){
		
		$record = new stdClass ();
		$record->fecha_bloqueo = $fechahoy;
		$record->id_reserva = $idreserva;
		$record->estado = 1;
		$record->comentarios = "bloqueado automático por no confirmar";
		$record->alumno_id = $userid;
		$DB->insert_record ( 'reservasalas_bloqueados', $record );
	$i++;
	}	
}
echo "\n".$i." students blocked\n";
echo "\n ok \n";
echo "Unlocking students\n";
$fecha=date('Y-m-d', strtotime("- 3 days"));
$sql="Select * from {reservasalas_bloqueados} where estado=? AND fecha_bloqueo=?";
$info=$DB->get_records_sql($sql,array('1',$fecha));
$k=0;
foreach($info as $data){
	
	$data->estado=0;
	$DB->update_record('reservasalas_bloqueados',$data);
$k++;
}
echo "\n".$k." students unlocked \n";
echo "ok\n";
$timenow=time();
$execute=$time - $timenow;
echo "\nExecute time ".$execute." sec\n";	


exit(0); // 0 means success
