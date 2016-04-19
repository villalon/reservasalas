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
 * This file keeps track of upgrades to the evaluaciones block
 *
 * Sometimes, changes between versions involve alterations to database structures
 * and other major things that may break installations.
 *
 * The upgrade function in this file will attempt to perform all the necessary
 * actions to upgrade your older installation to the current version.
 *
 * If there's something it cannot do itself, it will tell you what you need to do.
 *
 * The commands in here will all be database-neutral, using the methods of
 * database_manager class
 *
 * Please do not forget to use upgrade_set_timeout()
 * before any action that may take longer time to finish.
 *
 * @since 2.0
 * @package blocks
 * @copyright 2012 Jorge Villalon
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/**
 *
 * @param int $oldversion
 * @param object $block
 */


function xmldb_local_reservasalas_upgrade($oldversion) {
	global $CFG, $DB;

	$dbman = $DB->get_manager();

	if ($oldversion < 2013051304) {
		
		
		// Define table reservasalas_modulos to be created.
		$table = new xmldb_table('reservasalas_modulos');
		
		// Adding fields to table reservasalas_modulos.
		$table->add_field('id', XMLDB_TYPE_INTEGER, '10', null, XMLDB_NOTNULL, XMLDB_SEQUENCE, null);
		$table->add_field('nombre_modulo', XMLDB_TYPE_CHAR, '50', null, XMLDB_NOTNULL, null, null);
		$table->add_field('hora_inicio', XMLDB_TYPE_CHAR, '50', null, XMLDB_NOTNULL, null, null);
		$table->add_field('hora_fin', XMLDB_TYPE_CHAR, '50', null, XMLDB_NOTNULL, null, null);
		$table->add_field('edificio_id', XMLDB_TYPE_INTEGER, '20', null, XMLDB_NOTNULL, null, null);
		
		// Adding keys to table reservasalas_modulos.
		$table->add_key('primary', XMLDB_KEY_PRIMARY, array('id'));
		$table->add_key('edificio_id', XMLDB_KEY_FOREIGN, array('edificio_id'), 'reservasalas_edificios', array('id'));
		
		// Conditionally launch create table for reservasalas_modulos.
		if (!$dbman->table_exists($table)) {
			$dbman->create_table($table);
		}
		
		
		// Define table reservasalas_otrasreservas to be created.
		$table = new xmldb_table('reservasalas_otrasreservas');
		
		// Adding fields to table reservasalas_otrasreservas.
		$table->add_field('id', XMLDB_TYPE_INTEGER, '10', null, XMLDB_NOTNULL, XMLDB_SEQUENCE, null);
		$table->add_field('fecha_reserva', XMLDB_TYPE_CHAR, '50', null, XMLDB_NOTNULL, null, null);
		$table->add_field('fecha_creacion', XMLDB_TYPE_CHAR, '50', null, XMLDB_NOTNULL, null, null);
		$table->add_field('modulo', XMLDB_TYPE_CHAR, '50', null, XMLDB_NOTNULL, null, null);
		$table->add_field('usuario_id', XMLDB_TYPE_INTEGER, '20', null, XMLDB_NOTNULL, null, null);
		$table->add_field('comentario_usuario', XMLDB_TYPE_INTEGER, '20', null, null, null, null);
		$table->add_field('nombre_evento', XMLDB_TYPE_CHAR, '50', null, null, null, 'No name');
		$table->add_field('asistentes_evento', XMLDB_TYPE_INTEGER, '20', null, null, null, null);
		$table->add_field('comentario_evento', XMLDB_TYPE_TEXT, null, null, null, null, null);
		$table->add_field('ip', XMLDB_TYPE_INTEGER, '20', null, null, null, null);
		$table->add_field('salas_id', XMLDB_TYPE_INTEGER, '20', null, XMLDB_NOTNULL, null, null);
		
		// Adding keys to table reservasalas_otrasreservas.
		$table->add_key('primary', XMLDB_KEY_PRIMARY, array('id'));
		$table->add_key('salas_id', XMLDB_KEY_FOREIGN, array('salas_id'), 'reservasalas_salas', array('id'));
		
		// Conditionally launch create table for reservasalas_otrasreservas.
		if (!$dbman->table_exists($table)) {
			$dbman->create_table($table);
		}
		
		
		// Define table reservasalas_salarecursos to be created.
		$table = new xmldb_table('reservasalas_salarecursos');
		
		// Adding fields to table reservasalas_salarecursos.
		$table->add_field('id', XMLDB_TYPE_INTEGER, '10', null, XMLDB_NOTNULL, XMLDB_SEQUENCE, null);
		$table->add_field('salas_id', XMLDB_TYPE_INTEGER, '20', null, XMLDB_NOTNULL, null, null);
		$table->add_field('recursos_id', XMLDB_TYPE_INTEGER, '20', null, XMLDB_NOTNULL, null, null);
		
		// Adding keys to table reservasalas_salarecursos.
		$table->add_key('primary', XMLDB_KEY_PRIMARY, array('id'));
		$table->add_key('recursos_id', XMLDB_KEY_FOREIGN, array('recursos_id'), 'reservasalas_recursos', array('id'));
		$table->add_key('salas_id', XMLDB_KEY_FOREIGN, array('salas_id'), 'reservasalas_salas', array('id'));
		
		// Conditionally launch create table for reservasalas_salarecursos.
		if (!$dbman->table_exists($table)) {
			$dbman->create_table($table);
		}
		
		
		// Define table reservasalas_recursos to be created.
		$table = new xmldb_table('reservasalas_recursos');
		
		// Adding fields to table reservasalas_recursos.
		$table->add_field('id', XMLDB_TYPE_INTEGER, '10', null, XMLDB_NOTNULL, XMLDB_SEQUENCE, null);
		$table->add_field('nombre', XMLDB_TYPE_CHAR, '50', null, XMLDB_NOTNULL, null, null);
		
		// Adding keys to table reservasalas_recursos.
		$table->add_key('primary', XMLDB_KEY_PRIMARY, array('id'));
		
		// Conditionally launch create table for reservasalas_recursos.
		if (!$dbman->table_exists($table)) {
			$dbman->create_table($table);
		}
		
		
		// Define field id to be added to reservasalas_salas.
		$table = new xmldb_table('reservasalas_salas');
		$field = new xmldb_field('id', XMLDB_TYPE_INTEGER, '10', null, XMLDB_NOTNULL, XMLDB_SEQUENCE, null, null);
		
		// Conditionally launch add field id.
		if (!$dbman->field_exists($table, $field)) {
			$dbman->add_field($table, $field);
		}
		
		
		
		// Define field tipo to be added to reservasalas_salas.
		$table = new xmldb_table('reservasalas_salas');
		$field = new xmldb_field('tipo', XMLDB_TYPE_INTEGER, '10', null, null, null, null, 'edificios_id');
		
		// Conditionally launch add field tipo.
		if (!$dbman->field_exists($table, $field)) {
			$dbman->add_field($table, $field);
		}
		
		// Define field capacidad to be added to reservasalas_salas.
		$table = new xmldb_table('reservasalas_salas');
		$field = new xmldb_field('capacidad', XMLDB_TYPE_INTEGER, '20', null, null, null, null, 'tipo');
		
		// Conditionally launch add field capacidad.
		if (!$dbman->field_exists($table, $field)) {
			$dbman->add_field($table, $field);
		}
		
		
		upgrade_plugin_savepoint(true, 2013051304, 'local', 'reservasalas');
		
	}
	
	

	if ($oldversion < 2013021000) {
		 
		//PRIMERO BORRAR LAS TABLAS ANTERIORES
		//Usaremos modulos, ya que no existe en las nuevas tablas
		//Esto, para evitar borrar las tablas siempre que actualize
		$table = new xmldb_table('reservasalas_modulos');
		if($dbman->table_exists($table)){
			 
			// Define table reservasalas_bloqueos to be dropped
			$table = new xmldb_table('reservasalas_bloqueos');

			// Conditionally launch drop table for reservasalas_bloqueos
			if ($dbman->table_exists($table)) {
				$dbman->drop_table($table);
			}
			// Define table reservasalas_salas to be dropped
			$table = new xmldb_table('reservasalas_salas');

			// Conditionally launch drop table for reservasalas_salas
			if ($dbman->table_exists($table)) {
				$dbman->drop_table($table);
			}
			// Define table reservasalas_reservas to be dropped
			$table = new xmldb_table('reservasalas_reservas');

			// Conditionally launch drop table for reservasalas_reservas
			if ($dbman->table_exists($table)) {
				$dbman->drop_table($table);
			}
			// Define table reservasalas_sedes to be dropped
			$table = new xmldb_table('reservasalas_sedes');

			// Conditionally launch drop table for reservasalas_sedes
			if ($dbman->table_exists($table)) {
				$dbman->drop_table($table);
			}
			// Define table reservasalas_edificios to be dropped
			$table = new xmldb_table('reservasalas_edificios');

			// Conditionally launch drop table for reservasalas_edificios
			if ($dbman->table_exists($table)) {
				$dbman->drop_table($table);
			}
			// Define table reservasalas_modulos to be dropped
			$table = new xmldb_table('reservasalas_modulos');

			// Conditionally launch drop table for reservasalas_modulos
			if ($dbman->table_exists($table)) {
				$dbman->drop_table($table);
			}
		}
		 
		 
		//LUEGO CREAR LAS NUEVAS TABLAS
		// Define table reservasalas_sedes to be created
		$table = new xmldb_table('reservasalas_sedes');

		// Adding fields to table reservasalas_sedes
		$table->add_field('id', XMLDB_TYPE_INTEGER, '10', null, XMLDB_NOTNULL, XMLDB_SEQUENCE, null);
		$table->add_field('nombre', XMLDB_TYPE_CHAR, '45', null, null, null, null);

		// Adding keys to table reservasalas_sedes
		$table->add_key('primary', XMLDB_KEY_PRIMARY, array('id'));

		// Conditionally launch create table for reservasalas_sedes
		if (!$dbman->table_exists($table)) {
			$dbman->create_table($table);
		}

		 
		// Define table reservasalas_edificios to be created
		$table = new xmldb_table('reservasalas_edificios');

		// Adding fields to table reservasalas_edificios
		$table->add_field('id', XMLDB_TYPE_INTEGER, '10', null, XMLDB_NOTNULL, XMLDB_SEQUENCE, null);
		$table->add_field('nombre', XMLDB_TYPE_CHAR, '45', null, null, null, null);
		$table->add_field('sedes_id', XMLDB_TYPE_INTEGER, '10', null, null, null, null);

		// Adding keys to table reservasalas_edificios
		$table->add_key('id', XMLDB_KEY_PRIMARY, array('id'));
		$table->add_key('sedes_id', XMLDB_KEY_FOREIGN, array('sedes_id'), 'reservasalas_sedes', array('id'));

		// Conditionally launch create table for reservasalas_edificios
		if (!$dbman->table_exists($table)) {
			$dbman->create_table($table);
		}

		 
		// Define table reservasalas_salas to be created
		$table = new xmldb_table('reservasalas_salas');

		// Adding fields to table reservasalas_salas
		$table->add_field('id', XMLDB_TYPE_INTEGER, '10', null, XMLDB_NOTNULL, XMLDB_SEQUENCE, null);
		$table->add_field('nombre', XMLDB_TYPE_CHAR, '45', null, null, null, null);
		$table->add_field('nombre_pc', XMLDB_TYPE_CHAR, '45', null, null, null, null);
		$table->add_field('edificios_id', XMLDB_TYPE_INTEGER, '10', null, null, null, null);

		// Adding keys to table reservasalas_salas
		$table->add_key('primary', XMLDB_KEY_PRIMARY, array('id'));
		$table->add_key('edificios_id', XMLDB_KEY_FOREIGN, array('edificios_id'), 'reservasalas_edificios', array('id'));

		// Conditionally launch create table for reservasalas_salas
		if (!$dbman->table_exists($table)) {
			$dbman->create_table($table);
		}
		 

		// Define table reservasalas_reservas to be created
		$table = new xmldb_table('reservasalas_reservas');

		// Adding fields to table reservasalas_reservas
		$table->add_field('id', XMLDB_TYPE_INTEGER, '10', null, XMLDB_NOTNULL, XMLDB_SEQUENCE, null);
		$table->add_field('fecha_reserva', XMLDB_TYPE_CHAR, '20', null, null, null, null);
		$table->add_field('modulo', XMLDB_TYPE_INTEGER, '2', null, null, null, null);
		$table->add_field('confirmado', XMLDB_TYPE_BINARY, null, null, null, null, null);
		$table->add_field('activa', XMLDB_TYPE_BINARY, null, null, null, null, null);
		$table->add_field('alumno_id', XMLDB_TYPE_INTEGER, '10', null, XMLDB_NOTNULL, null, null);
		$table->add_field('salas_id', XMLDB_TYPE_INTEGER, '10', null, null, null, null);
		$table->add_field('comentario_alumno', XMLDB_TYPE_TEXT, null, null, null, null, null);
		$table->add_field('comentario_admin', XMLDB_TYPE_TEXT, null, null, null, null, null);
		$table->add_field('ip', XMLDB_TYPE_CHAR, '50', null, null, null, null);

		// Adding keys to table reservasalas_reservas
		$table->add_key('primary', XMLDB_KEY_PRIMARY, array('id'));
		$table->add_key('salas_id', XMLDB_KEY_FOREIGN, array('salas_id'), 'reservasalas_salas', array('id'));

		// Conditionally launch create table for reservasalas_reservas
		if (!$dbman->table_exists($table)) {
			$dbman->create_table($table);
		}

		// Define table reservasalas_bloqueados to be created
		$table = new xmldb_table('reservasalas_bloqueados');

		// Adding fields to table reservasalas_bloqueados
		$table->add_field('id', XMLDB_TYPE_INTEGER, '10', null, XMLDB_NOTNULL, XMLDB_SEQUENCE, null);
		$table->add_field('fecha_bloqueo', XMLDB_TYPE_CHAR, '20', null, null, null, null);
		$table->add_field('fecha_reserva', XMLDB_TYPE_CHAR, '20', null, null, null, null);
		$table->add_field('estado', XMLDB_TYPE_BINARY, null, null, null, null, null);
		$table->add_field('comentarios', XMLDB_TYPE_CHAR, '150', null, null, null, null);
		$table->add_field('alumno_id', XMLDB_TYPE_INTEGER, '10', null, null, null, null);

		// Adding keys to table reservasalas_bloqueados
		$table->add_key('primary', XMLDB_KEY_PRIMARY, array('id'));

		// Conditionally launch create table for reservasalas_bloqueados
		if (!$dbman->table_exists($table)) {
			$dbman->create_table($table);
		}





		// reservasalas savepoint reached
		upgrade_plugin_savepoint(true, 2013021000, 'local', 'reservasalas');
	}
	
	if ($oldversion < 2013030301) {
	
		// Define field alumno_id to be added to reservasalas_reservas
		$table = new xmldb_table('reservasalas_reservas');
		$field = new xmldb_field('alumno_id', XMLDB_TYPE_INTEGER, '10', null, XMLDB_NOTNULL, null, null, 'activa');
	
		// Conditionally launch add field alumno_id
		if (!$dbman->field_exists($table, $field)) {
			$dbman->add_field($table, $field);
		}
	
		// reservasalas savepoint reached
		upgrade_plugin_savepoint(true, 2013030301, 'local', 'reservasalas');
	}
	
	if ($oldversion < 2013050200) {
	
		
		
	}
	if ($oldversion < 2013050202) {
		
		$reservas = $DB->get_records('reservasalas_reservas');
		
		foreach($reservas as $reserva){
			$reserva->fecha_reserva = date('Y-m-d', $reserva->fecha_reserva);
			$DB->update_record('reservasalas_reservas', $reserva);
		}
	
		$bloqueados = $DB->get_records('reservasalas_bloqueados');
		
		foreach($bloqueados as $bloqueado){
			$bloqueado->fecha_reserva = date('Y-m-d', $bloqueado->fecha_reserva);
			$bloqueado->fecha_bloqueo = date('Y-m-d', $bloqueado->fecha_bloqueo);
			$DB->update_record('reservasalas_bloqueados', $bloqueado);
		}
		upgrade_plugin_savepoint(true, 2013050202, 'local', 'reservasalas');
	}
    if ($oldversion < 2013050402) {

        // Define field fecha_creacion to be added to reservasalas_reservas
        $table = new xmldb_table('reservasalas_reservas');
        $field = new xmldb_field('fecha_creacion', XMLDB_TYPE_CHAR, '20', null, null, null, null, 'ip');

        // Conditionally launch add field fecha_creacion
        if (!$dbman->field_exists($table, $field)) {
            $dbman->add_field($table, $field);
        }

        // reservasalas savepoint reached
        upgrade_plugin_savepoint(true, 2013050402, 'local', 'reservasalas');
    }
  if ($oldversion < 2013051300) {

        // Changing type of field confirmado on table reservasalas_reservas to int
        $table = new xmldb_table('reservasalas_reservas');
        $field = new xmldb_field('confirmado', XMLDB_TYPE_INTEGER, '10', null, null, null, null, 'modulo');

        // Launch change of type for field confirmado
        $dbman->change_field_type($table, $field);
        
        // Changing type of field activa on table reservasalas_reservas to int
        $table = new xmldb_table('reservasalas_reservas');
        $field = new xmldb_field('activa', XMLDB_TYPE_INTEGER, '10', null, null, null, null, 'confirmado');

        // Launch change of type for field activa
        $dbman->change_field_type($table, $field);
        

        // reservasalas savepoint reached
        upgrade_plugin_savepoint(true, 2013051300, 'local', 'reservasalas');
    }
    if ($oldversion < 2013051301) {

        // Changing type of field estado on table reservasalas_bloqueados to int
        $table = new xmldb_table('reservasalas_bloqueados');
        $field = new xmldb_field('estado', XMLDB_TYPE_INTEGER, '10', null, null, null, null, 'fecha_reserva');

        // Launch change of type for field estado
        $dbman->change_field_type($table, $field);

        // reservasalas savepoint reached
        upgrade_plugin_savepoint(true, 2013051301, 'local', 'reservasalas');
    }
    
    if ($oldversion < 2014011102) {
    
    	// Changing type of field nombre_evento on table reservasalas_otrasreservas to text.
    	$table = new xmldb_table('reservasalas_otrasreservas');
    	$field = new xmldb_field('nombre_evento', XMLDB_TYPE_TEXT, null, null, null, null, null, 'comentario_usuario');
    
    	// Launch change of type for field nombre_evento.
    	$dbman->change_field_type($table, $field);
    
    	// Reservasalas savepoint reached.
    	upgrade_plugin_savepoint(true, 2014011102, 'local', 'reservasalas');
    }
    
    if ($oldversion < 2014011500) {
    
    	// Define field id_responsable to be added to reservasalas_otrasreservas.
    	$table = new xmldb_table('reservasalas_otrasreservas');
    	$field = new xmldb_field('id_responsable', XMLDB_TYPE_INTEGER, '20', null, XMLDB_NOTNULL, null, null, 'salas_id');
    
    	// Conditionally launch add field id_responsable.
    	if (!$dbman->field_exists($table, $field)) {
    		$dbman->add_field($table, $field);
    	}
    
    	// Reservasalas savepoint reached.
    	upgrade_plugin_savepoint(true, 2014011500, 'local', 'reservasalas');
    }


    if ($oldversion < 2014012003) {
    
    	// Define table reservasalas_otrasreservas to be dropped.
    	$table = new xmldb_table('reservasalas_otrasreservas');
    
    	// Conditionally launch drop table for reservasalas_otrasreservas.
    	if ($dbman->table_exists($table)) {
    		$dbman->drop_table($table);
    	}
    
    
    	// Define field nombre_evento to be added to reservasalas_reservas.
    	 $table = new xmldb_table('reservasalas_reservas');
         $field = new xmldb_field('nombre_evento', XMLDB_TYPE_TEXT, null, null, null, null, null, 'fecha_creacion');
    	
    	// Conditionally launch add field nombre_evento.
    	if (!$dbman->field_exists($table, $field)) {
    		$dbman->add_field($table, $field);
    	}
    
    
    	// Define field asistentes to be added to reservasalas_reservas.
    	$table = new xmldb_table('reservasalas_reservas');
        $field = new xmldb_field('asistentes', XMLDB_TYPE_INTEGER, '20', null, null, null, null, 'nombre_evento');
    	// Conditionally launch add field asistentes.
    	if (!$dbman->field_exists($table, $field)) {
    		$dbman->add_field($table, $field);
    	}
    

    	// Changing precision of field modulo on table reservasalas_reservas to (20).
    	$table = new xmldb_table('reservasalas_reservas');
    	$field = new xmldb_field('modulo', XMLDB_TYPE_INTEGER, '20', null, null, null, null, 'fecha_reserva');
    
    	// Launch change of precision for field modulo.
    	$dbman->change_field_precision($table, $field);
    
    	// Reservasalas savepoint reached.
    	upgrade_plugin_savepoint(true, 2014012003, 'local', 'reservasalas');
    }
    if ($oldversion < 2014051900) {
    
    	  // Rename field id_reserva on table reservasalas_bloqueados to NEWNAMEGOESHERE.
        $table = new xmldb_table('reservasalas_bloqueados');
        $field = new xmldb_field('fecha_reserva', XMLDB_TYPE_CHAR, '20', null, null, null, null, 'fecha_bloqueo');

        // Launch rename field id_reserva.
        $dbman->rename_field($table, $field, 'id_reserva');

        // Reservasalas savepoint reached.
    	upgrade_plugin_savepoint(true, 2014051900, 'local', 'reservasalas');
    }
    
    if ($oldversion < 2014052200) {
    	
    	$DB->set_field('reservasalas_bloqueados', 'estado', 0);
    
    	// Reservasalas savepoint reached.
    	upgrade_plugin_savepoint(true, 2014052200, 'local', 'reservasalas');
    }
    if ($oldversion < 2014081200) {
    	
    	// Define field hora_fin to be dropped from reservasalas_modulos.
    	$table = new xmldb_table('reservasalas_modulos');
    	$field = new xmldb_field('estado_modulo_b');
    	
    	// Conditionally launch drop field hora_fin.
    	if ($dbman->field_exists($table, $field)) {
    		$dbman->drop_field($table, $field);
    	
    }
    // Reservasalas savepoint reached.
    upgrade_plugin_savepoint(true, 2014081200, 'local', 'reservasalas');
    }
    if ($oldversion < 2014081201) {
    	 
    	// Define field hora_fin to be dropped from reservasalas_modulos.
    	$table = new xmldb_table('reservasalas_modulos');
    	 $field = new xmldb_field('id_modulo_b');
    	// Conditionally launch drop field hora_fin.
    	if ($dbman->field_exists($table, $field)) {
    		$dbman->drop_field($table, $field);	 
    	}
    	// Reservasalas savepoint reached.
    	upgrade_plugin_savepoint(true, 2014081201, 'local', 'reservasalas');
    }
    
    
    if ($oldversion < 2016041801) {
    
    	// Define key modulo (foreign) to be added to reservasalas_reservas.
    	$table = new xmldb_table('reservasalas_reservas');
    	$key = new xmldb_key('modulo', XMLDB_KEY_FOREIGN, array('modulo'), 'reservasalas_modulos', array('id'));
    
    	// Launch add key modulo.
    	$dbman->add_key($table, $key);
    
    	// Reservasalas savepoint reached.
    	upgrade_plugin_savepoint(true, 2016041801, 'local', 'reservasalas');
    }
    
    
	return true;
}