/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function isNumberKey(evt) {
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                // Added to allow decimal, period, or delete
                if (charCode == 110 || charCode == 190 || charCode == 46)
                        return true;

                if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                        return false;
                    }

                        return true;
}


function validateEmail(mail){
                        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
                          return true;
                        }
                            return false;
}

//Toggle Captcha
var isGoogleCaptcha = 0;

var pass=false;
var count=0;
var gothru = true;
var recaptcha1 = null;
var domain = window.location.host;

jQuery(document).ready(function() {
     if (!window.location.origin) {
        window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
      }
    var finalurl = window.location.origin;
    var domain = window.location.host;
    if(domain=="localhost"){
              partfile="/";
        }else{
            partfile= "/";
        }

          finalurl =  finalurl + partfile;
     //Here the website Sitekey needs to be inserted

     function sendForm(){
        pass=true;
        ++count;
        if(count==1){
              gothru=false;
              setTimeout(function(){  $("#submitBtn").trigger('click'); }, 2000);
        }
     }


     function validateCaptchaCode(captchadata){
                    var serializedData = "";
                    var ajaxurl = finalurl + "captcha/getcaptcha.php";

                            if(isGoogleCaptcha){
                                    serializedData = jQuery("#form1").serialize();
                                   ajaxurl = finalurl + "captcha/validation.php";
                            }


                                        jQuery.ajax({
                                        url: ajaxurl,
                                        type: "post",
                                        dataType: (isGoogleCaptcha) ? "" : "json",
                                        data: serializedData,
                                        beforeSend: function() {
                                            // setting a timeout
                                         },
                                        success:function(data){
                                           var data1 = data.toString();
                                           if(data1 === "true" && isGoogleCaptcha){
                                                 sendForm();
                                           }else if((captchadata === data1) && !isGoogleCaptcha){
                                                 sendForm();
                                           }else{
                                               if(gothru){
                                                    alert("Please check the captcha");
                                                    return pass;
                                                }
                                            }
                                        }, error: function(jqXHR, textStatus, ex) { }
                                    });

                                 return pass;
                   }


                    jQuery("#submitBtn").click(function(){
                            if(jQuery("#name").val()==""){
                              alert("Please enter you Name");
                                return pass;
                           }else if(jQuery("#mobile").val()==""){
                                alert("Please enter you Contact Number");
                                 return pass;
                           }else if(jQuery("#email").val()==""){
                                 alert("Please enter you Email Address");
                                 return pass;
                           }else if(!validateEmail(jQuery("#email").val())){
                                  alert("Please enter a valid Email Address");
                                  return pass;
                           }else{
                             if (grecaptcha.getResponse() == ""){
                                  alert("Invalid captcha verification, please try again");
                                  return pass;
                              } else {
                                  $( "#form1" ).submit();
                              }

                              //  var inputparam = (jQuery("#captcha").length > 0) ? jQuery("#captcha").val() : "";
                              // validateCaptchaCode(inputparam);
                              // return pass;
                           }
                       });
        if(!isGoogleCaptcha){
          var captchaURL =  finalurl + "captcha/CaptchaSecurityImages.php?width=140&amp;height=35&amp;characters=6";
          var refreshButtonImage = finalurl + "captcha/refresh-button.png";
          var rand =  Math.random();
          var captchHolder = "";
          captchHolder += "<img id=\"captchaImage\" src=\"" + captchaURL + "\">";
          captchHolder += "<a title=\"Refresh Image\" onclick=\"document.getElementById('captchaImage').src = \'" + captchaURL + "&amp;sid=" + rand + "; this.blur();  return false;'\" >";
          captchHolder += "<img onclick=\"this.blur() alt=\"Reload Image\" src=\"" + refreshButtonImage + "\" id=\"refreshBtn\" style=\"cursor: pointer; margin-top:5px; border-style: none; border: 0px;\"></a>";
          captchHolder += "<div class=\"input-placeholder\"><input id=\"contactcaptcha\" class=\"Security Code\" name=\"Captcha\" size=\"32\" type=\"text\" value=\"\" placeholder=\"Security Code* :\"><div class=\"placeholder\">Security Code : <span>*<\span><\div><\div>";
          jQuery("#captchadiv").html(captchHolder);
      }
});


 if(isGoogleCaptcha){
var captchaSitekey = "6LfrWyETAAAAALQUnxDtf2y_rQ6eAXpLfYhQ0JLJ";
if(domain=="activawebdesigner.com.sg"){
      captchaSitekey = "6LcRASATAAAAAPhOS_dGsoICuloNLnl0Uk2QJ1T_";
 }
     var captchaCallback = function() {
     //Render the recaptcha1 on the element with ID "recaptcha1"
        recaptcha1 = grecaptcha.render('captchadiv', {
          'sitekey' : captchaSitekey, //Replace this with your Site key
          'theme' : 'light'
        });

    }
 }
