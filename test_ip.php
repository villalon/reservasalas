<?php
require_once(dirname(__FILE__) . '/../../config.php');
require_once($CFG->dirroot.'/local/reservasalas/tablas.php');
global $DB, $USER, $PAGE;
echo "tu dirección IP es ".$_SERVER['REMOTE_ADDR'];
echo gethostbyaddr($_SERVER['REMOTE_ADDR']);
echo gmdate("M d Y H:i:s", time());
echo "<br>".strtotime('2011-02-22');


$fechahoy = date ( 'Y-m-d' );
$horahoy = date ( 'H' ).'%';
$ahora=time();


$fecha=date('Y-m-d', strtotime("- 3 days"));
$sql="Select * from {reservasalas_bloqueados} where estado=? AND fecha_bloqueo=?";
$info=$DB->get_records_sql($sql,array('1',$fecha));
foreach($info as $data){
	
	$data->estado=0;
	$DB->update_record('reservasalas_bloqueados',$data);
}