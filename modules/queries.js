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