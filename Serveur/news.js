var mongodb = require('mongodb');
var mongoose = require('mongoose');

News = {

// insert dans la db un article
InsertNew : function(objNew){
   mongoose.connect('mongodb://localhost/AdneomNew');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        db.collection("articles").insert(objNew, null, function (error, results) {
            if (error) throw error;
            console.log("ok");
        });
    });
},  
//affiche tous les articles 
AfficheAllNews : function(res){
    mongoose.connect('mongodb://localhost/AdneomNew');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        db.collection("articles").find().toArray(function (error, results) {
            if (error) throw error;
            console.log(results);
            res.json(results);  
                db.close();
        });
    });

},

// efface un article
RemoveNew :function(new_id){
    //Récupérer l'id
    var MongoObjectID = require("mongodb").ObjectID;
    var idToFind      = new_id;
    var objToFind     = { _id: new MongoObjectID(idToFind) };

    mongoose.connect('mongodb://localhost/AdneomNew');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        db.collection("articles").remove(objToFind,null, function (error, results) {
            if (error) throw error;
            db.close();
        });
    });

},
// ajoute un commentaire 
AjoutComment : function(id,coment){
    //Récupérer l'id
    var MongoObjectID = require("mongodb").ObjectID;
    mongoose.connect('mongodb://localhost/AdneomNew');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        db.collection("articles").update({'_id':MongoObjectID(id)},{$push:{commentaires:coment}});
        db.close();
    });
},


//ajout Vote
ajoutVote : function(id){
    //Récupérer l'id
    var MongoObjectID = require("mongodb").ObjectID;
     mongoose.connect('mongodb://localhost/AdneomNew');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        db.collection("articles").update({'_id':MongoObjectID(id)},{$inc:{votes:+1}});
        db.close();
    });
},

}



module.exports = News;