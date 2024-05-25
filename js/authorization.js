document.addEventListener("DOMContentLoaded", function () {
  var loginForm = document.getElementById("login-form");
  var registerForm = document.getElementById("register-form");
  var button = document.getElementById("button");

  button.addEventListener("click", function () {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
  });

  var phoneRegex = /^\+375\d{9}$/;
  var phoneInput = document.getElementById("phone-register");
  var phoneError = document.getElementById("phone-error");

  phoneInput.addEventListener("input", function () {
    var phoneNumber = phoneInput.value.trim();
    if (phoneRegex.test(phoneNumber)) {
      phoneError.textContent = "";
      phoneError.style.display = "none"; // Скрыть сообщение об ошибке
    } else {
      phoneError.textContent = "Please enter a valid Belarusian phone number";
      phoneError.style.display = "block"; // Показать сообщение об ошибке
    }
  });

  var dobInput = document.getElementById("dob-register");
  var dobError = document.getElementById("dob-error");

  dobInput.addEventListener("input", function () {
    var today = new Date();
    var dob = new Date(dobInput.value);
    var age = today.getFullYear() - dob.getFullYear();

    if (age < 16) {
      dobError.textContent = "You must be at least 16 years old to register";
      dobError.style.display = "block"; // Показать сообщение об ошибке
    } else {
      dobError.textContent = "";
      dobError.style.display = "none"; // Скрыть сообщение об ошибке
    }
  });

  var passwordInput = document.getElementById("password-register");
  var confirmPasswordInput = document.getElementById(
    "confirm-password-register"
  );
  var passwordError = document.getElementById("password-error");

  passwordInput.addEventListener("input", validatePassword);
  confirmPasswordInput.addEventListener("input", validatePassword);

  function validatePassword() {
    var password = passwordInput.value;
    var confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
      passwordError.textContent = "Passwords do not match";
      passwordError.style.display = "block"; // Показать сообщение об ошибке
    } else {
      passwordError.textContent = "";
      passwordError.style.display = "none"; // Скрыть сообщение об ошибке
    }
  }

  generateButton.addEventListener("click", generateLogin);

  var nicknameAttempts = 5;
  var nicknameInput = document.getElementById("nickname-register");
  var nicknameError = document.getElementById("nickname-error");
  // Генерация случайного логина
  function generateLogin() {
    const randomLogin = "user" + Math.floor(Math.random() * 10000);
    loginInput.value = randomLogin;
  }
  function checkNicknameAvailability() {
    var nickname = nicknameInput.value.trim();
    // Здесь добавьте логику для проверки уникальности никнейма через AJAX или другой метод
    var isAvailable = true; // Пример результата проверки

    if (!isAvailable) {
      nicknameError.textContent = "Nickname already exists";
      nicknameAttempts--;
      if (nicknameAttempts === 0) {
        nicknameInput.disabled = false;
      }
    } else {
      nicknameError.textContent = "";
    }
  }

  nicknameInput.addEventListener("blur", checkNicknameAvailability);

  var agreementCheckbox = document.getElementById("terms");
  var registerBtn = document.getElementById("register-btn");

  agreementCheckbox.addEventListener("change", function () {
    registerBtn.disabled = !agreementCheckbox.checked;
  });

  var registerForm = document.getElementById("register");

  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Собрать данные формы и добавить их в объект или отправить на сервер

    var userData = {
      phone: phoneInput.value.trim(),
      email: document.getElementById("email-register").value.trim(),
      dob: dobInput.value,
      login: loginInput.value.trim(),
      password: passwordInput.value,
      fullName: document.getElementById("fullname").value.trim(),
      middleName: document.getElementById("middlename").value.trim(),
      agreement: agreementCheckbox.checked,
    };

    // Отправить userData на сервер или сохранить в Local Storage

    // Пример сохранения данных в Local Storage:
    var users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));

    // Сбросить форму после успешной регистрации
    registerForm.reset();
  });
});
