document.getElementById('verification-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const verificationCode = document.getElementById('verification-code').value;

    // Basic validation
    if (verificationCode.length === 0) {
        alert("Please enter the verification code.");
        return;
    }

    // You would typically validate the verification code via an API call.
    alert('Account verified and sign-up complete!');
    // You would typically redirect to another page or call an API here.
});

// Function to handle resending the verification code
document.querySelector('.resend-code a').addEventListener('click', function(event) {
    event.preventDefault();
    
    // Resend the verification code logic (typically involves an API call)
    alert('Verification code resent to your email or phone.');
});
