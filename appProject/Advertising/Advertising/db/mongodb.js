/**
 * The db of the messages .
 * save the data in mongo db.
 */

var images1 = ["mosheAndEyal.jpg"];
var textArray1 = ["לראשונה שני הקולות הגדולים, אייל גולן ומשה פרץ במופע מוסיקלי משותף ומרהיב 'הולכים להשתגע'. שיתוף פעולה חד פעמי ומפגש סוחף בין אייל גולן למשה פרץ במופע ענק ומיוחד שיכלול ביצועים חדשים, אהובים ומשותפים למיטב הלהיטים של שני האמנים הגדולים והמצליחים בישראל, בעיבודו והפקתו המוסיקלית של יעקב למאי ובליווי להקה בת 20 נגנים ורקדנים על במה אחת 360."];

var images3 =["maccabi.jpg"];
var textArray3 = ["מכבי תל אביב תארח ביום חמישי, ה-26.7, את רדניצ'קי ניש למשחק הראשון במסגרת סיבוב המוקדמות השני של הליגה האירופית. המשחק ייערך באיצטדיון בנתניה"];

var images2 =["shlomi.jpg"];
var textArray2 = ["שלומי שבת בקיסריה. במופע יבצע את להיטיו הגדולים מהרפרטואר העשיר שלו, המופע משלב שירים שהפכו לקלאסיקות ואבן דרך בנוף המוזיקה בישראל לצד שירים מהאלבום החדש שבדרך. כל הלהיטים הגדולים שהפכו להמנוני ענק בערב מרגש אחד."];

var images4 =["harlem.gif"];
var textArray4 = ["שחקני הקבוצה יחברו למופע שכולו קליעות מפתיעות לסל, בדיחות, שיתוף הקהל במשחק, הטבעות עוצרות נשימה, שליטה חסרת תקדים בכדור ועוד.במהלך 90 שנות קיומה הופיעה הקבוצה מול מאות מיליוני צופים, ב-125 מדינות ברחבי העולם. כשהיא מרבה לשבור מחסומים תרבותיים וחברתיים."];

var images5 =["adir.jpg"];
var textArray5 = ["אדיר מילר היכל התרבות ראשון לציון. מופע סטנדאפ נטו, שנון ומצחיק. מביא לבמה איכויות של וירטואוז אמיתי, מאלתר מחונן וגם שחקן תיאטרון מצליח"];


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
        { "id": 1 , "name" : "אייל גולן ומשה פרץ", "text":  textArray1,"picture" : images1,"link":"Template1.html","duration":5000,"time":advertTime1,"screens": [{id:1},{id:2}],"tag": 2},
        { "id": 2 , "name" : "שלומי שבת", "text": textArray2,"picture" : images2,"link":"Template2.html","duration":5000,"time":advertTime2,"screens":[{id:2},{id:3}],"tag": 2},
        { "id": 3 , "name" : "מכבי תל אביב - רדניצ'קי", "text": textArray3,"picture" : images3,"link":"Template3.html","duration":5000,"time":advertTime3,"screens":[{id:3},{id:1}],"tag": 1},
        { "id": 4 , "name" : "הארלם גלובטרוטרס", "text": textArray4,"picture" : images4,"link":"Template1.html","duration":5000,"time":advertTime4,"screens":[{id:1}],"tag": 1},
        { "id": 5 , "name" : "אדיר מילר", "text": textArray5,"picture" : images5,"link":"Template2.html","duration":5000,"time":advertTime5,"screens":[{id:3}],"tag": 3}
    ];




var user=[{"user":"Admin","pass":"123456"},{"user":"Lior","pass":"123456"},{"user":"Guy","pass":"123456"}];

var screensTemplatesAndTags={
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
    },
    "tags" : {
        "availableTags" : [
            {
                "id" : 1,
                "name" : "sport"
            },
            {
                "id" : 2,
                "name" : "music"
            },
            {
                "id" : 3,
                "name" : "comedy"
            }
        ]
    }
};


var address =
    [
        { "address": 1 , "name" : "Menora Mivtachim Arena, Yigal Alon Street, Tel Aviv-Yafo,Israel"},
        { "address": 2 , "name" : "Hekhal HaTarbut/Jabotinsky, Rishon LeTsiyon, Israel"},
        { "address": 3 , "name" : "Caesarea National Park, Caesarea, Israel"},
        { "address": 4 , "name" : "Netanya Stadium, Netanya, Israel"}
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
    var historyCollection = db.collection('History');


    usersCollection.insert(user);
    messagesCollection.insert(messages);
    addressCollection.insert(address);
    dataCollection.insert(screensTemplatesAndTags);


    db.close();



});
