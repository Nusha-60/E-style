// Profile Image Upload Preview
const profileImgInput = document.getElementById('profile-img');
const profileImgPreview = document.getElementById('profile-img-preview');

profileImgInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profileImgPreview.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Form Submission & Password Validation
document.getElementById('profile-setup-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Basic password matching validation
    if (newPassword !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Proceed with form submission (e.g., API call or redirect)
    alert("Profile setup complete!");
});
