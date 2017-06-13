$(document).ready(function(){
var counter=0;
var turns=0;
var count=0;
var all=new Array();
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

letter.forEach(function(item,index){
	$("#"+index).text(item);
 });

$(document).on("click", ".flip", function () {
    $(this).toggleClass('hover');
});








});