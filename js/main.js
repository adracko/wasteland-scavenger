$(document).ready(function(){
  $('#nav-top').children().children().click(function(){
    $('#nav-top').children().addClass('inactive').removeClass('active')
    $(this).parent().addClass('active').removeClass('inactive')

  });
});
