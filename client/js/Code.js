//images
var images1 = ["./images/adidas.png"];
var images2 = ["./images/decathlon.jpg"];
var images3 = ["./images/mizuno.png"];
var images4 = ["./images/newbalance.png"];
var images5 = ["./images/nike.png"];

//text
var textArray1 = ["Adidas AG is a multinational corporation, founded and headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories. It is the largest sportswear manufacturer in Europe, and the second largest in the world"];
var textArray2 = ["Decathlon S.A. is a French sporting goods retailer. It is the largest sporting goods retailer in the world.Decathlon started with a store in Lille, France in 1976, founded by Michel Leclercq. It started to expand abroad a decade later, to Germany in 1986, Spain in 1992, Italy in 1998, Portugal, the United Kingdom in 1999, China in 2003, India in 2009, Hong Kong in 2013, Malaysia in 2016 and Southeast Asia in 2012 and South Africa, Philippines in 2017 and Australia in 2018. Today, there are more than 1100 stores in 38 countries. The company employs more than 78,000 staff from 80 different nationalities."];
var textArray3 = ["Mizuno Corporation is a Japanese sports equipment and sportswear company, founded in Osaka in 1906 by Rihachi Mizuno. Today, Mizuno is a global corporation which makes a wide variety of sports equipment and sportswear, for golf, tennis, baseball, volleyball, football, running, rugby, skiing, cycling, judo, table tennis, badminton, boxing and athletics."];
var textArray4 = ["New Balance Athletics, Inc. (NB), best known as simply New Balance, is an American multinational corporation based in the Brighton neighborhood of Boston, Massachusetts. The company was founded in 1906 as the 'New Balance Arch Support Company' and is one of the world's major sports footwear manufacturers."];
var textArray5 = ["Nike, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services. The company is headquartered near Beaverton, Oregon, in the Portland metropolitan area. It is the world's largest supplier of athletic shoes and apparel and a major manufacturer of sports equipment."];

//times
var advertTime1= [{"startDate":new Date("January 1, 2018 06:00:00"),"endDate":new Date("December 31, 2018 23:00:00"),"days":[2,4,6,7]}];
var advertTime2= [{"startDate":new Date("January 1, 2018 06:00:00"),"endDate":new Date("December 31, 2018 23:00:00"),"days":[2,4,6,7]}];
var advertTime3= [{"startDate":new Date("January 1, 2018 06:00:00"),"endDate":new Date("December 31, 2018 23:00:00"),"days":[2,4,6,7]}];
var advertTime4= [{"startDate":new Date("January 1, 2018 06:00:00"),"endDate":new Date("December 31, 2018 23:00:00"),"days":[2,4,6,7]}];
var advertTime5= [{"startDate":new Date("January 1, 2018 06:00:00"),"endDate":new Date("December 31, 2018 23:00:00"),"days":[2,4,6,7]}];



var messages =
    [{"name" : "Adidas", "text":  textArray1,"picture" : images1,"link":"./templates/Template1.html","duration":2000,"time":advertTime1},
        { "name" : "Decathlon", "text" : textArray2,"picture" : images2,"link":"./templates/Template2.html","duration":2000,"time":advertTime2},
        { "name" : "Mizuno", "text" : textArray3,"picture" : images3,"link":"./templates/Template3.html","duration":2000,"time":advertTime3},
        { "name" : "New balance", "text" : textArray4,"picture" : images4,"link":"./templates/Template1.html","duration":2000,"time":advertTime4},
        { "name" : "Nike", "text" : textArray5,"picture" : images5,"link":"./templates/Template2.html","duration":2000,"time":advertTime5}];

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
                "id" : "tmp1.html",
                "name" : "Template A"
            },
            {
                "id" : "tmp2.html",
                "name" : "Template B"
            },
            {
                "id" : "tmp3.html",
                "name" : "Template C"
            }
        ]
    }
};

var counter = 1;
var i;

$(document).ready(function() {
    advertsToRun(0);
})

    function daysMatch(currentDay,daysToRun){
    for(i=0;i<daysToRun.length;i++){
        if(daysToRun[i]==currentDay)
            return true;
    }
    return false;
}


function advertsToRun(index){

    var currentTime=new Date();
    if(validTime(index,messages,currentTime)){

        $("#result").load(messages[index].link,function(){
            /*setText(index);
            setPic(messages[index].picture);
            */
            $('h1').text(messages[index].name);
            if(messages[index].text != ""){
                if(messages[index].text[0].length > 1){
                    $.each(messages[index].text,function (indexOfLine, lineValue) {
                        $('p').append(lineValue + "</br>");
                    });
                }
                else {
                    $('p').append(messages[index].text + "</br>");
                }
            }

            if(messages[index].picture != ""){
                if(messages[index].picture[0].length > 1){
                    $.each(messages[index].picture, function (indexOfPic, picPath) {
                        $('#right').append('<img src=' + picPath + '>');
                    });
                }
                else {
                    $('#right').append('<img src=' + messages[index].picture + '>');
                }
            }
        });
        setTimeout (advertsToRun, messages[index].duration,(index+1)%messages.length);
        counter = 1;
    }
    else {
        if(counter==messages.length){
            setTimeout (advertsToRun, 60-currentTime.getSeconds(),(index+1)%messages.length);
            $("#result").load("./templates/empty.html");
            counter = 1;
        }
        else {
            setTimeout (advertsToRun, 0,(index+1)%messages.length);
            counter++;
        }
    }
}

function validTime(index,messages,currentTime){
    if(messages[index].time[0].startDate<=currentTime && messages[index].time[0].endDate>=currentTime)
        if(daysMatch(currentTime.getDay()+1,messages[index].time[0].days))
            if (messages[index].time[0].startDate.getHours() <= currentTime.getHours()) {
                if (messages[index].time[0].endDate.getHours() > currentTime.getHours())
                    return true;
                else if (messages[index].time[0].endDate.getHours() == currentTime.getHours())
                    if(messages[index].time[0].endDate.getMinutes() >= currentTime.getMinutes())
                        return true;
            }
    return false;
}


