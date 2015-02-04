<?php
$capabilities = array(

    'local/reservasalas:viewuser' => array(
    	// Capability type (write, read, etc.)
        'captype' => 'read',
        // Context in which the capability can be set (course, category, etc.)
        'contextlevel' => CONTEXT_SYSTEM,
        // Default values for different roles (only teachers and managers can modify)
        'legacy' => array(
            'teacher' => CAP_ALLOW,
            'editingteacher' => CAP_ALLOW,
            'manager' => CAP_ALLOW,
			'student'=>CAP_ALLOW,
            )),

	'local/reservasalas:blocking'=> array(
		'captype' => 'read',
		'contextlevel' =>CONTEXT_SYSTEM,
		'legacy' => array(
            'manager' => CAP_ALLOW,
			'student'=>CAP_PROHIBIT,
            'teacher' => CAP_PROHIBIT,
            'editingteacher' => CAP_ALLOW
		)),
		
		'local/reservasalas:administration'=> array(
				'captype' => 'read',
				'contextlevel' =>CONTEXT_SYSTEM,
				'legacy' => array(
						'manager' => CAP_ALLOW,
						'student'=>CAP_PROHIBIT,
						'teacher' => CAP_PROHIBIT,
						'editingteacher' => CAP_ALLOW
				)),
		
		'local/reservasalas:libreryrules'=> array(
				'captype' => 'read',
				'contextlevel' =>CONTEXT_SYSTEM,
				'legacy' => array(
						'manager' => CAP_ALLOW,
						'student'=>CAP_PROHIBIT,
						'teacher' => CAP_PROHIBIT,
						'editingteacher' => CAP_ALLOW
				)),
		'local/reservasalas:popup'=> array(
				'captype' => 'read',
				'contextlevel' =>CONTEXT_SYSTEM,
				'legacy' => array(
						'manager' => CAP_ALLOW,
						'student'=>CAP_PROHIBIT,
						'teacher' => CAP_PROHIBIT,
						'editingteacher' => CAP_ALLOW
				)),
		'local/reservasalas:overwrite'=> array(
				'captype' => 'read',
				'contextlevel' =>CONTEXT_SYSTEM,
				'legacy' => array(
						'manager' => CAP_ALLOW,
						'student'=>CAP_PROHIBIT,
						'teacher' => CAP_PROHIBIT,
						'editingteacher' => CAP_ALLOW
				)),
		'local/reservasalas:delete'=> array(
				'captype' => 'read',
				'contextlevel' =>CONTEXT_SYSTEM,
				'legacy' => array(
						'manager' => CAP_ALLOW,
						'student'=>CAP_PROHIBIT,
						'teacher' => CAP_PROHIBIT,
						'editingteacher' => CAP_ALLOW
				)),
		'local/reservasalas:changewith'=> array(
				'captype' => 'read',
				'contextlevel' =>CONTEXT_SYSTEM,
				'legacy' => array(
						'manager' => CAP_ALLOW,
						'student'=>CAP_PROHIBIT,
						'teacher' => CAP_PROHIBIT,
						'editingteacher' => CAP_ALLOW
				)),
		'local/reservasalas:typeroom'=> array(
				'captype' => 'read',
				'contextlevel' =>CONTEXT_SYSTEM,
				'legacy' => array(
						'manager' => CAP_ALLOW,
						'student'=>CAP_PROHIBIT,
						'teacher' => CAP_PROHIBIT,
						'editingteacher' => CAP_ALLOW
				)),
		'local/reservasalas:bockinginfo'=> array(
				'captype' => 'read',
				'contextlevel' =>CONTEXT_SYSTEM,
				'legacy' => array(
						'manager' => CAP_ALLOW,
						'student'=>CAP_PROHIBIT,
						'teacher' => CAP_PROHIBIT,
						'editingteacher' => CAP_ALLOW
				)),
		'local/reservasalas:advancesearch'=> array(
				'captype' => 'read',
				'contextlevel' =>CONTEXT_SYSTEM,
				'legacy' => array(
						'manager' => CAP_ALLOW,
						'student'=>CAP_PROHIBIT,
						'teacher' => CAP_PROHIBIT,
						'editingteacher' => CAP_ALLOW
				)),
	'local/reservasalas:upload'=> array(
				'captype' => 'read',
				'contextlevel' =>CONTEXT_SYSTEM,
				'legacy' => array(
						'manager' => CAP_ALLOW,
						'student'=>CAP_PROHIBIT,
						'teacher' => CAP_PROHIBIT,
						'editingteacher' => CAP_ALLOW
				)),
		

		
);
?>	