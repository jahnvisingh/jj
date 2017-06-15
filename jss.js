$(document).ready(function(){
var counter=0;
var turns=0;
var count=0;
var amountofclicks=0;
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


$('.flip').bind('click', function () {
        if (amountofclicks < 2) {
            amountofclicks++;
            if (amountofclicks == 1) {
                $(this).addClass('active');
                txt = $(this).find('.back').text();
                all[0] = $(this);
            }
        }

        if (amountofclicks == 2){
            if ($(this).hasClass('active')) {
                all.length = 0;
                $(this).removeClass('active');
            }
            else {turns++;
            	document.getElementById("turns").innerHTML="TURNS"+"="+turns; 
                $(this).addClass('active');
                var txt2 = $(this).find('.back').text();
                all[1] = $(this);
                if (txt == txt2){
                    count++;
                    document.getElementById("result").innerHTML="PAIRED CARDS FOUND"+"="+count;
                	setTimeout(function () {
                        all[0].unbind('click');
                        all[1].unbind('click');
                    }, 500);}
                else
                    setTimeout(function () {
                        all[0].removeClass('active');
                        all[1].removeClass('active');
                       }, 500);}
                 amountofclicks = 0;
                 if(count==8){
               document.getElementById("win").innerHTML="GAME FINISHED!!";}
                }
                 





    });


$("button").click(function(){
  location.reload();
})


  







});