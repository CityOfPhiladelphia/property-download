// Show timestamp
$('.timestamp').text(new Date().toString());

// Fetch IP & show it
$.getJSON('https://api.ipify.org?format=json')
.done(function(response) {
	if(response.ip !== undefined) {
		$('.ip').text(response.ip);
	}
})
.fail(function() {
	$('.ip').text($('.ip').attr('data-default'));
});

// Log the visit (should return 404 but still logs the request)
$.ajax('https://api.phila.gov/opa/v1.1/download');