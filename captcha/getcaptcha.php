<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('P3P: CP="ALL IND DSP COR ADM CONo CUR CUSo IVAo IVDo PSA PSD TAI TELo OUR SAMo CNT COM INT NAV ONL PHY PRE PUR UNI"'); 
/*?>session_start();

$callback ='mycallback';
    if(isset($_GET['mycallback'])){
        $callback = $_GET['mycallback'];
    }   
    $str =array();
	
    if(isset($_SESSION['security_code'])){
		
    $str['captcha']=$_SESSION['security_code'];  
    }
echo $callback.'(' . json_encode($str) . ')';<?php */
session_start();
$str=array();
if(isset($_SESSION['security_code'])){
array_push($str,$_SESSION['security_code']);  
}
echo json_encode($str);
?>