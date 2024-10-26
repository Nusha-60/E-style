// forgotpass.js

document.getElementById('forgotPasswordForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email').value;

    // Here, you would typically send the email to your server to handle the reset request
    // For demo purposes, just log it to the console
    console.log(`Reset link sent to: ${email}`);

    // Display a confirmation message or redirect the user as needed
    alert("A reset link has been sent to your email.");
});
