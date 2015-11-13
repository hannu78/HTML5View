/*
    *
    * This file is a router for User resource
    * Version 0.0.1
    * Author Hannu Lisko
    * Date: 12112015
    * Description: File created
    *
*/

var express = require("express");
var db = require("./queries");

var router = express.Router();

// GET-requestien käsittely /friends-kontekstissa
router.get("/:username", function (req, res) {
   // console.log("Here!");
    db.getFriendsByUsername(req, res);
});

// POST-requestien käsittely /friends-kontekstissa
// Tämä router käsittelee login-requestit
router.post("/login", function (req, res) {
    db.loginFriend(req, res);
});
// Tämä router käsittelee register-requestit
router.post("/register", function (req, res) {
    db.registerFriend(req, res);
});

module.exports = router;