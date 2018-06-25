// server.js
// load the things we need
var express = require('express');
var app = express();
var fs = require('fs');

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function (req, res) {
    var competences = [
        { name: 'html', niveau: 3 },
        { name: 'css', niveau: 5 },
        { name: 'javascript', niveau: 10 }
    ];
    console.log(competences)
    res.render('pages/index', {
        competences: competences,
        // tagline: tagline
        
    });
});


app.get('/liste', function(req, res) {
    // var monJson = require('competences.json');
    // var monJson = JSON.parse(competences.json);
    var competences= JSON.parse(fs.readFileSync('competences.json', 'utf8'));
    // console.log(monJson.competence.html)
  
    res.render('pages/about', {
        competences: competences,
    } )
})

// app.get('/', function(req, res) {
//     res.render(__dirname + "/competences.json")
// })

// about page 
app.get('/about', function (req, res) {
    res.render('pages/about');
});

app.listen(3005);
console.log("Force et honneur");
