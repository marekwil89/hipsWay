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
    showItems(wScroll, '.projects', '.project')
    showItems(wScroll, '.icons', '.icon-box')

    if(wScroll > $('.stats').offset().top - ($(window).height()/1.9)){
      countMe('.count1', '+');
      countMe('.count2', '/160');
      countMe('.count3');
      countMe('.count4', '+');
      startCount = false;
    }
  })


  function countMe(element, add){
    
    if(startCount == true){
      var plus = '';

       if(add){
        plus = add;
       }

       var finish = $(element).attr('finish');
       var start = $(element).attr('start');
       var speed = $(element).attr('speed');
       var count = setInterval(function(){
        start++;
        if(start == finish){
          clearInterval(count);
        }
        $(element).html(start + plus);
      }, speed);
    }
  }

  function toggleMenu(){
      $(".menu").toggleClass("is-open")
  };

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

  function showItems(wScroll, box, item){
    if(wScroll > $(box).offset().top - ($(window).height()/20)){
      $(item).each(function(i){
        setTimeout(function(){
          $(item).eq(i).addClass('is-showing')
        }, 300 * i)
      })
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

