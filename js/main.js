$(document).ready(function(){
  $('#nav-top').children().children().click(function(){
    $('#nav-top').children().addClass('inactive').removeClass('active')
    $(this).parent().addClass('active').removeClass('inactive')
    var className = $(this).data('section')
    var data = $('#screen').children().data('section') === className
    /**$('#screen').children().addClass('hidden')**/
    $(data).append('hidden')
  });
});
