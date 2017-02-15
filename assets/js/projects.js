$(document).ready(function(){
  function projectsLoad(){
    for(i = 0; i < data.length; i++){
      $(".projects").append('<article  class="project img-config project'+i+'" id="'+ i +'"><span class="overlay"></span><i class="fa fa-4x fa-search-plus"></i></article>')
    }
  }

  projectsLoad()
})