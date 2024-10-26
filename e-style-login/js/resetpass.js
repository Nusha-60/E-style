document.getElementById('resetPasswordForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Password strength checks
    const lengthRule = newPassword.length >= 8;
    const uppercaseRule = /[A-Z]/.test(newPassword);
    const lowercaseRule = /[a-z]/.test(newPassword);
    const numberRule = /\d/.test(newPassword);
    const specialCharRule = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword);

    // Update the password rules UI
    document.getElementById('lengthCheck').checked = lengthRule;
    document.getElementById('uppercaseCheck').checked = uppercaseRule;
    document.getElementById('lowercaseCheck').checked = lowercaseRule;
    document.getElementById('numberCheck').checked = numberRule;
    document.getElementById('specialCharCheck').checked = specialCharRule;

    // Change the color of the rules based on validity
    document.getElementById('lengthRule').style.color = lengthRule ? 'green' : 'red';
    document.getElementById('uppercaseRule').style.color = uppercaseRule ? 'green' : 'red';
    document.getElementById('lowercaseRule').style.color = lowercaseRule ? 'green' : 'red';
    document.getElementById('numberRule').style.color = numberRule ? 'green' : 'red';
    document.getElementById('specialCharRule').style.color = specialCharRule ? 'green' : 'red';

    // Simple validation
    if (newPassword === '' || confirmPassword === '') {
        showError('Please fill in both password fields.');
    } else if (newPassword !== confirmPassword) {
        showError('Passwords do not match. Please try again.');
    } else if (!lengthRule || !uppercaseRule || !lowercaseRule || !numberRule || !specialCharRule) {
        showError('Please ensure your password meets all the requirements.');
    } else {
       

        // Redirect to the Sign-In page after a successful password change
        showSuccess('Your password has been reset successfully!');
        setTimeout(() => {
            window.location.href = 'login.html'; // Redirect to the login page
        }, 2000);
    }
});

// Function to show success message
function showSuccess(message) {
    const successMessage = document.getElementById('successMessage');
    successMessage.textContent = message;
    successMessage.style.display = 'block';
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
}

// Function to show error message
function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 3000);
}

// Listen for input events to validate the password as the user types
document.getElementById('newPassword').addEventListener('input', function() {
    const newPassword = this.value;
    const lengthRule = newPassword.length >= 8;
    const uppercaseRule = /[A-Z]/.test(newPassword);
    const lowercaseRule = /[a-z]/.test(newPassword);
    const numberRule = /\d/.test(newPassword);
    const specialCharRule = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword);

    // Update the password rules UI
    document.getElementById('lengthCheck').checked = lengthRule;
    document.getElementById('uppercaseCheck').checked = uppercaseRule;
    document.getElementById('lowercaseCheck').checked = lowercaseRule;
    document.getElementById('numberCheck').checked = numberRule;
    document.getElementById('specialCharCheck').checked = specialCharRule;

    // Change the color of the rules based on validity
    document.getElementById('lengthRule').style.color = lengthRule ? 'green' : 'red';
    document.getElementById('uppercaseRule').style.color = uppercaseRule ? 'green' : 'red';
    document.getElementById('lowercaseRule').style.color = lowercaseRule ? 'green' : 'red';
    document.getElementById('numberRule').style.color = numberRule ? 'green' : 'red';
    document.getElementById('specialCharRule').style.color = specialCharRule ? 'green' : 'red';
});
