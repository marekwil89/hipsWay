$( document ).ready(function() {
  $('.plus-size').on('click', function(){
    if($(this).parent().hasClass('resize')){
      $(this).removeClass('open')
      $(this).prev('.panel-info').removeClass('show');
      return $(this).parent().removeClass('resize')
    }
    $(this).parent().siblings().removeClass('resize');
    $(this).addClass('open')
    $(this).prev('.panel-info').addClass('show');
    $(this).parent().addClass('resize');
  })
});