$(document).ready(function() {
	// User Profile Dropdown for animation
		$(".ds-hd-right>li").on("show.bs.dropdown", function (e) {
			$(this).find(".dropdown-menu").first().stop(true, true).show();
		});
		$(".ds-hd-right>li").on("hide.bs.dropdown", function (e) {
			$(this).find(".dropdown-menu").first().stop(true, true).hide();
		});

	// user role change on click
		$('.ds-hd-userole li').click(function() {
			$(".ds-hd-userole li").removeClass("active");
			$(this).addClass('active');
		});
		$('.ds-hd-userole li').click(function(){
			var txt = $(this).text();
			$('.ds-hd-emp').html(txt);
		});

	// Feedback Rating js
	/* 1. Visualizing things on Hover - See next part for action on click */
		$('#stars li').on('mouseover', function(){
			var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
			// Now highlight all the stars that's not after the current hovered star
			$(this).parent().children('li.star').each(function(e){
				if (e < onStar) {
					$(this).addClass('hover');
				}
				else {
					$(this).removeClass('hover');
				}
			});
		}).on('mouseout', function(){
			$(this).parent().children('li.star').each(function(e){
				$(this).removeClass('hover');
			});
		});
		/* 2. Action to perform on click */
		$('#stars li').on('click', function(){
			var onStar = parseInt($(this).data('value'), 10);
			var stars = $(this).parent().children('li.star');
			for (i = 0; i < stars.length; i++) {
				$(stars[i]).removeClass('selected');
			}
			for (i = 0; i < onStar; i++) {
				$(stars[i]).addClass('selected');
			}
			var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
			var msg = "";
			if (ratingValue == 1) {
				msg = "Poor";
			}else if (ratingValue == 2) {
				msg = "Below Average";
			}else if (ratingValue == 3) {
				msg = "Average";
			}else if (ratingValue == 4) {
				msg = "Good";
			}else if (ratingValue == 5) {
				msg = "Excellent";
			}
			responseMessage(msg);
		});
	
		function responseMessage(msg) {
			$('.message').fadeIn(200).html("<span>" + msg + "</span>");
		}
	// Rating End
	});


	$(document).ready(function(){
		$('.pay-footer ul li').click(function(){
		  $('.pay-footer li').removeClass("active");
		  $(this).addClass("active");
	  });
	  });