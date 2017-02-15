$(document).ready(function(){
  function toggleMenu(){
      $(".menu").toggleClass("is-open")
  };

  function anchorScroll(){
    $('a[href*="#"]:not([href="#"])').click(function(){
    if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
      toggleMenu()
      var target=$(this.hash);

      target = target.length ? target:$('[name='+this.hash.slice(1)+']');

      if(target.length){$('html, body').animate({
        scrollTop:target.offset().top
      },1000);

        return false;
      }}
    });
  }
  
  anchorScroll()

  
  $(".hamburger").on("click", toggleMenu);  
});