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
// Poistetaan henkilön tiedot kannasta
exports.deletePerson = function(req,res) {
    //req.params.id on muotoa id=xxxx, jolloin pitää leikata id= pois
    var id = req.body.split("=")[1];
    db.Person.remove({_id: id}, function (err) {
       if (err) {
           res.send(err.message);
       } else {
           res.send("Person removed succesfully!");
       }
    });
}
// Päivitetään tiedot
exports.updatePerson = function(req,res) {
    var updateData = {
        name:req.body.name,
        address:req.body.address,
        age:req.body.age,
        email:req.body.email
    };
    db.Person.update({id:req.body._id}, updateData, function(err) {
        console.log("Here!" + req.body.name);
        if (err) {
            res.send(err.message);
        } else {
            res.send("Person updated succesfully!");
        }
    });
}