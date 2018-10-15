var speak = new Array( );


        speak[0] = "title tips for today and tomorrow";
        speak[1] = "Please have a look at some of our products";
        speak[2] = "Please let us know how you enjoyed our event";
        speak[3] = "Read a welcome message from our dean.";
        speak[4] = "Find out what classes you need for your major.";
        speak[5] = "";
        speak[6] = "Touch the camera icon and then say cheese.";
        speak[7] = "Be cool like me.  Touch the camera icon on my screen and become a robot";
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
        case "Ventilation":
            //PlaySpeech(speak[0]);
            location.href = "Contents/Ventilation/index.html";
            break;
        case "Compliance":
            //PlaySpeech(speak[1]);
            location.href = "Contents/Compliance/index.html";
            break;
        case "AirMini":
            //PlaySpeech(speak[2]);
            location.href = "Contents/AirMini/index.html";
            break;
        case "Masks":
            //PlaySpeech(speak[2]);
            location.href = "Contents/Masks/index.html";
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


/*setTimeout(function () {
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

}, 2000);*/



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



function OnJoystickControlled(strPara){
    var btn_info = strPara.split(',')[4];


    if(btn_info[0] == '1'){
            window.external.ChangeLanguage("en-us");
            SetVolume(1);
            window.external.PlaySpeech("Check out the newest mask by Resmed, the AirFit F30.");
    }

    if(btn_info[1] == '1'){
        window.external.ChangeLanguage("en-us");
        SetVolume(1);
        window.external.PlaySpeech("Be sure to vote for the new mask by Resmed, the AirFit F30 in the new product pavilion.");
    }
    if(btn_info[2] == '1'){
        window.external.ChangeLanguage("en-us");
            SetVolume(1);
            window.external.PlaySpeech("Hi, I like you.  Please touch the buttons on my screen to learn about Resmed products.");
    }
    if(btn_info[3] == '1'){
        window.external.ChangeLanguage("en-us");
        SetVolume(1);
        

        
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
function UpdateSession(pageId){
    var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd="0"+dd
} 

if(mm<10) {
    mm="0"+mm
} 

today = mm+"/"+dd+"/"+yyyy + " " +today.getHours() + ":" + today.getMinutes()+":" + today.getSeconds();

    
    var dataString =  { 'PageId' : pageId , 'Time' : today };
      $.ajax({  
        url:"http://getrobotsolutions.com/resmed/logsApi.php",
        type:"post",
        data : dataString,
              cache : false,
        success : function (data) { 
          //alert("success")
          //ShowPopup('Thank You');
          
          //PlaySpeech('Thank You');
          //GoHome();     
                //$("" + e_review + " .add-review #form-add-review").fadeOut(600);
                //$("" + e_review + " .add-review .notice").append(data).fadeIn(1500); 
        }
      });
}