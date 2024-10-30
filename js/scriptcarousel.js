$(document).ready(function() {
  var owl = $('#slider-produit');
  owl.owlCarousel({
      items: 5,
      loop: true,
      margin: 20,
      autoplay: true,
      pagination: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsiveClass: true,
      responsive: {
          0: {
              items: 2,
              nav: true
          },
          600: {
              items: 2,
              nav: true
          },
          1000: {
              items: 5,
              nav: true,
          }
      }
  });
  var owl1 = $('#slider-produit-sale');
  owl1.owlCarousel({
      items: 5,
      loop: true,
      margin: 20,
      autoplay: true,
      pagination: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsiveClass: true,
      responsive: {
          0: {
              items: 2,
              nav: true
          },
          600: {
              items: 2,
              nav: true
          },
          1000: {
              items: 5,
              nav: true,
          }
      }
  });
});