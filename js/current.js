// The API url and the city we want to check...
var url = "http://api.openweathermap.org/data/2.5/weather?callback=?";
var city = "Toronto,ON";
var units = "metric";


// Go call the URL and pass 2 parameters (q=city, units=metric/imperial)
$.getJSON(url, {'q':city, 'units':units, 'APPID':'6dec5fb891e6e243c9d8c20351998e67'}, function(data)
{

	console.log(data);

});
