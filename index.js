//Ladataan express muuttujaan
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
//Käynnistetään express
var app = express();

var database = require("./modules/database");
var queries = require("./modules/queries");
var person = require("./modules/person");
var user = require("./modules/user");
//====================MIDDLEWARES==================================================
// body-parser.json() middleware parses the json object from http POST request
app.use(bodyParser.urlencoded({extended: false}));
app.use(function (req, res, next) {
    //console.log(req.method);
    //console.log(req.path);
    //console.log(req.body);
    
    // Lähetä req eteenpäin pinossa
    //console.log(database.Person);
    database.myFunction;
    next();
});
//Middleware joka hakee views-hakemistosta tiedostot automaattisesti
app.use('/', express.static(path.join(__dirname, 'views')));

// CSS, lib, controllers middleware
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/lib', express.static(path.join(__dirname, 'lib')));
app.use('/controllers', express.static(path.join(__dirname, 'controllers')));
app.use('/persons', person);
app.use('/friends', user);
//====================ROUTERS======================================================
// Konteksti ="/" (root-konteksti; jos siihen tulee req, router lähettää vastauksen
// Konteksti voisi olla myös jokin polku /:n jälkeen
/* app.get("/", function (req, res) {
    res.sendfile("views/index.html");
});

app.get("/css/style.css", function (req, res) {
    res.sendfile("css/style.css");
});*/

/*app.get("/persons", function (req, res) {
    queries.getAllPersons(req,res);
});*/

app.get("/foobar", function (req, res) {
    res.send("Hello Foo, would you like a bar?");
});

//Asetetaan express kuuntelemaan porttia 3000
app.listen(3000);