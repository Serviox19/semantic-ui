$(document).ready(function () {

  $('#search').keypress(function(e) {
    if (event.which == 13) {
      e.preventDefault();

      var query = $('#search').val();
      $('#search').val('');
      console.log(query);

      var apiKey = "AIzaSyDog5xiiCVTJDq6PyLNExs_OnAfxCf4bg0";
      var apiUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
      apiUrl += "location=40.840007,-74.128968&radius=3000";
      apiUrl += "&name=" + query;
      apiUrl += "&key=" + apiKey;

      $.ajax({
        type: 'GET',
        url: apiUrl,
        dataType: 'json',
        success: function (data) {
          console.log(data);
        }
      });
    };
  });
});
