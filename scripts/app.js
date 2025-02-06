// Page 1 Functionality
const phoneInput = document.getElementById("phoneInput");
const phoneError = document.getElementById("phoneError");
const checkPoints = document.getElementById("checkPoints");

checkPoints.addEventListener("click", () => {
  if (phoneInput.value === "+60173527250") {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";
  } else {
    phoneError.style.display = "block";
  }
});

// Store data temporarily
let formData = {};

// Page 2 Functionality
const nameInput = document.getElementById("nameInput");
const birthdayInput = document.getElementById("birthdayInput");
const emailInput = document.getElementById("emailInput");
const continueButton = document.getElementById("continue");

continueButton.addEventListener("click", () => {
  formData = {
    phone: phoneInput.value,
    name: nameInput.value,
    birthday: birthdayInput.value,
    email: emailInput.value,
  };
  localStorage.setItem("formData", JSON.stringify(formData));
  window.location.href = "../html/page3.html";
});


document.getElementById("continue").addEventListener("click", function () {
    let isValid = true;
  
    // Name validation
    let name = document.getElementById("name").value.trim();
    if (name === "") {
      document.getElementById("nameError").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("nameError").style.display = "none";
    }
  
    // Birthday validation
    let day = document.getElementById("day").value.trim();
    let month = document.getElementById("month").value.trim();
    let year = document.getElementById("year").value.trim();
  
    if (day === "" || month === "" || year === "" || isNaN(day) || isNaN(month) || isNaN(year)) {
      document.getElementById("birthdayError").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("birthdayError").style.display = "none";
    }
  
    // Email validation
    let email = document.getElementById("email").value.trim();
    let noEmailChecked = document.getElementById("noEmail").checked;
  
    if (!noEmailChecked && (email === "" || !email.includes("@"))) {
      document.getElementById("emailError").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("emailError").style.display = "none";
    }
  
    // If form is valid, go to Page 3
    if (isValid) {
      localStorage.setItem("name", name);
      localStorage.setItem("birthday", `${day}/${month}/${year}`);
      localStorage.setItem("email", noEmailChecked ? "No email provided" : email);
      window.location.href = "../html/page3.html";
    }
  });
  