$(document).ready(function() {

	function heightDetect(){
		var widthW = $(window).width();
		var heightW = $(window).height();

		console.log(widthW);
		console.log(heightW);
		
		$('.b-transparent').css({ width: widthW, height: heightW});
	};

	heightDetect();

	$(window).resize(function(){
		heightDetect();
	});

$(document).keypress(function(e){
    if (e) {keyCode = e.which} else if (event) {keyCode=event.keyCode} else {return} 
    if (keyCode == 13 ) {
      console.log('enter')
      $(".pixel-perfect").toggle();
    }
  });


if($('.b-map').length > 0) {

	var kiev_map = $('.b-map__kiev')[0],
		mosckow_map = $('.b-map__mosckow')[0],	
		map,
		map2,
		latLngKiev = { lat: 50.432467, lng: 30.5423383 },
		latLngMosckow = { lat: 55.7126193, lng: 37.663339 };

	console.log(mosckow_map);
	console.log(kiev_map);
	console.log(latLngKiev);
	console.log(latLngMosckow);
	
	var Options_kiev = {
		center: new google.maps.LatLng(50.432467, 30.5423383),
		zoom: 19,
		scrollwheel: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	
	var Options_mosckow = {
		center: new google.maps.LatLng(55.7126193, 37.663339),
		zoom: 19,
		scrollwheel: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	
	

	map = new google.maps.Map(kiev_map, Options_kiev);
	map2 = new  google.maps.Map(mosckow_map, Options_mosckow);

	var markerImage = new google.maps.MarkerImage(
	    'img/marker.png',
	    new google.maps.Size(40,40),
	    new google.maps.Point(0,0),
	    new google.maps.Point(0,40)
	);
	var marker = new google.maps.Marker({
		position: latLngMosckow,
		map: map2,
		title:"Hello World 2!",
		icon: markerImage
	});

	var marker2 = new google.maps.Marker({
		position: latLngKiev,
		map: map,
		title:"Hello World!",
		icon: markerImage
	});
}
	$('.b-portfolio__item').magnificPopup(
		{
			type:'image',
			gallery: {
				enabled: true
			}
		}
	);
});