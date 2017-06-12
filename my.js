$(document).ready(function(){

var letter=["A","A","B","B","C","C","D","D","E","E","F","F","G","G","H","H"];

Array.prototype.shuffle=function(){
    var i=this.length,j,temp;
    while(--i>0)
    {
      j=Math.floor(Math.random()*(i+1));
      temp=this[j];
      this[j]=this[i];
      this[i]=temp;
    }
}

letter.shuffle();
$("#0").click(function(){ $(this).css({"background-color":"white","text-align":"center","font-size":"50px"}).html(letter[0]); }); 
$("#1").click(function(){ $(this).css({"background-color":"white","text-align":"center","font-size":"50px"}).html(letter[1]); }); 
$("#2").click(function(){ $(this).css({"background-color":"white","text-align":"center","font-size":"50px"}).html(letter[2]); }); 
$("#3").click(function(){ $(this).css({"background-color":"white","text-align":"center","font-size":"50px"}).html(letter[3]); }); 
$("#4").click(function(){ $(this).css({"background-color":"white","text-align":"center","font-size":"50px"}).html(letter[4]); }); 
$("#5").click(function(){ $(this).css({"background-color":"white","text-align":"center","font-size":"50px"}).html(letter[5]); }); 
$("#6").click(function(){ $(this).css({"background-color":"white","text-align":"center","font-size":"50px"}).html(letter[6]); }); 
$("#7").click(function(){ $(this).css({"background-color":"white","text-align":"center","font-size":"50px"}).html(letter[7]); }); 
$("#8").click(function(){ $(this).css({"background-color":"white","text-align":"center","font-size":"50px"}).html(letter[8]); }); 
$("#9").click(function(){ $(this).css({"background-color":"white","text-align":"center","font-size":"50px"}).html(letter[9]); }); 
$("#10").click(function(){ $(this).css({"background-color":"white","text-align":"center","font-size":"50px"}).html(letter[10]); }); 
$("#11").click(function(){ $(this).css({"background-color":"white","text-align":"center","font-size":"50px"}).html(letter[11]); }); 
$("#12").click(function(){ $(this).css({"background-color":"white","text-align":"center","font-size":"50px"}).html(letter[12]); }); 
$("#13").click(function(){ $(this).css({"background-color":"white","text-align":"center","font-size":"50px"}).html(letter[13]); }); 
$("#14").click(function(){ $(this).css({"background-color":"white","text-align":"center","font-size":"50px"}).html(letter[14]); }); 
$("#15").click(function(){ $(this).css({"background-color":"white","text-align":"center","font-size":"50px"}).html(letter[15]); }); 












});


























