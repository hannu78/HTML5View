var db = require("./database");

// getAllPersons hakee kaikki dokumentit person-collectionista
// exports tuo sen käytettäväksi muihin moduleihin
exports.getAllPersons = function(req, res) {
    db.Person.find(function(err, data) {
       if (err) {
           console.log(err.message);
           res.send("Error in database");
           } else {
               res.send(data);
           }
    });
}
// saveNewPerson tallettaa uuden henkilön tiedot person-kokoelmaan
exports.saveNewPerson = function(req, res) {
    var personTemp = new db.Person(req.body);
    //Tallennetaan kantaan
    personTemp.save(function(err,ok) {
       if (err) {
            res.send(err.message);
       } else {
           res.send("Person added succesfully!");
       }
    });
}