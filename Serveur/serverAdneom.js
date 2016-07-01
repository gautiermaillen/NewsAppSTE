var mongodb = require('mongodb');
var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
var http = require('http');
var server = http.createServer(app);
var news = require("./news.js");
app.use(express.static('resources'));
//EXPRESS :

app.listen(process.env.PORT || 8080);


app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html" );
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//affichage de toutes les news
app.get('/news/', function(req, res) {
    news.AfficheAllNews(res);
});


//ajouter un article
app.put('/news/', function (req, res) {
    var objNew = req.body;
    news.InsertNew(objNew);
    //console.log(news);
    res.send('Got a PUT request at /news/');
});


//ajout d'un commentaire 
app.put('/news/comments/:id', function (req, res) {
             coment = req.body.commentaires;
             console.log("server : " + req.params.id);
             var id = req.params.id;
             news.AjoutComment(id,coment);
             res.send('Got a PUT request at /news/comments');
});


//suppression d'un article spécifique
app.delete('/news/:id', function(req, res) {    
    news.RemoveNew(id);
    //méthode json envoie une réponse - avec le content-type correct - qui est le paramètre converti en JSON 
    res.json(true);
});

//ajout vote
app.put('/news/vote/:id', function(req,res){
    var id = req.params.id;
    news.ajoutVote(id); 
    res.send('Got a PUT request at /news/comments');   
});


app.get('*', function(req, res, next) {
  var err = new Error();
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
    if(err.status !== 404) {
        return next();
    }

    res.status(404);
    //res.send(err.message || '** Une erreur 404 **');
    res.sendFile( __dirname + "/default.html" );
    
});



