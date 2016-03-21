/**
 * Created by aryekoga on 02-Mar-16.
 */
(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
	$('.modal-trigger').leanModal();
	
	$("#loginBtn").click(function(event){
        var user = $("#username").val();
        var pass = $("#password").val();

        if(getUser(user, pass) == 0) //Admin
        {
            alert("Got Admin!!!");
			loadAdminPage();
        }
        else if(getUser(user, pass) == 1) //user
        {
            alert("Got user: [" + user + "] Password: [" + pass +"]");
            loadUserPage();
        }
        else //error
        {
            alert("error");
        }

    });
	
  }); // end of document ready
})(jQuery); // end of jQuery name space


function getUser(user, pass){
    if(user === "Admin" && pass === "Admin")
    {
        return 0;
    }
    else
    {
        return 1;
    }
}

function loadAdminPage(){
	//Change page layout
	$('#parallexPic').attr("src", "Pics/background2.jpg");
	$("#index-banner").css('min-height', '200px');
	$("#cont1").empty();
	
	$("#cont1").append('<h1>Welcome [Username]');
	
	$("#cont1").append('<div class="row center" id = "row1">');
	
	$("#row1").append('<button class="usrBttns btn-floating btn-large waves-effect waves-light lime tooltipped" data-position="left" data-delay="50" data-tooltip="Add new user" type="submit" name="action" id = "addBtn"></button>');
	$("#clearBtn").append('<i class="material-icons">add</i>');
	$("#row1").append('<button class="usrBttns btn-floating btn-large waves-effect waves-light red tooltipped" data-position="top" data-delay="50" data-tooltip="Delete user" type="submit" name="action" id = "deleteBtn"></button>');
	$("#clearBtn").append('<i class="material-icons">delete</i>');
	$("#row1").append('<button class="usrBttns btn-floating btn-large waves-effect waves-light orange tooltipped" data-position="top" data-delay="50" data-tooltip="Clear your selection" type="submit" name="action" id = "clearBtn"></button>');
	$("#clearBtn").append('<i class="material-icons">clear_all</i>');
	$("#row1").append('<button class="usrBttns btn-floating btn-large waves-effect waves-light grey tooltipped" data-position="right" data-delay="50" data-tooltip="Print your selection" type="submit" name="action" id = "printBtn"></button>');
	$("#printBtn").append('<i class="material-icons">print</i>');
	$("#row1").append('<button class="usrBttns btn-floating btn-large waves-effect waves-light green tooltipped" data-position="right" data-delay="50" data-tooltip="Print your selection" type="submit" name="action" id = "submitBtn"></button>');
	$("#submitBtn").append('<i class="material-icons">send</i>');
	

	$('.tooltipped').tooltip({delay: 50});
}

function loadUserPage(){
	
	//Change page layout
	$('#parallexPic').attr("src", "Pics/background2.jpg");
	$("#index-banner").css('min-height', '200px');
	$("#cont1").empty();
	$("#cont1").append('<div class="row center" id = "row1">');
	
	$("#row1").append('<button class="usrBttns btn-floating btn-large waves-effect waves-light orange tooltipped" data-position="left" data-delay="50" data-tooltip="Clear your selection" type="submit" name="action" id = "clearBtn"></button>');
	$("#clearBtn").append('<i class="material-icons right">clear_all</i>');
	$("#row1").append('<button class="usrBttns btn-floating btn-large waves-effect waves-light red tooltipped" data-position="right" data-delay="50" data-tooltip="Print your selection" type="submit" name="action" id = "printBtn"></button>');
	$("#printBtn").append('<i class="material-icons right">print</i>');
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
    $("#3").append('<th scope="row">Nighet</th>');
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
        alert("i: " + i + "j: " +j + "arr val: " + array[i][j]);

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
}
