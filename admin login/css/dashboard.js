document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggle-btn");
    const sidebar = document.getElementById("sidebar");

    toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
    });
});


// Show/Hide Sub-Options on Mouse Over
const sidebarOptions = document.querySelectorAll('.sidebar-option');

sidebarOptions.forEach(option => {
    option.addEventListener('mouseover', function () {
        const subOptions = option.querySelectorAll('.sub-option');
        subOptions.forEach(subOption => {
            subOption.style.display = "block"; // Show sub-options on hover
        });
    });

    option.addEventListener('mouseleave', function () {
        const subOptions = option.querySelectorAll('.sub-option');
        subOptions.forEach(subOption => {
            subOption.style.display = "none"; // Hide sub-options when mouse leaves
        });
    });
});
