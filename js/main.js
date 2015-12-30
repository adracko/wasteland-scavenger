$(document).ready(function(){
//Color on start
  less.modifyVars({
    '@r': $('#red-range').val(),
    '@g': $('#green-range').val(),
    '@b': $('#blue-range').val()
  });
});
//Menu navigation
  $('#nav-top').children().children().click(function(){
    $('#nav-top').children().addClass('inactive').removeClass('active')
    $(this).parent().addClass('active').removeClass('inactive')
    var className = $(this).data('section')
    $('#screen').children().addClass('hidden')
    $('section[data-section="'+className+'"').removeClass('hidden')
  });
//Color change
  $('input[type="range"]').mouseup(function(){
    less.modifyVars({
      '@r': $('#red-range').val(),
      '@g': $('#green-range').val(),
      '@b': $('#blue-range').val()
    });
  });
