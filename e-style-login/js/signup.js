document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signup-form");

    // Form submission handler
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting immediately
        
        const role = document.getElementById("role").value;
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const dob = document.getElementById("dob").value;
        
        // Basic validation for now (extend as necessary)
        if (!role || !firstName || !lastName || !username || !email || !phone || !dob) {
            alert("Please fill out all fields.");
            return;
        }

        // You can add additional validation here for phone number format, date format, etc.

        // Simulate form submission (add real backend integration here)
        console.log("Form submitted successfully with data:", {
            role, firstName, lastName, username, email, phone, dob
        });
        
        alert("Sign-up successful!");
        form.reset(); // Reset the form
    });

    // Google login button functionality (optional)
    const googleButton = document.getElementById("google-login");
    if (googleButton) {
        googleButton.addEventListener("click", function () {
            alert("Google login clicked!");
            // Implement Google OAuth functionality here.
            // Typically, you'd redirect to Google's OAuth login page.
        });
    }
});
