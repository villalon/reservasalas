------------------------------------------
reservasalas for Moodle 2.6.3+ or more
Version: 1.0.0
------------------------------------------

Author: Nicolas Bañados (nbanados@alumnos.uai.cl)
Developers: Nicolas Bañados (nbanados@alumnos.uai.cl)
            Hans Jeria (hjeria@alumnos.uai.cl)
            Francisco García Ralph (francisco.garcia.ralph@gmail.com)

------------------------------------------

- What is this?

reservasalas is a tool to keep control of the rooms of an educational 
institution, in which teachers, students and administrative can reserve 
rooms for clases, rooms for study or meetings rooms. With this tool you 
can create the necessary rooms to represent your educational institution, 
your schedule, also you can create buildings and places if is necessary. 
To then be able to book a room on a given day and time or a time interval.

- What I need to do?

To install the "reservasalas" plugin is needed Moodle, 2.6.3+ or more, 
in your system. After downloading the application you need:

Hold the "reservasalas" /local/ folder
Login as administrator.
Available plugins are displayed, press "update database now moodle" 
If the installation was done in the right way a message "Success" is displayed, 
press continue.
The plugin is installed, with the database.
You can create links where you think is appropriate.

- How it works?

Below are presented the steps to be followed for the plugin to work after 
installation. 

1.- Create necessary permissions (are explained in “capabilities types”): 
site administration->user->permissions->define roles.

To perform the following steps need to have administrator permissions or 
capability "administration"

2.- Create places.
3.- Create resources.
4.- Create buildings to their respective work units (modules) and assigned 
place.
5.- Create rooms, with their resources, building and room type assigned.
6.- The plugin is ready for operation.

This plugin contains the following files:

* /local/reservasalas/version.php - version of script (must be incremented after changes)
* /local/reservasalas/db/install.xml - executed during install (new version.php found)
* /local/reservasalas/db/install.php - executed right after install.xml
* /local/reservasalas/db/uninstall.php - executed during uninstallation
* /local/reservasalas/db/upgrade.php - executed after version.php change
* /local/reservasalas/db/access.php - definition of capabilities
* /local/reservasalas/db/messages.php - messaging registration
* /local/reservasalas/lang/en/local_pluginname.php - language file
* /local/reservasalas/cli/bloqueo.php - script that automatically blocks to students who have not confirmed the room you have booked  
* /local/reservasalas/bloquear.php - script to block users directly
* /local/reservasalas/desbloquear.php - script to unlock users directly
* /local/reservasalas/diagnostico.php - script that displays the current status of the plugin
* /local/reservasalas/edificios.php - script to create, edit, delete and manage buildings
* /local/reservasalas/estadisticas.php - script showing stats reserves
* /local/reservasalas/forms.php - file containing all the forms used
* /local/reservasalas/historial.php - script showing the history of bookings
* /local/reservasalas/info.php - script that displays the information in any book on
* /local/reservasalas/lib.php - file that contains lib
* /local/reservasalas/misreservas.php - script showing the history of my reserves
* /local/reservasalas/reservar.php - script to make reservations
* /local/reservasalas/reservasalasstyle.css - file contains css styles
* /local/reservasalas/reservausuarios.php - script to find all reserves for a user
* /local/reservasalas/resources.php - script to create, edit and delete resources
* /local/reservasalas/salas.php - script to create, edit, delete and manage rooms
* /local/reservasalas/search.php - script to search for room reservations, event name and dates
* /local/reservasalas/sedes.php - script to create, edit and delete places
* /local/reservasalas/tablas.php - file containing all tables used in the plugin
* /local/reservasalas/test_ip.php - scrip that comparing the IP of the computer in the room
* /local/reservasalas/upload.php - script to upload csv files

Capabilities types: 

* viewuser - General view of user
* blocking - permit users to lock and unlock others users
* administration - permission to manage the plugin: Create, edit, delete, general resources
* libreryrules - Permissions for administrators study rooms
* popup - permission to see popup
* overwrite - permission to overwrite reserve
* delete - permission to delete reservations
* changewith - permission to change a reservation of place
* typeroom - permission to choose the type of room you want to book (study, classes, meetings, etc)
* advancesearch - permission to make room search by date, event name and room
* bockinginfo - permission to view booking history
* upload - permission to upload information to a csv file
