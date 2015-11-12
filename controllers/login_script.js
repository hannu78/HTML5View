$(document).ready(function () {
    
    $("#loginBtn").click(loginHandler);
    $("#registerBtn").click(registerHandler);
    
});

/*
    * 
    * Funktiota kutsutaan kun login-painiketta klikataan
    *
*/
function loginHandler(event) {
    var requestData = {
        username: $("#userFld").val(),
        password: $("#pwFld").val()
    };
    localStorage.username = $("#userFld").val();
    sessionStorage.user = $("#userFld").val();
    
    // Lähetä login-request serverille
    $.ajax({
        method: "POST",
        url: "http://localhost:3000/friends/login",
        data: requestData,
        dataType: "json"
    }).done(loginResponseHandler);
}

/*
    * 
    * Funktiota kutsutaan kun register-painiketta klikataan
    *
*/
function registerHandler(event) {
    console.log("RegisterHandleria kutsuttu");
    var requestData = {
        username: $("#userFld").val(),
        password: $("#pwFld").val()
    };
    // Lähetä register-request serverille
    $.ajax({
        method: "POST",
        url: "http://localhost:3000/friends/register",
        data: requestData,
        dataType: "json"
    }).done(registerResponseHandler);
}

/*
    * 
    * Funktiota kutsutaan kun register-response saapuu
    *
*/
function registerResponseHandler(data) {
    $("#status").text(data.status);
    
}

/*
    * 
    * Funktiota kutsutaan kun login-response saapuu
    *
*/
function loginResponseHandler(data) {
    // Jos login on ok
    if (data.status === "Ok") {
        // Ladataan person.html
        $("#status").text("Kirjautuminen onnistui");
        window.location.assign("http://localhost:3000/persons.html");
        /*$.ajax({
            method: "GET",
            url: "http://localhost:3000/redirect"
        }).done(renderPersonView);*/
    } else {
        $("#status").text("Kirjautuminen epäonnistui - väärä käyttäjätunnus tai salasana");
    }
}
// Ladataan person.html
function renderPersonView(data) {
    console.log(data);
    $("html").html(data);
}