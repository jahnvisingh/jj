$(document).ready(function(){
var all=new Array();
var counter=0;
var count=0;
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
$("#"+index).click(function(){ $(this).css({"background-color":"white","text-align":"center","font-size":"50px"}).text(item);
	                            all[counter]=$(this);
	                            counter++; 

	          if(counter==2)

        {   

             if(all[0].text()==all[1].text())
    	   {  setTimeout(function(){
    	   	  all[0].css({"font-size":"0px"});
              all[1].css({"font-size":"0px"});
              alert("success!!");
              },1000);
    	     count++;
              

          }
          else
           { setTimeout(function(){
           	 all[0].css({"font-size":"0px","background-color":"#d3d3d3"});
           	 all[1].css({"font-size":"0px","background-color":"#d3d3d3"});
           	 alert("failure!!");
             },1000);
           }
        }

        }); 

});


 









});


























