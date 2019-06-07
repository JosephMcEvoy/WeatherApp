navigator.geolocation.getCurrentPosition(function(position) {
  var lat = position.coords.latitude.toFixed(2);
  var lon = position.coords.longitude.toFixed(2);
  var request = new XMLHttpRequest();
  request.open("GET", "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=3d5536d711928a9ae6c4714050cd845e&units=imperial", false);
  request.send();
  request = JSON.parse(request.responseText);
  var conditions = (request.weather[0].description[0].toUpperCase() + request.weather[0].description.slice(1));
  var temperature = ((request.main.temp).toFixed(0));
  var location = ("lat: " + lat + ", lon: " + lon);
  var icon = request.weather[0].icon;
  $(document).ready(function() {
    var units = 'f';
    $(".temperature").html(temperature + " °F");
    $(".conditions").html(conditions);
    $(".location").html(location);
    $(".icon").html('<img class="icon" src="http://openweathermap.org/img/w/' + icon + '.png"></img>');
    $("button").on('click', function() {
      if (units === 'f') {
        $(".temperature").html(((temperature - 32) * 5 / 9).toFixed(0) + " °C");
        units = 'c';
      } else {
        $(".temperature").html(temperature + " °F");
        units = 'f';
      }
    });
  });
});