const i18Obj = {
  en: {
    "header-top-text": "Financing option available at checkout.",
    "electric-skateboards": "Electric Skateboards",
    "electric-scooters": "Electric Scooters",
    accessories: "Accessories",
    "gift-card": "Gift Card",
    "more-info": "More Info",
    "welcome-title": "Welcome to Boosted USA",
    "welcome-text":
      "The Holy Grail of Electric Skateboards and One REVolutionary Scooter",
    "looking-title": "Looking for Boosted Boards, or Boosted Revs?",
    "boosted-revs": "BOOSTED REVS",
    "boosted-rev": "Boosted Rev",
    "boosted-boards": "BOOSTED BOARDS",
    "looking-text":
      "Boosted USA acquired all of the remaining inventory directly from Boosted. This means we have the electric skateboards and scooter you all love and have been looking for. Get your hands on these highly sought after products while supplies last.",
    "shop-boosted": "Shop Boosted Boards",
    "in-stock": "In Stock",
    "electric-skateboards-title": "Electric Skateboards",
    "electric-skateboards-text":
      " Cruising campus, going to work or getting through that long list of errands has never been easier or more fun.",
    "shop-now": "Shop Now",
    "shop-now2": "Shop Now",
    "boosted-rev-text":
      "There's never been an electric scooter quite like this. Speedpast traffic at 24 mph. Go up to 22 miles on a single charge.You'll get there in no time at all. Stop and go with the roll ofyour thumb. Its intuitive design means there’s almost nolearning curve.",
    "accessories-title": "Looking for Accessories?",
    "go-fast1": "Go Fast",
    "go-far1": "Go Far",
    "go-safe1": "Go Safe",
    build1: "Build To Last!",
    "go-fast2":
      "Boosted is known for its premium performance boards offering a next-level experience.",
    "go-far2":
      "With optional extended battery life, you can get wherever you need to go reliably.",
    "go-safe2":
      "Safety is a #1 priority for Boosted, always wear a helmet when riding.",
    build2:
      "Boosted products are engineered to last for years and are extremely reliable.",
    explore: "Explore",
    "electric-scooters": "Electric Scooters",
    warranty: "Warranty",
    guide: "Quick Start Guide",
    contact: "Contact",
    accessibility: "Accessibility Statement",
    about: "About Boosted USA",
    "footer-text":
      "Boosted empowers people everywhere to commute across their cities, campuses, and communities in ways that were never before possible. Boosted is solving one of the biggest problems people face each day: transportation.",
  },
  ru: {
    "header-top-text": "Вариант финансирования доступен при оформлении заказа",
    "electric-skateboards": "Электроскейтборды",
    "electric-scooters": "Электроскутеры",
    accessories: "Аксессуары",
    "gift-card": "Подарочная Карта",
    "more-info": "Больше Информации",
    "welcome-title": "Добро пожаловать в Boosted USA",
    "welcome-text":
      "Святой Грааль электрических скейтбордов и одного революционного самоката",
    "looking-title": "Ищете Скейтборды Boosted, или Самокаты Boosted?",
    "boosted-revs": "САМОКАТЫ BOOSTED",
    "boosted-rev": "Самокат Boosted",
    "boosted-boards": "СКЕЙТБОРДЫ BOOSTED",
    "looking-text":
      "Boosted USA приобрела весь оставшийся инвентарь непосредственно у Boosted. Это означает, что у нас есть электрические скейтборды и самокаты, которые вы все любите и которые так долго искали. Приобретите эти востребованные товары, пока их хватает.",
    "shop-boosted": "Покупайте скейтборды",
    "in-stock": "В наличии",
    "electric-skateboards-title": "Электрические скейтборды",
    "electric-skateboards-text":
      "Путешествовать по кампусу, ходить на работу или выполнять длинный список поручений еще никогда не было так просто и весело.",
    "shop-now": "Купить Сейчас",
    "shop-now2": "Купить",
    "boosted-rev-text":
      "Такого электрического скутера еще не было. Разгоняйтесь в пробках со скоростью 24 мили в час. Проезжайте до 22 миль на одной зарядке.Вы доберетесь до места в кратчайшие сроки. Остановитесь и продолжайте движение одним движением большого пальца. Его интуитивно понятный дизайн практически не требует обучения.",
    "accessories-title": "Ищете Акссесуары?",
    "go-fast1": "Быстро",
    "go-far1": "Далеко",
    "go-safe1": "Безопасно",
    build1: "Качественно",
    "go-fast2":
      "Компания Boosted известна своими платами премиум-класса, предлагающими возможности нового уровня.",
    "go-far2":
      "Благодаря дополнительному увеличенному времени автономной работы вы сможете надежно добраться туда, куда вам нужно.",
    "go-safe2":
      "Безопасность является приоритетом №1 для Boosted, поэтому всегда надевайте шлем во время езды.",
    build2:
      "Изделия Boosted спроектированы таким образом, чтобы прослужить долгие годы, и отличаются исключительной надежностью.",
    explore: "Исследуйте",
    "electric-scooters": "Электросамокаты",
    warranty: "Гарантия",
    guide: "Краткое руководство по началу работы",
    contact: "Контакты",
    accessibility: "Заявление о специальных возможностях",
    about: "О нас",
    "footer-text":
      "Boosted позволяет людям во всем мире передвигаться по своим городам, кампусам и общинам способами, которые раньше были невозможны. Boosted - это решение одной из самых больших проблем, с которыми люди сталкиваются каждый день. день: транспортировка.",
  },
};
let currentLanguage = "en";
$(document).ready(function () {
  toggleLanguage();
});
function toggleLanguage() {
  const elements = document.querySelectorAll("[data-i18n]");
  const languageIcon = document.getElementById("language-icon");

  if (currentLanguage === "en") {
    currentLanguage = "ru";
    languageIcon.src = "images/ru.png";
  } else {
    currentLanguage = "en";
    languageIcon.src = "images/en.png";
  }

  elements.forEach(function (element) {
    const key = element.dataset.i18n;
    element.textContent = i18Obj[currentLanguage][key];
  });
}

// Вызываем функцию getTranslate(), чтобы установить начальный язык
toggleLanguage();
