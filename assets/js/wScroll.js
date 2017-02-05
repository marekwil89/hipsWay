$(document).ready(function(){
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    scrollShowItems(wScroll, '.projects', '.project')
    scrollShowItems(wScroll, '.icons', '.icon-box')
    scrollMoveItem(wScroll, '.promo', '.flare')
    scrollRotateItem(wScroll, '.promo', '.flare2')
  })

  function scrollMoveItem(wScroll, section , objectToMove){
    if(wScroll > $(section).offset().top - ($(window).height())) {
      wScroll = wScroll - $(section).offset().top

      $(objectToMove).css({
        'transform': 'translateX('+ wScroll +'px)'
      });
    }
  }

  function scrollRotateItem(wScroll, section , objectToRotate){
    if(wScroll > $(section).offset().top - ($(window).height())) {
      wScroll = wScroll - $(section).offset().top

      $(objectToRotate).css({
        'transform': 'rotate('+ wScroll/7 + 'deg)'
      });
    }
  }

  function scrollShowItems(wScroll, section, objectToMove){
    if(wScroll > $(section).offset().top - ($(window).height()/2)){
      $(objectToMove).each(function(i){
        setTimeout(function(){
          $(objectToMove).eq(i).addClass('is-showing')
        }, 300 * i)
      })
    }
  }

})