$(function () {
  var headerTop = $(".header__burger");
  var doc = $(document);

  function headerFixed() {
    var threshold = doc.scrollTop() > 150;

    if (threshold) {
      headerTop.addClass("scrolled");
    } else {
      headerTop.removeClass("scrolled");
    }
  }
  $(window).on("scroll", headerFixed);

  headerFixed();

  $(".header__link, .logo, .footer__link").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate(
      {
        scrollTop: top,
      },
      1500
    );
  });

  $(".accesories__slider").slick({
    infinite: true,
    arrows: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          centerPadding: "40px",
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          centerPadding: "40px",
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".boosted-rev__video-link").fancybox();

  $(".burger").on("click", function () {
    $(".burger").toggleClass("burger--active");
    $(".header__list").toggleClass("header__list--active");
    $("body").toggleClass("lock");
  });

  $(".header__link, .header__logo").on("click", function () {
    $(".burger").removeClass("burger--active");
    $(".header__list").removeClass("header__list--active");
    $("body").removeClass("lock");
  });
});
