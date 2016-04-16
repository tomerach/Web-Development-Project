# The Shift Organizer
![project logo (this one is taken from basecamp)](https://github.com/tomerach/Web-Development-Project/blob/master/Pics/logo.jpg)
<h5>This is the final project in our "Web Development" course.</h5>

The main purpose of the project is to make the shift organizing more efficient.

There are 2 types of users:

  1) Admin - Can set the given shifts by the clients preferences.

  2) Client - Can set his own preferences.

On the main page, you can see the given shifts (that the admin setted)

### First login
In order to login the sevice at the first time, you should use the next cardentials:<br/>
<b>Username:</b> Admin<br/>
<b>Password:</b> Admin<br/>

You will get into Admin's dashboard.

### Admin Dashboard
On Admin's dashboard, you can add new user, delete user, clean selection <br/>
and submit the given shifts (clients need to submit pereferences first). <br/>
On the table you can choose the participants on each shift - each shift will include only the clients that selected this shift. <br/>
After filing in the shifts table and submit, the new shifts will appear on the home page.

* When adding a new user you must enter username and password, all the rest is optional.<br/> (you can add both new client and admin)

### Client Dashboard
On client's dashboard you can select your pereferences by just clicking on a shift.
You can clear all selections and submit selections.


## Additional information
* All of the data is stored on local storage.
* The page swapping implemented dynamiclly with JQuery (Just one HTML page)
* All the logics implemented with JS
* All the designe implemented with [MATERIALIZE](http://materializecss.com/) and CSS3

<h5>Contents:</h5>
1) CSS - The folder contain:
* style.css - our css designe
* materialize.css - MATERIALIZE designe

2) fonts - The folder contain:
* MATERIALIZE icons
* "roboto" fonts

3) JS - The folder contain:
* materialize.js - MATERIALIZE logics
* ShiftOrganizer.js - our logics, contains all the fonctionallity and the dynamic pages swapping.

4) Pics - Used pictures

5) index.html - the main page, it' contents swapped dynamiclly by entering client\admin cardentials.


### Team
| [Tomer Achdut](https://github.com/tomerach) - tomera90@gmail.com |<br/>
| [Arye Kogan](https://github.com/aryeko) - aryekogan@gmail.com |<br/>
| [Amitay Ben-Atar](https://github.com/amitayben) - amitayben@gmail.com |



