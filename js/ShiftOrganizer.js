var employeeID = getEmployeeID();


function getEmployeeID(){
	if(localStorage.getItem("numberOfEmployees") == null){
		localStorage.setItem("numberOfEmployees", "0");
	return 0;
	}
	return parseInt(localStorage.getItem("numberOfEmployees"));
}

(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
	
	$('.modal-trigger').leanModal({
		  dismissible: true, // Modal can be dismissed by clicking outside of the modal
		  opacity: .5, // Opacity of modal background
		  in_duration: 300, // Transition in duration
		  out_duration: 200, // Transition out duration
		  ready: function() { }, // Callback for Modal open
		  complete: function() { } // Callback for Modal close
		}
	  );
	
	loadShiftsTable();	
	$("#disconnect").hide();
	$("#logintoService").click(function(){
		$("#username").focus();
	});
	$("#loginBtn").click(function(event){
		
        var user = $("#username").val();
        var pass = $("#password").val();
		
		var userType = getUser(user, pass);
		
        if(userType == 0) //Admin
        {
			$("#modal1").closeModal();
			loadAdminPage(user);
        }
        else if(userType == 1) //user
        {	
			$("#modal1").closeModal();
            loadUserPage(user);
        }
        else //error
        {	
			//$("#modal1").closeModal();
			//sleep(1);
			//$("#modal1").openModal();
        }
    });

	
  }); // end of document ready
})(jQuery); // end of jQuery name space

function loadShiftsTable(){
	$("#dataZone").append('<h3 class="teal-text text-lighten-1"><b><center>UP COMING SHIFTS</center></b></h3>');
	$("#dataZone").append('<table class = "shift-table">');

    //Table Head
    $(".shift-table").append('<thead class="thead-inverse">');
    $(".thead-inverse").append('<tr id = "table-title-main">');
    $("#table-title-main").append('<th><i>Shift</i></th>');
    $("#table-title-main").append('<th>Sunday</th>');
    $("#table-title-main").append('<th>Monday</th>');
    $("#table-title-main").append('<th>Tuesday</th>');
    $("#table-title-main").append('<th>Wednesday</th>');
    $("#table-title-main").append('<th>Thursday</th>');
    $("#table-title-main").append('<th>Friday</th>');
    $("#table-title-main").append('<th>Saturday</th>');

    //Table Body
    $(".shift-table").append('<tbody id="tbot">');
    $("#tbot").append('<tr id = "1m">');
    $("#1m").append('<th scope="row">Morning</th>');
    $("#1m").append('<td id = "00w"></td>');
    $("#1m").append('<td id = "01w"></td>');
    $("#1m").append('<td id = "02w"></td>');
    $("#1m").append('<td id = "03w"></td>');
    $("#1m").append('<td id = "04w"></td>');
    $("#1m").append('<td id = "05w"></td>');
    $("#1m").append('<td id = "06w"></td>');
    $("#tbot").append('<tr id = "2m">');
    $("#2m").append('<th scope="row">Noon</th>');
    $("#2m").append('<td id = "10w"></td>');
    $("#2m").append('<td id = "11w"></td>');
    $("#2m").append('<td id = "12w"></td>');
    $("#2m").append('<td id = "13w"></td>');
    $("#2m").append('<td id = "14w"></td>');
    $("#2m").append('<td id = "15w"></td>');
    $("#2m").append('<td id = "16w"></td>');
    $("#tbot").append('<tr id = "3m">');
    $("#3m").append('<th scope="row">Night</th>');
    $("#3m").append('<td id = "20w"></td>');
    $("#3m").append('<td id = "21w"></td>');
    $("#3m").append('<td id = "22w"></td>');
    $("#3m").append('<td id = "23w"></td>');
    $("#3m").append('<td id = "24w"></td>');
    $("#3m").append('<td id = "25w"></td>');
    $("#3m").append('<td id = "26w"></td>');
		
	if(JSON.parse(localStorage.getItem('Shifts')) === null) //validate that the admin setted the shifts.
		return;
		
	for(var i = 0; i<7; i++)
	{
		for(var j = 0; j<3; j++)
			addEmployees(i,j);
	}
	
	function addEmployees(i,j){
		
		var cell_ID = ""+j+i;
		$("#" + cell_ID + "w").append('<div id="'+ cell_ID +'p" class="input-field col s3">');
		
		var obj = JSON.parse(localStorage.getItem('Shifts'));
		var length = obj.givenShifts[j][i].length;
		for(var k = 0; k< length; k++)
		{
			console.log("["+j+"][" +i +"]: " +obj.givenShifts[j][i][k]);

			appendOption(cell_ID, obj.givenShifts[j][i][k]);
		}
		
		function appendOption(cell, name){
			$("#"+cell+"p").append(name+'</br>');
			//console.log("appending "+name);
		}
	}

}
function getUser(user, pass){
    if(user === "Admin" && pass === "Admin")
    {
        return 0;
    }
    else
    {	
	for(var i=1; i<=employeeID; i++){
		if(JSON.parse(localStorage.getItem(i.toString())) === null)
			continue;
		if(JSON.parse(localStorage.getItem(i.toString())).userName == user){
			if(JSON.parse(localStorage.getItem(i.toString())).password == pass){
				if(JSON.parse(localStorage.getItem(i.toString())).permissions == "on")
					return 0;
				return 1;
			}
			$('#password').removeClass('valid');
			$('#password').addClass('invalid');
			$("#password").val("");
			$("#password").focus();
			//alert("Wrong password! please try again.");
			
			return -1;
		}
	}
	$("#username").removeClass('valid');
	$("#username").addClass('invalid');
	$("#username").val("");
	$("#username").focus();
	//alert("You are not registered. Please contact the Admin or try again.");
	return -1;
    }
}

function loadAdminPage(user){
	
	$("#disconnect").show();
	//Change page layout
	$('#parallexPic').attr("src", "Pics/background2.jpg");
	$("#index-banner").css('min-height', '200px');
	$("#cont1").empty();
	
	$("#cont1").append('<h1>Welcome ' + user);
	
	$("#cont1").append('<div class="row center" id = "row1">');
	
	$("#row1").append('<button class="usrBttns btn-floating btn-large waves-effect waves-light lime tooltipped modal-trigger2" href="#modal2" data-position="left" data-delay="50" data-tooltip="Add new user" type="submit" name="action" id = "addBtn"></button>');
	$("#addBtn").append('<i class="material-icons">add</i>');
	$("#row1").append('<button class="usrBttns btn-floating btn-large waves-effect waves-light red tooltipped modal-trigger3" href="#modal3" data-position="top" data-delay="50" data-tooltip="Delete user" type="submit" name="action" id = "deleteBtn"></button>');
	$("#deleteBtn").append('<i class="material-icons">delete</i>');
	$("#row1").append('<button class="usrBttns btn-floating btn-large waves-effect waves-light orange tooltipped" data-position="right" data-delay="50" data-tooltip="Clear your selection" type="submit" name="action" id = "clearBtn"></button>');
	$("#clearBtn").append('<i class="material-icons">clear_all</i>');
	/*
	$("#row1").append('<button class="usrBttns btn-floating btn-large waves-effect waves-light grey tooltipped" data-position="right" data-delay="50" data-tooltip="Print your selection" type="submit" name="action" id = "printBtn"></button>');
	$("#printBtn").append('<i class="material-icons">print</i>');
	*/
	$("#row1").append('<button class="usrBttns btn-floating btn-large waves-effect waves-light green tooltipped" data-position="right" data-delay="50" data-tooltip="Submit your selection" type="submit" name="action" id = "submitBtn"></button>');
	$("#submitBtn").append('<i class="material-icons">send</i>');
	

	$('.modal-trigger2').leanModal();
	$('.modal-trigger3').leanModal();
	
	$("#addBtn").click(function(){
		$("#addUserName").focus();
	});
	
	$("#deleteBtn").click(function(){
		$("#delName").focus();
	});
	
	$("#loginAddBtn").click(function(event){
		
		if($("#addUserName").val() === ""){
			$('#addUserName').removeClass('valid');
			$('#addUserName').addClass('invalid');
			$("#addUserName").val("");
			$("#addUserName").focus();
			//$('#modal2').openModal();

			//alert("User exists, please choose another username!");
			return;
		}	
		for(var i=1; i<=employeeID; i++)
		{
			if(JSON.parse(localStorage.getItem(i.toString())) === null)
				continue;
				
			if(JSON.parse(localStorage.getItem(i.toString())).userName == $("#addUserName").val()){
				$('#addUserName').removeClass('valid');
				$('#addUserName').addClass('invalid');
				$("#addUserName").val("");
				$("#addUserName").focus();
				//$('#modal2').openModal();

				//alert("User exists, please choose another username!");
				return;
			}		
		}
		if($("#choosePass").val() === "")
		{
			$('#choosePass').removeClass('valid');
			$('#choosePass').addClass('invalid');
			$("#choosePass").val("");
			$("#choosePass").focus();
			//$('#modal2').openModal();
			return;
		}	
		
		var obj = new Object();
		obj.userName = $("#addUserName").val();
		obj.password = $("#choosePass").val();	
		obj.telephone = $("#icon_telephone").val();
		obj.permissions = $('#permissions:checked').val();
		obj.email = $("#email").val();
		Materialize.toast("Employee Registered!!", 4000)
		//alert("Employee Registered!!");
		employeeID++;
		localStorage.setItem(employeeID.toString(), JSON.stringify(obj));
		localStorage.setItem("numberOfEmployees", employeeID.toString());
						$("#addUserName").val("");
		$("#modal2").closeModal();
	});

	$("#delBtn").click(function(event){
		var userToDel = $("#delName").val();
		for(var i=1; i<=employeeID; i++){
			if(JSON.parse(localStorage.getItem(i.toString())) === null)
				continue;
			if(JSON.parse(localStorage.getItem(i.toString())).userName == userToDel){
				localStorage.removeItem(i.toString());
				for(var j=(i+1); j<= employeeID; j++)
				{
					var tmpItem = localStorage.getItem(j.toString());
					localStorage.setItem(i.toString(), tmpItem);
					i++;
				}
				localStorage.removeItem(i.toString());
				employeeID--;
				localStorage.setItem("numberOfEmployees", employeeID.toString());
				Materialize.toast("User deleted successfully!", 4000)
				//alert("User deleted successfully!");
				$("#modal3").closeModal();
				return;
			}
			$('#delName').removeClass('valid');
			$('#delName').addClass('invalid');
			$("#delName").val("");
			$("#delName").focus();
		}
			//$('#modal3').openModal();
		//alert("User doesn't exists, please choose another username and try again!");		
	});
	
	$("#dataZone").empty();
    $("#dataZone").append('<table class = "shift-table">');

    //Table Head
    $(".shift-table").append('<thead class="thead-inverse">');
    $(".thead-inverse").append('<tr id = "table-title">');
    $("#table-title").append('<th><i>Shift</i></th>');
    $("#table-title").append('<th>Sunday</th>');
    $("#table-title").append('<th>Monday</th>');
    $("#table-title").append('<th>Tuesday</th>');
    $("#table-title").append('<th>Wednesday</th>');
    $("#table-title").append('<th>Thursday</th>');
    $("#table-title").append('<th>Friday</th>');
    $("#table-title").append('<th>Saturday</th>');

    //Table Body
    $(".shift-table").append('<tbody id="tbot">');
    $("#tbot").append('<tr id = "1">');
    $("#1").append('<th scope="row">Morning</th>');
    $("#1").append('<td id = "00"></td>');
    $("#1").append('<td id = "01"></td>');
    $("#1").append('<td id = "02"></td>');
    $("#1").append('<td id = "03"></td>');
    $("#1").append('<td id = "04"></td>');
    $("#1").append('<td id = "05"></td>');
    $("#1").append('<td id = "06"></td>');
    $("#tbot").append('<tr id = "2">');
    $("#2").append('<th scope="row">Noon</th>');
    $("#2").append('<td id = "10"></td>');
    $("#2").append('<td id = "11"></td>');
    $("#2").append('<td id = "12"></td>');
    $("#2").append('<td id = "13"></td>');
    $("#2").append('<td id = "14"></td>');
    $("#2").append('<td id = "15"></td>');
    $("#2").append('<td id = "16"></td>');
    $("#tbot").append('<tr id = "3">');
    $("#3").append('<th scope="row">Night</th>');
    $("#3").append('<td id = "20"></td>');
    $("#3").append('<td id = "21"></td>');
    $("#3").append('<td id = "22"></td>');
    $("#3").append('<td id = "23"></td>');
    $("#3").append('<td id = "24"></td>');
    $("#3").append('<td id = "25"></td>');
    $("#3").append('<td id = "26"></td>');
	for(var i = 0; i<7; i++)
	{
		for(var j = 0; j<3; j++)
			addOptions(i,j);
	}
	
	$('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      //constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      //alignment: 'center' // Displays dropdown with edge aligned to the left of button
    });
	$('select').material_select();
	
	$("#submitBtn").click(function(event){
		if(localStorage.getItem("Shifts"))
			localStorage.removeItem("Shifts");
	
		var obj = new Object();
		obj.givenShifts = new Array(3);
		obj.givenShifts[0] = new Array(7);
		obj.givenShifts[1] = new Array(7);
		obj.givenShifts[2] = new Array(7);
		
		for(var i = 0; i<7; i++)
		{
			obj.givenShifts[0][i] = [];
			obj.givenShifts[1][i] = [];
			obj.givenShifts[2][i] = [];
		}
		
		for(var i = 0; i<3; i++)
		{
			for(var j = 0; j<7; j++)
			{
				//Selecting the related <select> to <td>
				$('#'+i+j+'s :selected').each(function(k, selected){
						if($(selected).text() !== "")
							obj.givenShifts[i][j].push($(selected).text());
				});
				//alert(obj.givenShifts[i][j] + " number of elements: " + obj.givenShifts[i][j].length);
			}
		}
		
		localStorage.setItem("Shifts", JSON.stringify(obj));
		Materialize.toast("Thank you", 4000)
		//alert("Thank you");
	});
	
	$("#clearBtn").click(function(){
		$('.tooltipped').tooltip('remove');
		loadAdminPage(user);
	});
	
	$('.tooltipped').tooltip({delay: 50});
}

function addOptions(i,j){
	var cell_ID = ""+j+i;
	$("#" + cell_ID).append('<div id="'+ cell_ID +'d" class="input-field col s3">');
	$("#"+cell_ID+"d").append('<select multiple id="'+ cell_ID +'s">');
	$("#"+cell_ID+"s").append('<option value="" disabled selected></option>');
	console.log(employeeID);
	for(var k=1; k <= employeeID; k++)
	{
		if(JSON.parse(localStorage.getItem(k.toString())) === null)
			continue;
			
		var obj = JSON.parse(localStorage.getItem(k.toString()));
		console.log(JSON.stringify(obj));
		
		if(obj.shifts !== undefined)
		{
			console.log("in shifts");
			var day = returnDay(i);
			var name = obj.userName;
			console.log(name);
			switch(j)
			{
				case 0:
					console.log("DAY IS: "+day);
					if($.inArray(day, obj.shifts.morning) > -1)
						appendOption(cell_ID, name);
					break;
				case 1:
					if($.inArray(day, obj.shifts.noon) > -1)
						appendOption(cell_ID, name);
					break;
				case 2:
					if($.inArray(day, obj.shifts.evening) > -1)
						appendOption(cell_ID, name);
					break;
			}
		}
	}
	function appendOption(cell, name){
		var counter = $("#"+cell+"s").children().length + 1;
		$("#"+cell+"s").append('<option value="'+counter+'">'+name+'</option>');
		console.log("appending "+name);
	}
}


function loadUserPage(user){
	
	$("#disconnect").show();
	//Change page layout
	$('#parallexPic').attr("src", "Pics/background2.jpg");
	$("#index-banner").css('min-height', '200px');
	$("#cont1").empty();
	
	$("#cont1").append('<h1>Welcome ' + user);
	
	$("#cont1").append('<div class="row center" id = "row1">');
	
	$("#row1").append('<button class="usrBttns btn-floating btn-large waves-effect waves-light orange tooltipped" data-position="left" data-delay="50" data-tooltip="Clear your selection" type="submit" name="action" id = "clearBtn"></button>');
	$("#clearBtn").append('<i class="material-icons right">clear_all</i>');
	/*
	$("#row1").append('<button class="usrBttns btn-floating btn-large waves-effect waves-light red tooltipped" data-position="right" data-delay="50" data-tooltip="Print your selection" type="submit" name="action" id = "printBtn"></button>');
	$("#printBtn").append('<i class="material-icons right">print</i>');
	*/
	$("#row1").append('<button class="usrBttns btn-floating btn-large waves-effect waves-light green tooltipped" data-position="right" data-delay="50" data-tooltip="Submit your selection" type="submit" name="action" id = "submitBtn"></button>');
	$("#submitBtn").append('<i class="material-icons">send</i>');

	$('.tooltipped').tooltip({delay: 50});
	
	
    $("#dataZone").empty();
    $("#dataZone").append('<table class = "shift-table">');

    //Table Head
    $(".shift-table").append('<thead class="thead-inverse">');
    $(".thead-inverse").append('<tr id = "table-title">');
    $("#table-title").append('<th><i>Shift</i></th>');
    $("#table-title").append('<th>Sunday</th>');
    $("#table-title").append('<th>Monday</th>');
    $("#table-title").append('<th>Tuesday</th>');
    $("#table-title").append('<th>Wednesday</th>');
    $("#table-title").append('<th>Thursday</th>');
    $("#table-title").append('<th>Friday</th>');
    $("#table-title").append('<th>Saturday</th>');

    //Table Body
    $(".shift-table").append('<tbody id="tbot">');
    $("#tbot").append('<tr id = "1">');
    $("#1").append('<th scope="row">Morning</th>');
    $("#1").append('<td id = "00"></td>');
    $("#1").append('<td id = "01"></td>');
    $("#1").append('<td id = "02"></td>');
    $("#1").append('<td id = "03"></td>');
    $("#1").append('<td id = "04"></td>');
    $("#1").append('<td id = "05"></td>');
    $("#1").append('<td id = "06"></td>');
    $("#tbot").append('<tr id = "2">');
    $("#2").append('<th scope="row">Noon</th>');
    $("#2").append('<td id = "10"></td>');
    $("#2").append('<td id = "11"></td>');
    $("#2").append('<td id = "12"></td>');
    $("#2").append('<td id = "13"></td>');
    $("#2").append('<td id = "14"></td>');
    $("#2").append('<td id = "15"></td>');
    $("#2").append('<td id = "16"></td>');
    $("#tbot").append('<tr id = "3">');
    $("#3").append('<th scope="row">Night</th>');
    $("#3").append('<td id = "20"></td>');
    $("#3").append('<td id = "21"></td>');
    $("#3").append('<td id = "22"></td>');
    $("#3").append('<td id = "23"></td>');
    $("#3").append('<td id = "24"></td>');
    $("#3").append('<td id = "25"></td>');
    $("#3").append('<td id = "26"></td>');

    var array = new Array(3);
    for (var i = 0; i < 3; i++) {
        array[i] = new Array(7);
        for(var j = 0; j<7; j++)
            array[i][j] = 0;
    }

    //Add event listener
    $('td').click(function() {

        var i = parseInt($(this).attr('id'));
        var j = i % 10;
        i /= 10;
        i = Math.floor(i);

        //color of the setted shifts
        if(array[i][j] == 0){
            array[i][j] = 1;
            if(i == 0)
                $(this).css('backgroundColor', '#111111');
            else if (i == 1)
                $(this).css('backgroundColor', '#555555');
            else
                $(this).css('backgroundColor', '#999999');

            }
        else {
            array[i][j] = 0;
            $(this).removeAttr("style");
        }
	});


	$("#clearBtn").click(function(event){
		clearTable();
	});
/*
	$("#printBtn").click(function(event){
		var table = $('#dataZone');
		alert("Printing");
		//PrintElem(table);
		
		var dataZ = document.getElementById("dataZone");
		newWindow = window.open("");
		newWindow.document.write(dataZ.outerHTML);
		newWindow.print();
		newWindow.close();
		
		
		alert("END");
	});
	*/
	$('#submitBtn').click(function(event){
		var found = false;
		var obj;
		var foundID;
		for(var i=1; i<=employeeID; i++)
		{
		
			if(JSON.parse(localStorage.getItem(i.toString())).userName === user){
				
				obj = JSON.parse(localStorage.getItem(i.toString()));
				if(obj.shifts == undefined){
					obj.shifts = new Object();
					obj.shifts.morning = [];
					obj.shifts.noon = [];
					obj.shifts.evening = [];
				}
				else{
					emptyPreviousShifts(obj);
				}
				foundID = i;
				found = true;
				break;
			}
		}
		
		if(found)
		{
		
			for (var i = 0; i < 3; i++) {
				for(var j = 0; j<7; j++){
					if(i == 0)
						if(array[i][j])
							obj.shifts.morning.push(returnDay(j));
					if(i == 1)
						if(array[i][j])
							obj.shifts.noon.push(returnDay(j));
					if(i == 2)
						if(array[i][j])
							obj.shifts.evening.push(returnDay(j));
				}
			}
			localStorage.setItem(foundID.toString(), JSON.stringify(obj));
		}
		Materialize.toast("Thank you for your shifts. You can logout now!", 4000)
		//alert("Thank you for your shifts. You can exit the browser now!");
		//clearTable();
	});

	function clearTable()
	{
		for (var i = 0; i < 3; i++) {
			for(var j = 0; j<7; j++){
				array[i][j] = 0;
				$('td').removeAttr("style");
			}
		}
	}
}

function emptyPreviousShifts(obj){
		while(obj.shifts.morning.length != 0)
			obj.shifts.morning.pop();
		while(obj.shifts.noon.length != 0)
			obj.shifts.noon.pop();
		while(obj.shifts.evening.length != 0)
			obj.shifts.evening.pop();
}

function returnDay(index)
{
	switch(index){
		case 0:
		 return "Sunday";
		 break;
		case 1:
		 return "Monday";
		 break; 
		case 2:
		 return "Tuesday";
		 break;
		case 3:
		 return "Wednesday";
		 break; 
		case 4:
		 return "Thursday";
		 break;
		case 5:
		 return "Friday";
		 break; 
		case 6:
		 return "Saturday";
		 break;
	}
	
}
