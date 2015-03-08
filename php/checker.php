<?php
    $u=$_REQUEST['u']; $O=$_REQUEST['Option'];
    mysql_select_db('restaurantdb',mysql_connect('localhost','root',''));
    $fetch=mysql_fetch_assoc(mysql_query("SELECT * FROM `$u`"));
    $d=['VSTxN','IDIOM'];
    echo $fetch[$d[$O]];
?>