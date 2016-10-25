<?php
$callback ='mycallback';
    if(isset($_GET['mycallback']))
    {
        $callback = $_GET['mycallback'];
    }   
    $arr =array();
    $arr['name']="Ravishanker";
    $arr['age']=32; 
    $arr['location']="India";   
 
    echo $callback.'(' . json_encode($arr) . ')';
 
?>