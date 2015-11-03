var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/oma', connectionStatus);

// Connection callback for error and ok cases
function connectionStatus(err, ok) {
    if (err) {
        console.log(err.message);
    } else {
        console.log("We're connected!");
    }
}

var Person = mongoose.model('Person', {
                                        name: String,
                                        address: String,
                                        age: {type: Number},
                                        email: { type: String, default: "Not set" }
                                        },
                            'person');

//var Matti = new Person({ name: "Matti Meikäläinen", address: "Mattilanraitti 123", age: 35 });
//console.log(Matti.name);

//exports-objektin avulla data voidaan paljastaa muille moduleille 
//exports.Matti = Matti;
exports.Person = Person;

exports.myFunction = function() {
    console.log("This");
}

/*Matti.save(function (err, ok) {
  if (err) return console.error(err);
  console.log(err.message);
});*/