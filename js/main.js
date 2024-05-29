setGuestInLocalStorage();
checkUser();
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
//guest
async function getCurrentUserData() {
  try {
    const data = localStorage.getItem("currUser");
    if (!data) {
      throw new Error("No data found in localStorage");
    }
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}
//check user
function checkUser() {
  const data = localStorage.getItem("currUser");
  if (data == "user") {
    document.querySelector(".boosted-rev__wrapper").classList.remove("hidden");
    document.querySelector(".exit-button").classList.remove("hidden");
    document.querySelector(".header__link-avatar").classList.add("hidden");
  } else if (data == "admin") {
    document.querySelector(".boosted-rev__list").classList.remove("hidden");
    document.querySelector(".boosted-rev__wrapper").classList.remove("hidden");
    document.querySelector(".exit-button").classList.remove("hidden");
    document.querySelector(".header__link-avatar").classList.add("hidden");
  } else {
    return;
  }
}

async function setGuestInLocalStorage() {
  let currUserData = await getCurrentUserData();
  if (currUserData != null || currUserData != undefined) {
    return;
  }
  localStorage.setItem("currUser", "guest");
}
//map
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("cover").addEventListener("click", function () {
    document
      .getElementById("footer-map")
      .classList.toggle("footer-map-visible");
    document.querySelector("body").classList.toggle("body-scroll");
    document.getElementById("cover").classList.toggle("cover-button");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("button-close")
    .addEventListener("click", function () {
      document
        .getElementById("footer-map")
        .classList.toggle("footer-map-visible");
      document.querySelector("body").classList.toggle("body-scroll");
      document.getElementById("cover").classList.toggle("cover-button");
    });
});
//logout
document.getElementById("exit").addEventListener("click", function () {
  localStorage.setItem("currUser", "guest");
  location.reload();
});
//pagination
// Получаем элементы
const boostedRevContainer = document.querySelector(".boosted-rev");
const images = document.querySelectorAll(".image");
const paginationButtons = document.querySelectorAll(".pagination-button");

let currentIndex = 0; // Текущий индекс изображения

// Функция для изменения изображения и активной кнопки
function changeImage(index) {
  // Удаляем класс 'active' у текущего изображения и кнопки
  images[currentIndex].classList.remove("active");
  paginationButtons[currentIndex].classList.remove("active");

  // Добавляем класс 'active' для выбранного изображения и кнопки
  images[index].classList.add("active");
  paginationButtons[index].classList.add("active");

  // Обновляем текущий индекс
  currentIndex = index;
}

// Обработчик события клика для кнопок пагинации
paginationButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    changeImage(index); // Изменение изображения и активной кнопки
  });
});

// Изменение изображения и активной кнопки для изначального индекса
changeImage(currentIndex);
