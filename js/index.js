$(function() {

  $('.scrowDown').on('click',function(){
      $('html,body').animate({
          scrollTop: $(this).offset().top
      }, 500);
      // return false;
  });

  setInterval(function(){
    $('.tool-entry').animateCSS("bigger");
  },3000);

});
