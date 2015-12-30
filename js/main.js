$(document).ready(function(){
//Menu navigation
  $('#nav-top').children().children().click(function(){
    $('#nav-top').children().addClass('inactive').removeClass('active')
    $(this).parent().addClass('active').removeClass('inactive')
    var className = $(this).data('section')
    $('#screen').children().addClass('hidden')
    $('section[data-section="'+className+'"').removeClass('hidden')
  });
});
