$(document).ready(function(){

  $('.discounts').slick({
    dots: false,
    infinite: true,
    variableWidth: false,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });

  $('.products').slick({
    dots: false,
    infinite: true,
    variableWidth: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });

// Clock timer
  setInterval(function() {
    if ($('.seconds').html() <= 0) {

      $('.seconds').html(60);
      $('.minutes').html( $('.minutes').html() - 1 );
    }

    if ($('.minutes').html() <=0) {

      $('.minutes').html(59);
      $('.hours').html( $('.hours').html() - 1 );
    }

    $('.seconds').html( $('.seconds').html() - 1 );

    $('.seconds').html( ('0' + $('.seconds').html()).slice(-2) );
    $('.minutes').html( ('0' + $('.minutes').html()).slice(-2) );
    $('.hours').html( ('0' +   $('.hours').html()).slice(-2) );

  }, 1000);

$('.hamburger').click(function(){
  $('.top-links').toggleClass('active')
});
});
