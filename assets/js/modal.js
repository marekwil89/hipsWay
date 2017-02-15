$(document).ready(function(){

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
  $(".close").on("click", closeModal);
  $(".project").on("click", openModal);
})