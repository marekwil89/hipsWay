$(window).on('load', function() {
  $('.pre-loader').delay(2500).fadeOut('slow'); 
});

$(document).ready(function(){
  var startCount = true;

  projectsLoad()
  anchorScroll()

  $(".project").on("click", openModal);
  $(".close").on("click", closeModal);
  $(".hamburger").on("click", toggleMenu);

  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    scrollShowItems(wScroll, '.projects', '.project')
    scrollShowItems(wScroll, '.icons', '.icon-box')
    scrollMoveItem(wScroll, '.promo', '.flare')
  })

  function toggleMenu(){
      $(".menu").toggleClass("is-open")
  };

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

  function openModal(event){
    var id = $(this).attr('id')
    $(".modal-title").text(data[id].name)
    $(".modal-descr").text(data[id].descr)
    $(".modal-date").text(data[id].date)
    $(".modal-img").attr("src","assets/images/project"+ id +".jpg");
    $(".modal").addClass("opened")
  }

  function closeModal(){
    $(".modal").removeClass("opened")
  }

  function projectsLoad(){
    for(i = 0; i < data.length; i++){
      $(".projects").append('<article  class="project img-config project'+i+'" id="'+ i +'"><span class="overlay"></span><i class="fa fa-4x fa-search-plus"></i></article>')
    }
  }

  function anchorScroll(){
    $('a[href*="#"]:not([href="#"])').click(function(){
    if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){

      var target=$(this.hash);

      target = target.length ? target:$('[name='+this.hash.slice(1)+']');

      if(target.length){$('html, body').animate({
        scrollTop:target.offset().top
      },1000);

        return false;
      }}
    });
  }
  
});

