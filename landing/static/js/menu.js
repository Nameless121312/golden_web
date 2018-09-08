$(document).ready(function() {
	
	var check = false;
	$('#menu_butt').click(function() {
		if (check == false) {
			$('.col-8').addClass('active');
			check = true;
		}
		else {
			$('.col-8').removeClass('active');
			check = false;
		}

	});






});

