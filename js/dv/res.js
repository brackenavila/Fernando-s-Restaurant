$(function(){
  $pts=($i=0)+570
  $tyle=[]
  S=['backendShair','frontendShair']
  $M={0:' your mission is to serve your costumers to gain points by dragging and dropping their food on them, die oh... that\u2018is to say good luck!',8:' tu mision es servir tus clientes gana puntos arrastrando y soltando su comida sobre ellos, y mala suerte digo... buena suerte!'}
  D='Top Right Bottom Left magenta blue green red'.split(' ')
  $Hs='DATE POINTS LEVEL LAST P Visit N S1 I1 S2 I2 S3 I3 S4 I4 YOUR RATE   FECHA PUNTOS NIVEL ULTIMA P Visita N S1 I1 S2 I2 S3 I3 S4 I4 TU CLASE'.split(' ')
  E=[0,-150,200,-220,270,-320,370]
  C=[150,320,425]
  $Cl=[[20,228],[415,0],[510,-180],[910,0]]
  T=[[0,-50,-1,0,0,3],[140,46,-1,-1,1,4],[0,142,0,1,-1,6],[-50,46,-1,1,-1,4]]
  P=[2,24.5,59,81]
  F=[8,7,5,7]
  T3D=[0,.44,.55,1]
  Points=[,25e3,2e3,6e3,700,1500,500,1e3,3e3]
  Meal='.Hamburger.Ice Cream.Broaster Chicken.Coffee.Cocacola.Dessert.Tropical Juice.Rice.Hamburguesa.Helado.Pollo a la Broaster.Cafe.Cocacola.Postre.Jugo Tropical.Arroz'.split('.')
  $('<div class=r_div></div>').appendTo('#res').css({
    height:innerHeight/.72112676+'px',
    right:'12.9%',
    top:'15.4%',
    width:innerWidth/.674567901234567+'px'})
  while($i<4){
    $c=D[$i+4]
    $T=T[$i]
    $w=$i%2?
      52.5
      :100
    $('<div id='+D[$i]+'\n\
     style="\n\
      background:url(img/F1'+F[$i]+'.jpg);\n\
      width:'+$w+'%;\n\
      -webkit-transform:translate3D('+$T[0]+'%,'+$T[1]+'%,277px) rotate3D('+$T[2]+','+$T[3]+','+$T[4]+','+(30*$T[5])+'deg);\n\
     "></div>').appendTo('.r_div')
    $i++}$i=0
  while($i<2){$X=0
    while($X<2){
      $Y=$X%2?-1:1
      $tyle[$X]='style="-webkit-transform:translate3D('+(T3D[$i*2+$X]*Math.pow(10,3))+'%,80%,295px) rotate3D('+(-1*$Y)+','+(1*$Y)+',-1,120deg);"'
      $X++}
    $('<div id=Sh'+($i+$i)+' class='+S[$i]+' '+$tyle[0]+'></div><div id=Table'+$i+' style="-webkit-transform:translate3D('+(35+$i*195)+'%,100%,160px)"><pre class=Plank></pre><pre class=Rod></pre></div><div id=Sh'+($i+$i+1)+' class='+S[1-$i]+' '+$tyle[1]+'></div>').appendTo('.r_div')
    l=$i%2?
      '':
      '-'
    $('<video id=TV'+$i+' style="-webkit-transform:translate3D('+(l?'-1':'17')+'0%,90%,1px) rotate('+l+'90deg)" src=vds/0.webm autoplayloop></video>').appendTo('#'+D[$i+$i+1]).css('width','400px')
    $i++}$i=0
  $('<label id=plus style=visibility:hidden;width:'+$i+';height:'+$i+';></label><div class=status style="height:13%;width:107%;visibility:hidden;-webkit-transform:translate3D(0%,202%,0px);"></div><div id=Meal_div style="height:100px;width:1680px;-webkit-transform:translate3D(10.5%,483%,270px)"></div><img id=Bar src=img/0.png style="height:39%;width:94%;-webkit-transform:translate3D(-5%,125.5%,1px)"><br><div id=fanTube><div id=Fan></div></div><marquee scrollamount=20></marquee>').appendTo('.r_div')
  while($i<14)$('<pre><label></label><h1>'+$Hs[$i++]+'</h1></pre>').appendTo('.status')
  setTimeout(function(){
    $.post(
      'php/checker.php',
      {u:$('#plus')[0].innerHTML,
      Option:1},
      function(d){$i=8
        $pEN=d!='EN'?
          8
          :0
        $('marquee')[0].innerHTML+=$M[$pEN]
        while($i>0)$('<img class=Meal src=img/'+$i+'.png style=height:100%;width:12.5%; ondragstart=z(this);CI=$(this).index() onclick=z(this) title="'+Meal[$i+$pEN]+' $'+Points[$i--]+'" draggable=true>').appendTo('#Meal_div')
        while($i<14)$('.status pre h1')[$i].innerHTML=$Hs[$pEN*2+$i++]
        $('.Meal').each(function(){
          $(this).on(
            'dragstart',
            function(){
              $like=false})
          $(this).on(
            'dragend',
            function(){
              $(this).css({
                position:'absolute',
                '-webkit-transform':'translate3D(0,140%,100px',
                left:$0+'%'})
              $8=Points[8-($cI=$(this).index())]
              $like?(
                $lb0.innerHTML=parseFloat($lb0.innerHTML)+$8,
                $Eclient[$Client].innerHTML++)
                :$Eclient[$Client+1].innerHTML--
              edge($like,$Client,$8,R($Eclient,5,0))
              OS($cI)})})})})
  $drag='"XY(event); $th=this.style; $th.position=\'absolute\';clientX($th);clientY($th)"'
  $Eclient=$('.status pre label')
  $lb0=$Eclient[1]
  $i=0
  while($i<4){Cl=$Cl[$i]
    $i<3?(
      $28=280,
      $42=42)
    :(
      $28=275,
      $42=37)
    $('<img class=Client src=img/C'+$i+'.png style="-webkit-transform:translate3D('+Cl[0]+'%,'+$28+'%,'+$42+'0px) rotateY('+Cl[1]+'deg)" title="'+(++$i)+'">').appendTo('.r_div')}
  $i=0
  $('.Client').each(function($i){
    $(this).on(
      'dragenter',
      function(){
        $like=true
        $iz=$(this).index()
        $Client=$iz+(($iz-16)-11)
        $(this).css({
          'box-shadow':'0 0 5px 7px '+D[$i+3],
          'border-radius':'5em 5em 0 0'})})
    $(this).on(
      'dragleave',
      function(){
        $like=false
        $(this).css('box-shadow','0 0 0 '+D[$i+3])})
    $(this).on(
      'drop',
      function(){
        $0=P[$(this).index()-16]
        $(this).css('box-shadow','0 0 0 '+D[$i+3])})
    $i++})
  $('.Client').hover(
    function(){
      $(this).css('box-shadow','0 0 5px 7px '+D[$(this).index()-12])},
    function(){
      $(this).css('box-shadow','0 0 0 red')})
  setTimeout(function(){
    $.post(
      'php/checker.php',
      {u:$('#plus')[0].innerHTML,
      Option:0},
      function(d){
       setTimeout(function(){
          $('marquee').remove()
          $('#fanTube, .status, .Client').css('visibility','visible')
       },
       d>1?
        5000
        :24500)})})
  $('<audio id=Song><source src=1.mp3 type=audio/mpeg></audio>').appendTo('body')/*[0].play()*/})

function z(th){th.style.zIndex++}
function OS(iE){
  setTimeout(
    function(){
      $iM=$('#Meal_div img')[iE].style
      $iM.position='initial'
      $iM.webkitTransform='translate3D(0,0,0)'},
    5000)}
function R(SI,i,tempR){
  while(i<13){
    tempR+=parseFloat(SI[i++].innerHTML)}
  return SI[13].innerHTML=tempR/2}
function edge($l,C,Pt,R){
  $l?
    l=1
    :(
      C+=1,
      Pt=0,
      l=-1)
  $.post(
    'php/saver.php',
    {Table:$('#plus')[0].innerHTML,
    Pts:Pt,
    Cust:$Hs[C],
    PlusMinus:l,
    Rate:R})}