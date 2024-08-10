document.addEventListener("DOMContentLoaded", function () {
  const firstnameInput = document.getElementById("firstname");
  const lastnameInput = document.getElementById("lastname");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const messageInput = document.getElementById("message");

  const firstnameError = document.querySelector("#firstname + .error");
  const lastnameError = document.querySelector("#lastname + .error");
  const emailError = document.querySelector("#email + .error");
  const phoneError = document.querySelector("#phone + .error");
  const messageError = document.querySelector("#message + .error");

  const nameRegex = /^[A-Za-z]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^[1-9][0-9]{9}$/;

  function validateInput(input, regex, errorElement, errorMessage) {
    if (input.value.trim() === "") {
      errorElement.textContent = "This field cannot be empty";
      errorElement.style.display = "block";
      return false;
    } else if (!regex.test(input.value.trim())) {
      errorElement.textContent = errorMessage;
      errorElement.style.display = "block";
      return false;
    } else {
      errorElement.style.display = "none";
      return true;
    }
  }

  firstnameInput.addEventListener("blur", function () {
    validateInput(
      firstnameInput,
      nameRegex,
      firstnameError,
      "Invalid First Name"
    );
  });

  lastnameInput.addEventListener("blur", function () {
    validateInput(lastnameInput, nameRegex, lastnameError, "Invalid Last Name");
  });

  emailInput.addEventListener("blur", function () {
    validateInput(emailInput, emailRegex, emailError, "Invalid Email Address");
  });

  phoneInput.addEventListener("blur", function () {
    validateInput(phoneInput, phoneRegex, phoneError, "Invalid Phone Number");
  });

  messageInput.addEventListener("blur", function () {
    if (messageInput.value.trim() === "") {
      messageError.textContent = "Message cannot be empty";
      messageError.style.display = "block";
    } else {
      messageError.style.display = "none";
    }
  });

  document.querySelector(".form-body").addEventListener("submit", function (e) {
    e.preventDefault();

    const isFirstNameValid = validateInput(
      firstnameInput,
      nameRegex,
      firstnameError,
      "Invalid First Name"
    );
    const isLastNameValid = validateInput(
      lastnameInput,
      nameRegex,
      lastnameError,
      "Invalid Last Name"
    );
    const isEmailValid = validateInput(
      emailInput,
      emailRegex,
      emailError,
      "Invalid Email Address"
    );
    const isPhoneValid = validateInput(
      phoneInput,
      phoneRegex,
      phoneError,
      "Invalid Phone Number"
    );
    const isMessageValid = messageInput.value.trim() !== "";

    if (isMessageValid) {
      messageError.style.display = "none";
    } else {
      messageError.textContent = "Message cannot be empty";
      messageError.style.display = "block";
    }

    if (
      isFirstNameValid &&
      isLastNameValid &&
      isEmailValid &&
      isPhoneValid &&
      isMessageValid
    ) {
      alert("Form submitted successfully!");
    }
  });
});
