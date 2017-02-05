$(document).ready(function(){
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    scrollShowItems(wScroll, '.projects', '.project')
    scrollShowItems(wScroll, '.icons', '.icon-box')
    scrollMoveItem(wScroll, '.promo', '.flare')
  })

  function scrollMoveItem(wScroll, section , objectToMove){
    if(wScroll > $(section).offset().top - ($(window).height())) {
      wScroll = wScroll - $(section).offset().top
      $(objectToMove).css({'transform': 'translateX('+ wScroll +'px)'});
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