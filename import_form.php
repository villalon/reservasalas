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

if (!defined('MOODLE_INTERNAL')) {
	die('Direct access to this script is forbidden.');    ///  It must be included from a Moodle page
}

require_once $CFG->libdir.'/formslib.php';
require_once($CFG->libdir.'/gradelib.php');

class import_form extends moodleform {
	function definition (){
		global $COURSE;

		$mform =& $this->_form;

		if (isset($this->_customdata)) {  // hardcoding plugin names here is hacky
			$features = $this->_customdata;
		} else {
			$features = array();
		}

		// course id needs to be passed for auth purposes
		$mform->addElement('header', 'general', get_string('importfile', 'grades'));
		// file upload
		$mform->addElement('filepicker', 'userfile', get_string('file'));
		$mform->addRule('userfile', null, 'required');
		$encodings = core_text::get_encodings();
		$mform->addElement('select', 'encoding', get_string('encoding', 'grades'), $encodings);

		if (!empty($features['includeseparator'])) {
			$radio = array();
			$radio[] = $mform->createElement('radio', 'separator', null, get_string('septab', 'grades'), 'tab');
			$radio[] = $mform->createElement('radio', 'separator', null, get_string('sepcomma', 'grades'), 'comma');
			$radio[] = $mform->createElement('radio', 'separator', null, get_string('sepcolon', 'grades'), 'colon');
			$radio[] = $mform->createElement('radio', 'separator', null, get_string('sepsemicolon', 'grades'), 'semicolon');
			$mform->addGroup($radio, 'separator', get_string('separator', 'grades'), ' ', false);
			$mform->setDefault('separator', 'comma');
		}

		if (!empty($features['verbosescales'])) {
			$options = array(1=>get_string('yes'), 0=>get_string('no'));
			$mform->addElement('select', 'verbosescales', get_string('verbosescales', 'grades'), $options);
		}

		$options = array('10'=>10, '20'=>20, '100'=>100, '1000'=>1000, '100000'=>100000);
		$mform->addElement('select', 'previewrows', get_string('rowpreviewnum', 'grades'), $options); // TODO: localize
		$mform->setType('previewrows', PARAM_INT);
		$mform->addElement('hidden', 'groupid', groups_get_course_group($COURSE));
		$mform->setType('groupid', PARAM_INT);
		$this->add_action_buttons(false, get_string('uploadgrades', 'grades'));
	}
}

class import_mapping_form extends moodleform {

	function definition () {
		global $CFG;
		$mform =& $this->_form;
		$instance = $this->_customdata;
		$mform->addElement('hidden', 'iid',$instance['iid']);
		$mform->setType('iid', PARAM_INT);
		$this->add_action_buttons(true, 'subir');
	}
}
