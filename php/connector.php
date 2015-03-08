<?php
    require_once 'class.php';
    $c=new C('restaurantdb','listofgamers',$_POST['USR'],$_POST['PSS'],$_POST['LANG']);
    $c->BunchOrBundle(); ?>
