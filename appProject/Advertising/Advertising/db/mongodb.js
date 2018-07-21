/**
 * The db of the messages .
 * save the data in mongo db.
 */

var images1 = ["adidas.png"];
var textArray1 = ["Adidas AG is a multinational corporation, founded and headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories. It is the largest sportswear manufacturer in Europe, and the second largest in the world"];

var images2 =["decathlon.jpg"];
var textArray2 = ["Decathlon S.A. is a French sporting goods retailer. It is the largest sporting goods retailer in the world.Decathlon started with a store in Lille, France in 1976, founded by Michel Leclercq. It started to expand abroad a decade later, to Germany in 1986, Spain in 1992, Italy in 1998, Portugal, the United Kingdom in 1999, China in 2003, India in 2009, Hong Kong in 2013, Malaysia in 2016 and Southeast Asia in 2012 and South Africa, Philippines in 2017 and Australia in 2018. Today, there are more than 1100 stores in 38 countries. The company employs more than 78,000 staff from 80 different nationalities."];

var images3 =["mizuno.png"];
var textArray3 = ["Mizuno Corporation is a Japanese sports equipment and sportswear company, founded in Osaka in 1906 by Rihachi Mizuno. Today, Mizuno is a global corporation which makes a wide variety of sports equipment and sportswear, for golf, tennis, baseball, volleyball, football, running, rugby, skiing, cycling, judo, table tennis, badminton, boxing and athletics."];

var images4 =["newbalance.png"];
var textArray4 = ["New Balance Athletics, Inc. (NB), best known as simply New Balance, is an American multinational corporation based in the Brighton neighborhood of Boston, Massachusetts. The company was founded in 1906 as the 'New Balance Arch Support Company' and is one of the world's major sports footwear manufacturers."];

var images5 =["nike.png"];
var textArray5 = ["Nike, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services. The company is headquartered near Beaverton, Oregon, in the Portland metropolitan area. It is the world's largest supplier of athletic shoes and apparel and a major manufacturer of sports equipment."];


var daysAndHours1=[{"day":1,"startHour":8,"endHour":22},{"day":2,"startHour":8,"endHour":22},{"day":3,"startHour":8,"endHour":22},{"day":4,"startHour":8,"endHour":22},{"day":5,"startHour":8,"endHour":22},{"day":1,"startHour":6,"endHour":22},{"day":7,"startHour":8,"endHour":22}];
var daysAndHours2=[{"day":1,"startHour":8,"endHour":22},{"day":2,"startHour":8,"endHour":22},{"day":3,"startHour":8,"endHour":22},{"day":4,"startHour":8,"endHour":22},{"day":5,"startHour":8,"endHour":22},{"day":1,"startHour":6,"endHour":22},{"day":7,"startHour":8,"endHour":22}];
var daysAndHours3=[{"day":1,"startHour":8,"endHour":22},{"day":2,"startHour":8,"endHour":22},{"day":3,"startHour":8,"endHour":22},{"day":4,"startHour":8,"endHour":22},{"day":5,"startHour":8,"endHour":22},{"day":1,"startHour":6,"endHour":22},{"day":7,"startHour":8,"endHour":22}];
var daysAndHours4=[{"day":1,"startHour":8,"endHour":22},{"day":2,"startHour":8,"endHour":22},{"day":3,"startHour":8,"endHour":22},{"day":4,"startHour":8,"endHour":22},{"day":5,"startHour":8,"endHour":22},{"day":1,"startHour":6,"endHour":22},{"day":7,"startHour":8,"endHour":22}];
var daysAndHours5=[{"day":1,"startHour":8,"endHour":22},{"day":2,"startHour":8,"endHour":22},{"day":3,"startHour":8,"endHour":22},{"day":4,"startHour":8,"endHour":22},{"day":5,"startHour":8,"endHour":22},{"day":1,"startHour":6,"endHour":22},{"day":7,"startHour":8,"endHour":22}];



var advertTime1= {"startDate":"2018-01-01","endDate":"2018-12-12","hoursByDay":daysAndHours1};
var advertTime2= {"startDate":"2018-01-01","endDate":"2018-12-12","hoursByDay":daysAndHours2};
var advertTime3= {"startDate":"2018-01-01","endDate":"2018-12-12","hoursByDay":daysAndHours3};
var advertTime4= {"startDate":"2018-01-01","endDate":"2018-12-12","hoursByDay":daysAndHours4};
var advertTime5= {"startDate":"2018-01-12","endDate":"2018-12-12","hoursByDay":daysAndHours5};

var messages =
    [
        { "id": 1 , "name" : "message1", "text":  textArray1,"picture" : images1,"link":"Template1.html","duration":2000,"time":advertTime1,"screens": [{id:1},{id:2}]},
        { "id": 2 , "name" : "message2", "text": textArray2,"picture" : images2,"link":"Template2.html","duration":2000,"time":advertTime2,"screens":[{id:1},{id:3}]},
        { "id": 3 , "name" : "message3", "text": textArray3,"picture" : images3,"link":"Template3.html","duration":2000,"time":advertTime3,"screens":[{id:2},{id:3}]},
        { "id": 4 , "name" : "message4", "text": textArray4,"picture" : images4,"link":"Template1.html","duration":2000,"time":advertTime4,"screens":[{id:1}]},
        { "id": 5 , "name" : "message5", "text": textArray5,"picture" : images5,"link":"Template2.html","duration":2000,"time":advertTime5,"screens":[{id:3}]}
    ];




var user={"user":"Admin","pass":"123456"};

var screensAndTemplates={
    "screens" : {
        "availableScreens" : [
            {
                "id" : 1,
                "name" : "Screen 1"
            },
            {
                "id" : 2,
                "name" : "Screen 2"
            },
            {
                "id" : 3,
                "name" : "Screen 3"
            }
        ]
    },
    "templates" : {
        "availableTemplates" : [
            {
                "id" : "Template1.html",
                "name" : "Template A"
            },
            {
                "id" : "Template2.html",
                "name" : "Template B"
            },
            {
                "id" : "Template3.html",
                "name" : "Template C"
            }
        ]
    }
};


var address =
    [
        { "address": 1 , "name" : "Elie Wiesel St 2,Rishon LeTsiyon,Israel"},
        { "address": 2 , "name" : "Sderot Yitshak Rabin,Rishon LeTsiyon,Israel"}
    ];



//require node modules (see package.json)
var mongodb = require('mongodb');
//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;
// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/MyDatabase';

MongoClient.connect(url, function(err, db) {
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
    }

    var usersCollection = db.collection('Users');
    var messagesCollection = db.collection('Messages');
    var addressCollection = db.collection('Address');
    var dataCollection = db.collection('Data');



    usersCollection.insert(user);
    messagesCollection.insert(messages);
    addressCollection.insert(address);
    dataCollection.insert(screensAndTemplates);


    db.close();



});
