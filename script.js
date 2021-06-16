var color,
			pageWrap = document.getElementById( 'pagewrap' ),
			currentPage = 0,
			home = $('#home');

		$('.transitions a').on('click', function(event){

			event.preventDefault();
			
			color = $(this).data('color');

			if(color == 'yellow'){

				$('.page-loader').css('visibility','visible');
				$('.page-loader .water').css('background','#e7b600').addClass('water-animation yellow');

				setTimeout( function() {
					home.removeClass('show');
					$('#page-1').addClass('show');
				}, 2300 );

				setTimeout( function() {
					$('.page-loader .water').removeClass('water-animation');
					$('.page-loader').css('visibility','hidden');
				}, 4000);

			}

			if(color == 'blue'){

				$('.page-loader').css('visibility','visible');
				$('.page-loader .water').css('background','#03beae').addClass('water-animation blue');

				setTimeout( function() {
					home.removeClass('show');
					$('#page-2').addClass('show');
				}, 2300 );

				setTimeout( function() {
					$('.page-loader .water').removeClass('water-animation');
					$('.page-loader').css('visibility','hidden');
				}, 4000);

			}

			if(color == 'orange'){

				$('.page-loader').css('visibility','visible');
				$('.page-loader .water').css('background','#ff6600').addClass('water-animation orange');

				setTimeout( function() {
					home.removeClass('show');
					$('#page-3').addClass('show');
				}, 2300 );

				setTimeout( function() {
					$('.page-loader .water').removeClass('water-animation');
					$('.page-loader').css('visibility','hidden');
				}, 4000);

			}

			if(color == 'green'){

				$('.page-loader').css('visibility','visible');
				$('.page-loader .water').css('background','#2ac93e').addClass('water-animation green');

				setTimeout( function() {
					home.removeClass('show');
					$('#page-4').addClass('show');
				}, 2300 );

				setTimeout( function() {
					$('.page-loader .water').removeClass('water-animation');
					$('.page-loader').css('visibility','hidden');
				}, 4000);

			}
			
			if(color == 'pink'){

				$('.page-loader').css('visibility','visible');
				$('.page-loader .water').css('background','#ff3fb9').addClass('water-animation pink');

				setTimeout( function() {
					home.removeClass('show');
					$('#page-5').addClass('show');
				}, 2300 );

				setTimeout( function() {
					$('.page-loader .water').removeClass('water-animation');
					$('.page-loader').css('visibility','hidden');
				}, 4000);

			}


		});

		$('.close').on('click', function(){

			$('.page-loader').css('visibility','visible');
			$('.page-loader .water').addClass('water-animation');

			setTimeout( function() {
				$('.close').parents('.container').removeClass('show');
				home.addClass('show');
			}, 2300);

			setTimeout( function() {
				$('.page-loader .water').removeClass();
				$('.page-loader #water').addClass('water');
				$('.page-loader').css('visibility','hidden');
			}, 4000)

		});