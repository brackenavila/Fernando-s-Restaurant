<?php
  class C{
    public $D,$T,$today,$feature,$found,$data,$usr,$pss,$index,$lang;
    public function __construct($db,$Table,$user,$password,$lang){
      $this->D=$db; $this->T=$Table;
      $this->today=date('y-m-d');
      $this->U=$user; $this->P=$password;
      $this->lang=$lang;}
    public function Finder(){
      $this->found=mysql_select_db($this->D,mysql_connect('localhost','root',''));}
    public function makeMeSure(){
      if(!$this->found){
        mysqli_query(mysqli_connect('localhost','root',''),"CREATE DATABASE $this->D");
        $this->Finder();
        mysql_query("CREATE TABLE $this->T (INDX tinyint(3) PRIMARY KEY AUTO_INCREMENT,UID varchar(30),PSS varchar(30))");}}
    public function GatherData(){
      $gatheringData=mysql_query("SELECT * FROM $this->T WHERE UID='$this->U' AND PSS='$this->P'");
      $this->data=mysql_fetch_assoc($gatheringData);}
    public function IsNew(){
      if($this->data['UID'] == $this->U && $this->data['PSS'] == $this->P){
        $this->index = 'gamer'.$this->data['INDX'].'_'.$this->U;
        $tf=false;
      }else{
        $this->InsertNewGamer();
        mysql_query("INSERT INTO $this->index (IDIOM,DATE,PTS,LVL,RCRD,VSTxN,S1,I1,S2,I2,S3,I3,S4,I4,RATE) VALUES ('$this->lang','$this->today','0','1','0','0','0','0','0','0','0','0','0','0','0')");
        $tf=true;}
      mysql_query("UPDATE `$this->index` SET IDIOM='$this->lang'");
      $this->LANG($tf);}
    public function InsertNewGamer(){
      mysql_query("INSERT INTO $this->T (UID,PSS) VALUES ('$this->U','$this->P')");
        $this->GatherData();
        $this->index = 'gamer'.$this->data['INDX'].'_'.$this->U;
        mysql_query("CREATE TABLE $this->index (IDIOM varchar(2),DATE varchar(8) NOT NULL,PTS varchar(8) NOT NULL,LVL tinyint(4) NOT NULL,RCRD varchar(8) NOT NULL,VSTxN smallint(6) NOT NULL,S1 tinyint(4) NOT NULL,I1 tinyint(4) NOT NULL,S2 tinyint(4) NOT NULL,I2 tinyint(4) NOT NULL,S3 tinyint(4) NOT NULL,I3 tinyint(4) NOT NULL,S4 tinyint(4) NOT NULL,I4 tinyint(4) NOT NULL,RATE float NOT NULL)");}
    public function LANG($fork){
      $p=[['Very ',''],['Welcome ','Bienvenido '],['Back','de vuelta']];
      $gatheringData=mysql_query("SELECT * FROM $this->index");
      $this->data=mysql_fetch_assoc($gatheringData);
      $O=$this->data['IDIOM']!='EN'?1:0; $f=$p[1][$O];
      $fork?$f=$p[0][$O].$f:$f.=$p[2][$O];
      $this->feature=$f;}
    public function getScores(){
      mysql_query("UPDATE $this->index SET VSTxN = VSTxN+1");
      $gatheringData=mysql_query("SELECT * FROM $this->index");
      $this->data=mysql_fetch_assoc($gatheringData);
      $F=array('DATE','PTS','LVL','RCRD','VSTxN','S1','I1','S2','I2','S3','I3','S4','I4','RATE'); $C=0;?>
      <script>
        $(function(){
          $l=$('.status pre label');<?php
          while ($C<14){?>
              $l[<?php print $C; ?>].innerHTML='<?php echo $this->data[$F[$C++]]; ?>';<?php
          }?>
          $('marquee')[0].innerHTML=' <?php print $this->feature.' '.$this->U; ?>';
          $('#plus')[0].innerHTML='<?php echo $this->index; ?>'})</script><?php }
    function BunchOrBundle(){
      $this->Finder();
      $this->makeMeSure();
      $this->GatherData();
      $this->IsNew();
      $this->getScores();}} ?>
