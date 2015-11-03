var express = require("express");
var db = require("./queries");

var router = express.Router();

// GET-requestien käsittely /persons-konstekstissa
router.get('/', function(req, res) {
    db.getAllPersons(req,res);
});
// POST-requestien käsittely /persons-konstekstissa
router.post('/', function(req, res) {
    db.saveNewPerson(req,res);
});

router.put('/', function(req, res) {
    
});

router.delete('/', function(req, res) {
    
});

module.exports = router;