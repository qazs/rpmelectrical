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
//
//        
//        
//             $.fn.pval = function(){
//                    var $this = $(this),
//                        val = $this.eq(0).val();
//                    if(val == $this.attr('placeholder'))
//                        return '';
//                    else
//                        return val;
//                }
                
                 function validateEmail(mail){  
                        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {  
                          return true;
                        }
                            return false; 
                        }
         var pass=false;
var count=1;
var gothru = true;
var recaptcha1 = null;
var domain = window.location.host;
var captchaSitekey = "6LdO8QcUAAAAAM74cLa02N2eRGJ-24zapF5cEm9u";
jQuery(document).ready(function() {
   
  
     //Here the website Sitekey needs to be inserted
      
     function validateCaptchaCode(){
                                      var serializedData = jQuery("#form1").serialize();
                                 
                                        jQuery.ajax({
                                        url: "captcha/validation.php",
                                        type: "post",
                                        data: serializedData,
                                        beforeSend: function() {
                                            // setting a timeout
                                         },
                                        success:function(data){
                                           if(data=="true"){
                                                pass=true;
                                                ++count;
                                                if(count==1){
                                                      gothru=false;
                                                      setTimeout(function(){  $("#submitBtn").trigger('click'); }, 2000);
                                                }
                                           }else{
                                               if(!jQuery("#g-recaptcha-id").length > 0 && gothru){
                                                    alert("Please check the captcha");
                                                    return pass;
                                                }
                                            }
                                        }, error: function(jqXHR, textStatus, ex) {
                                                //alert(textStatus + "," + ex + "," + jqXHR.responseText);
                                        }
                                    });

                                 return pass;
                   }
                
                $("#submitBtn").click(function(){
                      
                        if($("#name").val()=="" || $("#name").val()=="Name"){
                           alert("Please enter your Name");
                             return pass;
                        }else if($("#mobile").val()=="" || $("#mobile").val()=="Contact No"){
                             alert("Please enter your Contact No");
                              return pass;
                        }else if($("#email").val()=="" || $("#email").val()=="Email"){
                              alert("Please enter your Email Address");
                              return pass;
                        }else if(!validateEmail($("#email").val())){
                              alert("Please enter a valid Email Address!") 
                               return pass;
                        }else if($("#captcha").val()=="" || $("#captcha").val()=="Security Code"){
                            alert("Please enter the Security code") 
                             return pass;
                        }else{
                            validateCaptchaCode($("#captcha").val());
                            return pass;
                        }
                    });
                
                
                $("#mobile").on({
                    keydown: function(e) {
                      if (e.which === 32)
                        return false;
                    },
                    change: function() {
                      this.value = this.value.replace(/\s/g, "");
                    }
                  });
                
                
                 //function showErrorToast(msg) {
//                    $(this).notifyMe(
//				'bottom',
//				'error',
//				'Error :',
//				msg,
//				200,
//				1500
//			);
//                }
      });
             
var captchaCallback = function() {
     //Render the recaptcha1 on the element with ID "recaptcha1"
        recaptcha1 = grecaptcha.render('captchadiv', {
          'sitekey' : captchaSitekey, //Replace this with your Site key
          'theme' : 'light'
        });

    }   