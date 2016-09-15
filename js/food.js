$(document).ready(function () {

  $('.ui.radio.checkbox').checkbox();

  $("#submit").on('click', function (e) {
    e.preventDefault();

    var query = $('#search').val();
    var near = $('#near').val();
    $('#search').val('');
    $('#near').val('');



  });
});
