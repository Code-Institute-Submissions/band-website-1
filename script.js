$(document).ready(function() {
    // Add scroll functionality to navigation items
    $(document).on('click', 'a[href^="#"]', function(event){
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 1000);
	});
	
	// Show modal on send button submit then clear form
	$('#sendForm').on('submit', function(event) {
		event.preventDefault();
		$('#sendModal').modal('show');
		$('#fullname').val('');
		$('#emailaddress').val('');
		$('#bookingmessage').val('');
	})
	
	$(window).scroll(function() {
		if (window.scrollY > 600) {
			$('#back-to-top-btn').show();
		} else {
			$('#back-to-top-btn').hide();
		}
	});
});