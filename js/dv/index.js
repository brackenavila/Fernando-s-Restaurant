$(function(){
  $t=0,D='USR PSS text password SP EN -42.8 0 green blue LANG *****'.split(' '),$v=['GO AND PLAY','A Jugar!'],F=['CO','UK']
  while($t<2)$('<input type='+D[$t+2]+' id='+D[$t]+' name='+D[$t]+' placeholder='+D[11*$t++]+" style='box-shadow:0 0 0 #0ff' onfocus='bx(this.value),$Inp=this.style,$Inp.webkitAnimationName=\"box\"+$bx' spellcheck=false></input><br>").appendTo('#c')
  $('<input type=hidden id=LANG name=LANG value=EN></input><input type=submit value="'+$v[0]+'"> </input><center></center>').appendTo('#c')
  $C=$('center')[0].style
  $c=$('center')
  $i=$('input')
  while($t>0)$('<label id='+D[$t+3]+'>'+D[--$t+4]+'</label>').appendTo('center')
  $('center label').each(
    function(){
      $(this).click(
        function(){
          Anime(D[4+$t],D[6+$t],D[8+$t])})})
  $i.css('webkitAnimationName','_')})

function Anime(l,x,t){var gb//green or blue
  $('#LANG')[0].value=l
  $('#c input')[3].value=$v[1-$t]
  $C.webkitTransform='translateX('+x+'%)'
  $i[1].style.background=$i[0].style.background='linear-gradient(black,dark'+t+','+t+',dark'+t+',black)'
  gb=t=='blue'?
    'rgba(0,0,100,.9)'
    :'rgba(0,100,0,.9)'
  $C.background='linear-gradient(transparent,'+gb+',transparent), url(imgs/'+F[$t]+'.jpg)'
  $('#'+l).siblings().css({
    background:0,
    'box-shadow':'0 0 0 dark'+t,
    opacity:.5,
    '-webkit-animation':'_ 0s'}).siblings().css({
      background:'radial-gradient('+t+',dark'+t+',black,transparent)',
      opacity:1,'-webkit-animation':'box0 1s'})
  setTimeout(function(){
    $('#'+l).css('box-shadow','dark'+t+' 0 0 25px 7px')},
    1000)
  $t=$t==0?
    1
    :0}
function bx(th){
  $bx=th===''?
    1
    :0}