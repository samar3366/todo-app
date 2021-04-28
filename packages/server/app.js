var express = require("express"),
  http = require("http"),
  passport = require("passport"),
  util = require("util"),
  LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var auth = require("./auth.js");
var todo = require("./todo.js");

var app = express();

app.use(bodyParser.json());
app.use(cookieParser("quicksrctodo"));
app.use(passport.initialize());
app.use(passport.session());

var LINKEDIN_CLIENT_ID = "8657jhi4fw8xyh";
var LINKEDIN_CLIENT_SECRET = "TaRRVXQ8gUXHlvcY";

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

passport.use(
  new LinkedInStrategy(
    {
      clientID: LINKEDIN_CLIENT_ID,
      clientSecret: LINKEDIN_CLIENT_SECRET,
      callbackURL: "https://c5d8a916cd85.ngrok.io/auth/linkedin/callback",
    },
    function (token, tokenSecret, profile, done) {
      // Get user from database or create.
      console.log(profile, "profile");
      return done(null, profile);
    }
  )
);

app.use("/auth", auth);
app.use("/todo", todo);

app.listen(8080, () => {
  console.log(`server app listening at 8080`);
});
