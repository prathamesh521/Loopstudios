$(document).ready(function(){

    // jQuery methods go here...
    console.log("Page Load");
    $('#bars-btn').on('click', function(){
        $('.bars-btn').addClass('hide');
        $('.close-btn').addClass('show');
    });
    
    $('#close-btn').on('click', function(){
        $('.bars-btn').removeClass('hide');
        $('.close-btn').removeClass('show');
    });
  
  });
  
  
  
  