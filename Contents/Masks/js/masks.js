//-----------------------------------------------------
//Redirects to homepage after 1 minute of not interaction
//-----------------------------------------------------

function redirect(){
    window.location.href = "../../maincontents.htm";
}
var initial=setTimeout(redirect,60000);

$(document).click(function(event) {
    clearTimeout( initial );
    initial=setTimeout(redirect,60000);
});
//-----------------------------------------------------
var pdf="";

function LanguageChange(lang)
{
    if(lang === "english")
    {
        eraseCookie("Spanish");
        writeCookie("CurrentLanguage", "English", 30);
        document.getElementById("btn_english").style.backgroundColor = "white";
        document.getElementById("btn_english").style.color = "#FF6600";
        document.getElementById("btn_spanish").style.backgroundColor = "#FF6600";
        document.getElementById("btn_spanish").style.color = "white";
    }
    else if (lang === "spanish")
    {
        eraseCookie("English");
        writeCookie("CurrentLanguage", "Spanish", 30);
        document.getElementById("btn_english").style.backgroundColor = "#FF6600";
        document.getElementById("btn_english").style.color = "white";
        document.getElementById("btn_spanish").style.backgroundColor = "white";
        document.getElementById("btn_spanish").style.color = "#FF6600";
    }
location.reload();
}

$(document).ready(function(){

   $('a.btn-ok, #dialog-overlay, #dialog-box').click(function () {   
      $('#dialog-overlay, #dialog-box, #dialog-box-form').hide(); 
      
      return false;
    });
    $('.email').click(function(){
      pdf=$(".email").attr('dir')
      $("#keyboard").show();
      //ShowEmailPopup();
    });
   $('.btn-ok').click(function () {   
      
      //return false;
    });



$('#SendEmail').click(function(){
            var $action = "http://getrobotsolutions.com/resmed/index.php";
            //var pdf="https://drive.google.com/file/d/0B8Xsf8KvfUZ0Ym1jQ2RxQko2bGRXZkJzcmowbWRINzFuQk5N/preview";
            var $data = {'email':message, 'pdf':pdf};
            //var $this = $(this);

            //$this.prevAll('.alert').remove();

            $.post( $action, $data, function( data ) {

                if( data.response=='error' ){

                    $this.before( '<div class="alert danger-border"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <i class="mdi mdi-close-box"></i> '+data.message+'</div>' );
                }

                if( data.response=='success' ){
                    $('#keyboard').hide();
                    ShowEmailPopup();//$this.after('<div class="alert success-border">Thank You</div>');

                }
            }, "json");
});

});
function ShowKeyboard()
{
    // 사진이 촬영되기 전에 클릭시 무시
    if (isPhotoTaken == false)
        return;
    
    // 키보드 보이기
    document.getElementById("keyboard").style.display = "block";
    
    // 메일 전송 안내 스피치
    if (isRobot)
    {
        //window.external.PlaySpeech(speechJsonObj["email"][c_language]);
    }
}

/* 키보드 숨김 */
function HideKeyboard()
{
    // 키보드 숨김
    document.getElementById("keyboard").style.display = "none";
    
    // 메일 주소 초기화
    message = "";
    document.getElementById("address").innerHTML = message;
}

/* 메일 주소 입력 */
var message = "";
function keyboard(strPara)
{
  if (strPara == "bs")
    {
    message = message.slice(0, -1);
  }
  
  else
    {
    message += strPara;
  }

  document.getElementById("address").innerHTML = message;
}
function ShowPopup(src){

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

function ShowPopupARS(src){

// get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();

    // calculate the values for center alignment
    var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());
    var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2);

    // assign values to the overlay and dialog box
    $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
    $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();

    document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="'+ src +'"/></div></div>';
}
function ShowEmailPopup(){

// get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();

    // calculate the values for center alignment
    var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());
    var dialogLeft = (maskWidth/2) - ($('#dialog-box-form').width()/2);

    // assign values to the overlay and dialog box
    $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
    $('#dialog-box-form').css({top:dialogTop, left:dialogLeft}).show();

    //document.getElementById('dialog-box-form').innerHTML = '<form method="post" style="text-align: center;" action="https://robotaisolutions.com/novartis/index.php" name="contact_form" id="contactForm"><input type="email" name="email" id="email"></br><input type="submit" name="send" value="send"></form>'
}
function ShowPdfPopup(src){

// get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();

    // calculate the values for center alignment
    var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());
    var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2);

    // assign values to the overlay and dialog box
    $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
    $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();

    document.getElementById('dialog-box').innerHTML = '<a href="#" class="button btn-ok">Close</a><iframe src="'+src+'" width="100%" height="1000" ></iframe>';
}