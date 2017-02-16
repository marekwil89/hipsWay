$(document).ready(function(){
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    scrollRotateItem(wScroll, '.promo', '.flare2')
  })

  function scrollRotateItem(wScroll, section , objectToRotate){
    if(wScroll > $(section).offset().top - ($(window).height())) {
      wScroll = wScroll - $(section).offset().top

      $(objectToRotate).css({
        'transform': 'rotate('+ wScroll/7 + 'deg)'
      });
    }
  }
})
