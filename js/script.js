 $(document).ready(function() {
	$('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
});


//youtube videos


var player;

function onYouTubePlayerAPIReady() {
  player = new YT.Player('player', {
    playerVars: {
      'autoplay': 1,
      'controls': 0,
      'autohide': 1,
      'wmode': 'opaque',
      'showinfo': 0,
      'loop': 1,
      'mute': 1,
      //'start': 15,
      //'end': 110,
      'playlist': 'krCBFXtEZ84'
    },
    videoId: '1Lct7c0ZZ5s',
    events: {
      'onReady': onPlayerReady
    }
  });

}

function onPlayerReady(event) {
  event.target.mute();
  $('#text').fadeIn(400);
  //why this? Well, if you want to overlay text on top of your video, you
  //will have to fade it in once your video has loaded in order for this
  //to work in Safari, or your will get an origin error.
}

//this pauses the video when it's out of view, just wrap your video in .m-//video
$(window).scroll(function() {
  var hT = $('.m-video').height(),
      wS = $(this).scrollTop();
  if (wS > hT) {
    player.pauseVideo();
  }
  else {
    player.playVideo();
  }
});

$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("active");
        }
    });
});

  $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll < 240){
            $('.fixed-top').css('background', 'transparent');
        } else{
            $('.fixed-top').css('background', 'rgba(23, 162, 184, 0.9)');
        }
    });