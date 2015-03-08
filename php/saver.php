<?php
    $T=$_POST['Table']; $P=$_POST['Pts']; $C=$_POST['Cust']; $M=$_POST['PlusMinus'];  $R=$_POST['Rate'];
    mysql_connect('localhost','root','');
    mysql_query("UPDATE restaurantdb.$T SET PTS=PTS+$P, RCRD=PTS, $C=$C+$M, RATE=$R"); ?>