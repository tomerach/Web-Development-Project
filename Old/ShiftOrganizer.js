/**
 * Created by aryekoga on 02-Mar-16.
 */
$(document).ready (function() {
    //alert("haha");
    loadLoginPage();

});

function loadLoginPage(){
    $("main").append('<div class = "login">');
    $(".login").append('<label for = "username" >User Name</label>');
    $(".login").append('<input id = "username" type = "text"  required />');
    $(".login").append('<label for = "password" >Password</label>');
    $(".login").append('<input id = "password" type = "password"  required />');
    $(".login").append('<input id = "submit" type = "submit" value = "Authenticate"/>');

    $("#submit").click(function(event){
        var user = $("#username").val();
        var pass = $("#password").val();

        if(getUser(user, pass) == 0) //Admin
        {
            alert("Got Admin!!!");
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
}

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

function loadUserPage(){
    $("main").empty();
    $("main").append('<table class = "shift-table">');

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
