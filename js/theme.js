var btn = document.getElementById("theme-button");
var link = document.getElementById("theme-link");
btn.addEventListener("click", function () {
  ChangeTheme();
});
$(document).ready(function () {
  ChangeTheme();
});
function ChangeTheme() {
  let lightTheme = "css/styles.css";
  let darkTheme = "css/dark.css";

  var currTheme = link.getAttribute("href");
  var theme = "";

  if (currTheme == lightTheme) {
    currTheme = darkTheme;
    theme = "dark";
  } else {
    currTheme = lightTheme;
    theme = "style";
  }

  link.setAttribute("href", currTheme);
}
