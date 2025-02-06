// Handle registration data saving and navigation to Page 3
document.getElementById("continue").addEventListener("click", saveRegistrationData);

function saveRegistrationData() {
    // Collect the form data (name, birthday, email, etc.)
    const name = document.getElementById('name').value;
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const email = document.getElementById('email').value;
    const noEmail = document.getElementById('noEmail').checked;
  
    // If noEmail is checked, set email to null or empty string
    const emailValue = noEmail ? '' : email;
  
    // Validate inputs
    if (!name || !day || !month || !year || !emailValue) {
        alert('Please fill in all fields.');
        return;
    }
  
    // Save the data to LocalStorage
    localStorage.setItem('name', name);
    localStorage.setItem('birthday', `${day}-${month}-${year}`);
    localStorage.setItem('email', emailValue);
    localStorage.setItem('phoneNumber', '+60173527250');

    // Redirect to page 3 after successful data submission
    window.location.href = 'page3.html';  // Navigate to page 3
}

// Load data on Page 3 from LocalStorage and display it
window.onload = function() {
        // Retrieve the data from LocalStorage
        const name = localStorage.getItem('name');
        const birthday = localStorage.getItem('birthday');
        const email = localStorage.getItem('email');
        const phone = localStorage.getItem('phoneNumber');

        // Display the values in the respective spans in Page 3
        document.getElementById('displayName').textContent = name || 'N/A';
        document.getElementById('displayBirthday').textContent = birthday || 'N/A';
        document.getElementById('displayEmail').textContent = email || 'N/A';
        document.getElementById('displayPhone').textContent = phone || 'N/A';
};
