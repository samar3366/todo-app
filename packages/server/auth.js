var express = require("express");
var router = express.Router();

var passport = require("passport");

router.get("/linkedin", passport.authenticate("linkedin"));

router.get(
  "/linkedin/callback",
  passport.authenticate("linkedin", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "http://locahost:8080/auth/linkedin",
  })
);

module.exports = router;
