var hours = document.querySelector('.hours'),
    minutes = document.querySelector('.minutes'),
    seconds = document.querySelector('.seconds');


setInterval(function() {
  if (seconds.innerHTML <= 0) {
    seconds.innerHTML = 60;
    minutes.innerHTML -= 1;
  }

  if (minutes.innerHTML <=0) {
    minutes.innerHTML = 59;
    hours.innerHTML -= 1;
  }
  seconds.innerHTML -= 1;

  seconds.innerHTML = ('0' + seconds.innerHTML).slice(-2);
  minutes.innerHTML = ('0' + minutes.innerHTML).slice(-2);
  hours.innerHTML = ('0' + hours.innerHTML).slice(-2);

}, 1000);

//slick carousel

$(document).ready(function(){
  $('.discounts').slick({
    dots: false,
    infinite: false,
    variableWidth: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
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
          slidesToScroll: 1
        }
      }
    ]
  });
});
