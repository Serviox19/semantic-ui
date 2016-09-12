$(document).ready(function () {

  $('#search').keypress(function(e) {
    if (event.which == 13) {
      e.preventDefault();

      var query = $('#search').val();
      $('#search').val('');
      console.log(query);

      var apiKey = "AIzaSyAZQHq7l89tNlgeL8ZMO3CP3JGY0Jg1noo";
      var apiUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
      apiUrl += "location=40.840007,-74.128968&radius=3000";
      apiUrl += "&name=" + query;
      apiUrl += "&key=" + apiKey;

      $.ajax({
        type: "GET",
        url: apiUrl,
        dataType: 'json',
        success: function (data) {
          console.log(JSON.stringify(data));
        }
      });
    };
  });
});
