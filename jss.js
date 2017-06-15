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


$('.flip').bind('click', function() {

    if (amountofclicks < 2) {
        amountofclicks++;
           if (amountofclicks == 1) 
           {$(this).addClass('active');
            txt = $(this).find('.back').text();
            all[0]=$(this);
           }
        }
      
       if (amountofclicks == 2) {
           
            $(this).addClass('active');
            var txt2 = $(this).find('.back').text();
            all[1]=$(this);
            if(txt==txt2)
            setTimeout(function(){
        	all[0].unbind('click');
        	all[1].unbind('click'); 
        	},1000);
            else
            setTimeout(function(){
            all[0].removeClass('active');
        	 all[1].removeClass('active');

            },1000);

            amountofclicks=0;
            

        }

 
        

    
  

});
   







});