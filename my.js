$(document).ready(function(){
 var selectletter=["A","A","B","B","C","C","D","D","E","E","F","F","G","G","H","H"];
 var counter=0;
 var all=new Array();
 var fun=function()
   { 
     $(this).css({"background-color":"white","text-align":"center","font-size":"50px"}).html(selectletter[Math.floor(Math.random()*16)]);
     
     all[counter]=$(this);
     counter++;
       if(counter==2)
        { if(all[0].text()==all[1].text())
    	   {  
              
              setTimeout(function(){
    	   	  all[0].css({"font-size":"0px"});
              
              all[1].css({"font-size":"0px"});

              alert("success!!");
              },1000);
              

          }
          else
           { 
           	 
             setTimeout(function(){
           	 all[0].css({"font-size":"0px","background-color":"#d3d3d3"});
           	 
             all[1].css({"font-size":"0px","background-color":"#d3d3d3"});

             alert("failure!!");
             },1000);
            

       	   }
         }
  }

  $("td").on('click',fun);
   

});