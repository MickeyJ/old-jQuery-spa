// Jquery
$(document).ready(function(){
  
  $("#logo").click(function(){
       
       $("#wrap_main").load("home.html");
       
   }); 
    
    
  /**
   * ------------------------------------------------------
   * ABOUT NAVIGATION
   * ------------------------------------------------------
   */  
  
  // CLEAR PREVIOUS
  
   $("#about").click(function(){       
       $("#subnav").slideUp(300);      
   });
   
   $("#about").click(function(){       
       $("#tables").slideUp(300);       
   });
   
   $("#about").click(function(){       
       $("#contact_pg").slideUp(300);       
   });
    
    
  // SHOW ABOUT  
  
   $("#about").click(function(){       
       $("#bout_us").slideDown(500);      
   });
   
   
  /**
   * ------------------------------------------------------
   * GEAR NAVIGATION
   * ------------------------------------------------------
   */
  
   // CLEAR PREVIOUS
   
   $("#gear_pg").click(function(){       
       $("#bout_us").slideUp(300);    
   });
   
   $("#gear_pg").click(function(){       
       $("#contact_pg").slideUp(300);     
   });
   
   
   // SHOW GEAR
   
   $("#gear_pg").click(function(){       
       $("#subnav").slideDown(500);      
   });
   
   $("#gear_pg").click(function(){       
       $("#tables").show(500);       
   });
   
   
  /**
   * ------------------------------------------------------
   * CONTACT NAVIGATION
   * ------------------------------------------------------
   */
  
  // CLEAR PREVIOUS
  
   $("#contact").click(function(){       
       $("#bout_us").slideUp(300);       
   });
   
   $("#contact").click(function(){       
       $("#subnav").slideUp(300);       
   });
   
   $("#contact").click(function(){       
       $("#tables").slideUp(300);       
   });
   
   
   // SHOW CONTACT
   $("#contact").click(function(){       
       $("#contact_pg").slideDown(500);
   });
   
   
   /**
    * ------------------------------------------------------
    * GEAR TABLE AJAX
    * ------------------------------------------------------
    */
   
   
   $("#cass_play").click(function(){
     $("#tables").load("cassette.html");
   });
   
   $("#cd_play").click(function(){
     $("#tables").load("cdplayer.html");
   });
   
   $("#turn").click(function(){
     $("#tables").load("turntable.html");
   });
   
   $("#tuner").click(function(){
     $("#tables").load("tuners.html");
   });
   
   $("#process").click(function(){
     $("#tables").load("processors.html");
   });
   
   $("#power").click(function(){
     $("#tables").load("poweramp.html");
   });
   
   $("#preamp").click(function(){
     $("#tables").load("preamp.html");
   });
   
   $("#pre_pre").click(function(){
     $("#tables").load("pre_preamp.html");
   });
   
   $("#int_amp").click(function(){
     $("#tables").load("integ_amp.html");
   });
   
   $("#speaker").click(function(){
     $("#tables").load("speaker.html");
   });
   
   $("#eq").click(function(){
     $("#tables").load("eqs.html");
   });
   
   $("#receive").click(function(){
     $("#tables").load("receivers.html");
   });
   
   $("#misc").click(function(){
     $("#tables").load("misc.html");
   });
  
  
  
  
  
});

