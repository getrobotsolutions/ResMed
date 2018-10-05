var speak = new Array( );


        speak[0] = "title tips for today and tomorrow";
        speak[1] = "Please have a look at some of our products";
        speak[2] = "Please let us know how you enjoyed our event";
        speak[3] = "Read a welcome message from our dean.";
        speak[4] = "Find out what classes you need for your major.";
        speak[5] = "";
        speak[6] = "Say Cheese! ";
        speak[7] = "Smile! You are about to become a robot.";
        speak[8] = "Pick a song and let’s boogie!";

//window.external.ChangeLanguage("en-us");
function FC_ContentsCall(strContentsName, strLanguage)
{
   // alert(strContentsName);
    
   
    switch (strContentsName)
    {
        case "Welcome":
            PlaySpeech("Hi, I'm Tracey. Thank you for coming. Please press a button on my screen to begin");
            break;
        case "Home":
           location.href = "../../maincontents.htm";
            break;
        case "Tips":
            PlaySpeech(speak[0]);
            location.href = "Contents/Tips/index.html";
            break;
        case "Products":
            PlaySpeech(speak[1]);
            location.href = "Contents/Products/index.html";
            break;
        case "Survey":
            PlaySpeech(speak[2]);
            location.href = "Contents/Survey/index.html";
            break;
        

        case "Selfie":
            PlaySpeech(speak[6]);
            location.href = "Contents/Selfie/index.html";
            break;
        case "Avatar":
            PlaySpeech(speak[7]);
            location.href = "Contents/RobotAvatar/index.htm";
            break;
        case "Dance":
            PlaySpeech(speak[8]);
            location.href = "Contents/Dance/index.html";
            break;
        case "Config":
            location.href = "Config/Config.htm";
            break;
        case "maincontents":
            location.href = "maincontents.htm";
            break;
        default:
            break;
    } // end switch(strContentsName)
} // end FC_ContentsCall



function OnUserApproached()
{
    PlaySpeech("Hello, welcome to the event. Please press a button on my screen to begin.");
}



function ShowPopup(){

// get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    // calculate the values for center alignment
    var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());
    var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2);
    // assign values to the overlay and dialog box
    $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
    $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();
    document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="assets/contact.png"/></div></div>';
}
function ShowImgPopup(src){

// get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    // calculate the values for center alignment
    var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());
    var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2);
    // assign values to the overlay and dialog box
    $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
    $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();
    document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="'+src+'"/></div></div>';
}

$(document).ready(function(){

    $('a.btn-ok, #dialog-overlay, #dialog-box').click(function () {
        $('#dialog-overlay, #dialog-box').hide();
        return false;
    });
})


setTimeout(function () {
    ShowTime();
    console.log("Time Showed");

    var city = "Fairfield, CT";
    var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='f'";
    var queryURL = "https://query.yahooapis.com/v1/public/yql?q="+ searchtext + "&format=json";

    $.getJSON(queryURL, function (data) {

        var results = data.query.results;
        var firstResult = results.channel.item.condition;
        console.log(firstResult);


        var location = 'Unknown'; // not returned in response
        var temp = firstResult.temp;
        var text = firstResult.text;
        var image =  firstResult.code;
        var loc = 'https://s.yimg.com/zz/combo?a/i/us/we/52/'+image+'.gif' ;

        // $('#temp').append('The temperature is <strong>' + temp + '</strong><sup>°F</sup> Forecast calls for '+text);

        $('#condition').append(text);
        $('#temp').append(temp+ '</strong><sup>°F</sup>');

        $('#image-zoom').attr("src",loc);

        console.log("Weather Showed");
    });

}, 2000);



function ShowTime()
{
    var dt = new Date();
    // formatAMPM(dt);
    document.getElementById("content_air") .innerHTML = formatAMPM(dt) ;
    document.getElementById("content_date") .innerHTML = formatDate(dt);

}
function formatAMPM(date) {

    var hours = date.getHours();
    var minutes = date.getMinutes();


    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

    var dayName = days[date.getDay()];

    //dayName = date.toString().split(' ')[0];
    hours = hours <10? '0' +hours : hours;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = dayName + ' ' + hours + ':' + minutes + ' ' + ampm;
    return strTime;
    //alert(strTime);
}

function formatDate(date){

    var m_names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var month = m_names[date.getMonth()];
    var day = date.getDate();
    day = getGetOrdinal(day);

    var output = (month<10 ? '0' : '') + month + ' ' +(day<10 ? '0' : '') + day+', '+ date.getFullYear() ;
    return output;
}

function getGetOrdinal(n) {
    var s=["th","st","nd","rd"],
        v=n%100;
    return n+'<sup>'+(s[(v-20)%10]||s[v]||s[0])+'</sup>';
}

var dialouges = new Array( );
dialouges[0]="Adrienne, it is my pleasure to meet you and all of your title agents!  I am so excited to be here and thank you from the bottom of my hard drive for including me.   I hope I can help all of your agents recharge their batteries today.  Your title agents are so excited to be here and I think they like me.  I know because they have been reading all of my title tips, asked me to dance, and kept asking me to be in a picture with me!  ";
dialouges[1]="Well, Adrienne, my parents are R2D2 and C3Po – they had to adopt me, of course!";
dialouges[2]="Yes, I have two trans-sisters.";
dialouges[3]="I like computer chips.";
dialouges[4]="Yes, I sometimes am asked to wire funds.";
dialouges[5]="I was not well, Adrienne.  I had a virus.";
dialouges[6]="Well, after being re-booted, I am going to give it a whirl, but my skills are a bit rusty.";

var dialougeIndex=0;

var firstQuestions = new Array( );
firstQuestions[0]="Hello and thank you for coming to Chicago Title and Commonwealth Land Title’s Seminar – The Agency of Tomorrow.";
firstQuestions[1]="Thank you for stopping to see me.";
firstQuestions[2]="Please check out our Title Tips of the Day.";
firstQuestions[3]="Would you like me to take a picture?";
firstQuestions[4]="Would you like to take a picture with me?";
firstQuestions[5]="Chicago Title and Commonwealth Land Title have the best title agents!";

var firstQuestionsIndex=0;

function OnJoystickControlled(strPara){
    var btn_info = strPara.split(',')[4];


    if(btn_info[0] == '1'){
            window.external.ChangeLanguage("en-us");
            SetVolume(1);
            if(firstQuestionsIndex<6){
                window.external.PlaySpeech(firstQuestions[firstQuestionsIndex]);
                firstQuestionsIndex++;
            }
            else{
                firstQuestionsIndex=0;
            }
    }

    if(btn_info[1] == '1'){
        window.external.ChangeLanguage("en-us");
        SetVolume(1);
        window.external.PlaySpeech("Thank you all.  You made we feel welcome here today.  I will miss seeing all of you but have so many pictures of you that I will keep you in my memories in the cloud forever.  If you are hiring a new employee, I would be happy to help you program them. Your next and final speaker today is Linda Grahovec.  Linda will be addressing the important subject: “What Will your Agency Look Like in 5 Years?”   Linda is a vice president and director of education and marketing for the Fidelity National Title Group.  In this role, she oversees national agency’s communication and education efforts as well as the company’s agency facing events and marketing strategy initiatives.  Linda brings the knowledge and experience compiled during a long, varied career in all areas of real estate with her to work every day. She is passionate about business development, web technologies, applied marketing, online education and business plan analysis and believes the more agents know about these subjects the better it is for all of us. Linda is always looking for ways to innovate, educate and advance technology within FNTG and to all of their valued agents.   Please welcome Linda!  ");
        
    }
    if(btn_info[2] == '1'){
        window.external.ChangeLanguage("en-us");
            SetVolume(1);
            //window.external.PlaySpeech("Chicago Title and Commonwealth Land Title have the best title agents!");
    }
    if(btn_info[3] == '1'){
        window.external.ChangeLanguage("en-us");
        SetVolume(1);
        if(dialougeIndex<7){
        window.external.PlaySpeech(dialouges[dialougeIndex]);
        dialougeIndex++;
       }
       else{
        dialougeIndex=0;
       }

        
    }
    if(btn_info[4] == '1'){
        SetHeadYaw(35, 23);       
    }
    if(btn_info[5] == '1'){
       SetHeadYaw(-35,23);
    }
    if(btn_info[6] == '1'){
        SetHeadYaw(0,23);
    }
    if(btn_info[7] == '1'){
        //SetHeadYaw(35, 23);
        //window.external.PlaySpeech("Please check out our Title Tips of the Day.");
    }
    if(btn_info[8] == '1'){
        //SetHeadYaw(0,23);
        //window.external.PlaySpeech("Would you like me to take a picture?");
    }
    if(btn_info[9] == '1'){
        //SetHeadYaw(35, 23);
        //window.external.PlaySpeech("Would you like to take a picture with me?");
    }
    
    if(btn_info[10] == '1'){
        SetHeadYaw(0, 23);
    }
    if(btn_info[11] == '1'){
        SetHeadYaw(0,23);
    }
}