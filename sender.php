<!DOCTYPE html>
<html />
    <head>
            <style>
                body,body *{
                    background:-webkit-radial-gradient(red,darkred,black,transparent);
                    border-radius:1em;
                    color:white;
                    font-size:1.3em;
                    text-align:center}
                input{
                    outline:0}</style>
            <script src=../lbs/jquery-2.x.js></script>
            <script>
                $(function(){
                    $('button').click(function(){
                        $.post(
                            'php/receiver.php',
                            {D:$('input')[0].value},
                            function(d){alert(d)})})})</script></head>
    <body />
        <input value=fercho></input>
        <button>send</button>
