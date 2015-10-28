console.log("Here we go!!");

window.onload = function (event) {
    //"use strict";
    console.log(event);
    para1.innerHTML = "Changed from JS";
    para1.style.backgroundColor = "blue";
    var temp = document.createElement("p");
    temp.innerHTML = "New element";
    para1.appendChild(temp);
};

$(document).ready(function () {
    console.log("jQuery onload triggered");
    
    $("#head").css("background-color", "lightblue")
        .css("padding", "20px").css("border-radius", "8px");
    $("[data-dummy]").html("<p>Hello World</p>");
    
    var setting = {
        method: "GET",
        url: "http://localhost:28017/oma/person/",
        dataType: "jsonp",
        jsonp: "jsonp"
    };
    
    $.ajax(setting).done(function (data) {
        console.log(data);
        // käydään läpi kannasta haettu taulukko ja lisätään rivit html-taulukkon riveiksi
        for (i = 0; i < data.rows.length; i++) {
            var html = "<tr>" +
                       "<td>" + data.rows[i].name + "</td>" +
                       "<td>" + data.rows[i].address + "</td>" +
                       "<td>" + data.rows[i].age + "</td>" +
                       "<td>" + data.rows[i].email + "</td>" +
                       "</tr>";
            $(html).appendTo( "tbody" );
        }
        // Lisää tyhjän rivin loppuun
        $("<tr><td></td><td></td><td></td><td></td></tr>").appendTo( "tbody");
    });
});

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