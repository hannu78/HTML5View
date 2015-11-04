console.log("Here we go!!");

window.onload = function (event) {
    //"use strict";
    console.log(event);
    //para1.innerHTML = "Changed from JS";
    //para1.style.backgroundColor = "blue";
    //var temp = document.createElement("p");
    //temp.innerHTML = "New element";
    //para1.appendChild(temp);
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

$(document).ready(function () {
    console.log("jQuery onload triggered");
    
    $("#head").css("background-color", "lightblue")
        .css("padding", "20px").css("border-radius", "8px");
   // $("[data-dummy]").html("<p>Hello World</p>");
    
    var setting = {
        method: "GET",
        //url: "http://localhost:28017/oma/person/",
        url: "http://localhost:3000/persons",
        dataType: "json"
        //dataType: "jsonp",
        //jsonp: "jsonp"
    };
    
    $.ajax(setting).done(function (data) {
        console.log(data);
        // haetaan kaikki avaimet (attribuuttien nimet) json-objektista
        console.log(Object.keys(data[0]));
        // Jos dataa on tarjolla
        if (data.length > 0) {
            // Luodaan taulukon otsikkorivi kannasta saatujen avainten perusteella
            var header = "<tr>";
            var keys = Object.keys(data[0]);
            // Lisätään avaimet otsikkoriville isolla alkukirjaimella
            for (var i = 1; i < keys.length; i++) {
                header += "<th>" + capitalizeFirstLetter(keys[i]) + "</th>";
                var $i = keys[i];
            } 
            header += "<th></th>";
            $(header).appendTo("thead");
            // käydään läpi kannasta haettu taulukko ja lisätään rivit html-taulukkon riveiksi
            for (var i = 0; i < data.length; i++) {
                // koita keksiä keino käyttää dynaamisia avaimia hardcodattujen sijaan (variable expansion)
                var html = "<tr>" +
                        "<td>" + data[i].name + "</td>" +
                        "<td>" + data[i].address + "</td>" +
                        "<td>" + data[i].age + "</td>" +
                        "<td>" + data[i].email + "</td>" +
                        "<td><input type='button' id=" + data[i]._id + " value='Muokkaa'/></td>" +
                        "</tr>";
                $(html).appendTo("tbody");
            }
            // Lisää tyhjän rivin loppuun
            $("<tr><td></td><td></td><td></td><td></td><td></td></tr>").appendTo("tbody");
        }
        // Lisää kaikkiin mallin button-tyyppisiin objekteihin tapahtumakäsittelijä
        $("[type=button]").click(function(click_data){
            console.log("Klikattu:" + click_data);
            for (var i= 0; i< data.length; i++) {
                //tarkista, täsmääkö button id ja person _id toisiinsa
                if (data[i]._id == click_data.currentTarget.id) {
                    buildModifyUI(data[i]);
                    break;
                } 
            }
            
        });
    });
});

function buildModifyUI(person_data) {
    var html;
    console.log(person_data.name);
    html = "<p>Päivitä tai Poista käyttäjän tiedot.</p><div></div><div></div>" + 
           "<input id='name' type='text' value='" + person_data.name + "'</input>" +
           "<input id='address' type ='text'value='" + person_data.address + "'</input>" +
           "<input id='age' type ='number'value='" + person_data.age + "'</input>" +
           "<input id='email' type ='text'value='" + person_data.email + "'</input>" + 
           "<input type='button' id='update' value='Päivitä'/>" +
           "<input type='button' id='delete' value='Poista'/>";
        
    $("body").html(html);
    
    $("#delete").click(function() {
       $.ajax({
           method:'DELETE',
           url:'http://localhost:3000/persons/id=' + person_data._id
       }).done(function(data){location.reload(true)}); 
    });
    
    $("#update").click(function() {
        console.log("Update pressed");
        var temp = {
            id:person_data._id, 
            name: $("#name").val(),
            address: $("#address").val(),
            age: $("#age").val(),
            email: $("#email").val()
        };
        $.ajax({
           method: 'PUT',
           url: 'http://localhost:3000/persons/',
           data: temp
       }).done(function(data){location.reload(true)}); 
    });
}

function domReady(event) {
    "use strict";
    return 2;
}

//window.onload = domReady;

function someFunction(nimi) {
    "use strict";
    console.log(nimi);
}

someFunction();
someFunction("Hannu");