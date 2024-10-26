document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const role = document.getElementById('role').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (!role || !email || !password) {
        alert('Please fill all the fields.');
        return;
    }

    // Simulate login (this would usually be a backend request)
    console.log(`Logging in as ${role} with email: ${email}`);
    alert(`Welcome back, ${email}`);
});

document.getElementById('google-login').addEventListener('click', function() {
    // Simulating Google login
    alert('Redirecting to Google login...');
    window.location.href = 'https://accounts.google.com/signin'; // Google OAuth link (for future integration)
});
