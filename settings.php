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
//a

/**
 * 
 *
 * @package    local
 * @subpackage reservasalas
 * @copyright  2014 Francisco García Ralph (francisco.garcia.ralph@gmail.com)
 * 					Nicolás Bañados Valladares (nbanados@alumnos.uai.cl)
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die;

if ($hassiteconfig) {
	
	$settings = new admin_settingpage('local', 'Reserva de salas');
	$ADMIN->add('localplugins', $settings);
    $settings->add(new admin_setting_configtext('user', 'Ejemplo de usuario', 'Ejemplo: usuario@email.com', '', PARAM_TEXT));
    $settings->add(new admin_setting_configtext('reservasDia', 'Numero máximo de reservas al día  por alumno', '2', '2', PARAM_INT));
    $settings->add(new admin_setting_configtext('reservasSemana', 'Numero máximo de reservas a la semana  por alumno', '6', '6', PARAM_INT));
    
}