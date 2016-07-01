var mongodb = require('mongodb');
var mongoose = require('mongoose');

console.log("coucou");


// insert dans la db 
function insertNew(objNew){
   mongoose.connect('mongodb://localhost/AdneomNew');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        db.collection("articles").insert(objNew, null, function (error, results) {
            if (error) throw error;
            console.log("ok");
        });
    });
}  
// affiche tout
function afficherAllNews(res){
    console.log("ok");
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

}  

function afficherNew(new_id){
    //Récupérer l'id
    var MongoObjectID = require("mongodb").ObjectID;
    var idToFind      = new_id;
    var objToFind     = { _id: new MongoObjectID(idToFind) };

    mongodb.connect("http://localhost/AdneomNew", function(error, db) {
        if (error) return funcCallback(error);

            //Afficher la new
            db.collection("news").find(objToFind).toArray(function(err, results){
            if (error) throw error;

            return results;

            //Close connection
            db.close();
        });
    });         
}

/*function updateNew(new_id,titre,lien){

    //Récupérer l'id
    var MongoObjectID = require("mongodb").ObjectID;
    var idToFind      = new_id;
    var objToFind     = { _id: new MongoObjectID(idToFind) };

    mongodb.connect("mongodb://localhost/AdneomNew", function(error, db) {
       
    });
}*/

function removeNew(new_id){

    //Récupérer l'id
    var MongoObjectID = require("mongodb").ObjectID;
    var idToFind      = new_id;
    var objToFind     = { _id: new MongoObjectID(idToFind) };

    mongodb.connect("mongodb://localhost/AdneomNew", function(error, db) {
        if (error) return funcCallback(error);

        db.collection("news").remove(objToFind, null, function(error, result) {
            if (error) throw error;   

            //Close connection
            db.close();
        });
    });
}

//insertNew(objNew);

//afficherNew(new_id);
//removeNew(new_id);