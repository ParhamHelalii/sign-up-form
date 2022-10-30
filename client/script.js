// INPUT REF
document.addEventListener("DOMContentLoaded", function (event) {
  const username = document.getElementById("username-input");
  const email = document.getElementById("email-input");
  const password = document.getElementById("password-input");
  const passwordValid = document.getElementById("confirm-password-input");

  // LABEL REF

  const usernameLabel = document.getElementById("username-label");
  const emailLabel = document.getElementById("email-label");
  const passwordLabel = document.getElementById("password-label");
  const confirmPasswordLabel = document.getElementById(
    "confirm-password-label"
  );

  // Queryselector

  const previous = document.querySelector("#previous");
  const inputs = document.querySelectorAll("input");

  //Clear event function

  // Validate
  const validate = () => {
    let isValid = true;

    if (username.value == "") {
      isValid = false;
      usernameLabel.textContent = "Is not good";
    } else {
      usernameLabel.textContent = null;
    }
    if (password.value == "") {
      isValid = false;
      passwordLabel.textContent = "Is not good";
    } else {
      passwordLabel.textContent = null;
    }
    if (email.value == "") {
      isValid = false;
      emailLabel.textContent = "Is not good";
    } else {
      emailLabel.textContent = null;
    }
    return isValid;
  };

  const postData = async (data) => {
    const response = await fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  };

  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (validate()) {
      const data = {
        username: username.value,
        email: email.value,
        password: password.value,
        passwordValid: passwordValid.value,
      };
      postData(data);
      console.log("all good");
    }
  });
  previous.addEventListener("click", () => {
    inputs.forEach((input) => (input.value = ""));
  });
});
