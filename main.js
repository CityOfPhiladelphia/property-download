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

// Display appropriate resource
var params = $.deparam(window.location.search.substr(1));
if(params.resource !== undefined) {
	$('[data-resource]').hide();
	$('[data-resource="' + params.resource + '"]').css('display', 'inline-block');
}

// For datalens, show a fullscreen iframe to maintain the URL
$('[data-resource="datalens"]').click(function(e) {
	$('body *').hide();
	$('#datalens').show();
	e.preventDefault();
});