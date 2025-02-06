// app.js for Page 1

document.getElementById("checkButton").addEventListener("click", checkLoyaltyPoints);

function validatePhoneNumber() {
    const phoneInput = document.getElementById('phoneInput');
    const errorMessage = document.getElementById('error-message');

    const regex = /^[+0-9]*$/;  // Only allow numbers and the "+" at the start
    if (!regex.test(phoneInput.value)) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Please enter only numerical values.';
        return false;
    }
    errorMessage.style.display = 'none';
    return true;
}

function checkLoyaltyPoints() {
    const phoneInput = document.getElementById('phoneInput').value;
    const errorMessage = document.getElementById('error-message');

    // Validate phone number input
    if (!validatePhoneNumber()) return;  // If validation fails, exit the function

    // Check if the phone number is numeric
        // Store the phone number in localStorage (or sessionStorage)
        localStorage.setItem('phoneNumber', phoneInput);
        window.location.href = '../html/page2.html';  // Replace with actual page 2 URL
        // Redirect to page 2 based on directory
        const path = window.location.pathname;
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Invalid phone number. Please enter the correct one to check loyalty points.';
    
}