$(document).ready(function () {
  let i = 0;
  $(".menu-btn").click(function () {
    i++;
    $(".header").toggleClass("active");
    if (i % 2 == 1) {
      $("#menu-btn").toggleClass("fa-xmark");
    } else {
      $("#menu-btn").toggleClass("fa-bars");
    }
  });

  $(window).on("scroll load", function () {
    $(".header").removeClass("active");
    $("#menu-btn").toggleClass("fa-bars");
    i = 0;
  });

  $(".review-slider").owlCarousel({
    loop: true,
    nav: false,
    items: 3,
    autoplay: true,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      1200: {
        items: 3,
      },
    },
  });
});
