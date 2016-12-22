<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
require_once "recaptchalib.php";
// your secret key
$secret = "6LdO8QcUAAAAAPN5a-r1c9vVbFaLXfWpc35ovySc";

// empty response
$response = null;
// check secret key
$pass=false;
$reCaptcha = new ReCaptcha($secret);
// if submitted check response

if (isset($_POST["g-recaptcha-response"])) {
    $response = $reCaptcha->verifyResponse(
        $_SERVER["REMOTE_ADDR"],
        $_POST["g-recaptcha-response"]
    );
if ($response != null && $response->success) {
       $pass=true;
   } else {
      $pass=false;
 }
}else{
    $pass=false;
}
echo json_encode($pass);
?>