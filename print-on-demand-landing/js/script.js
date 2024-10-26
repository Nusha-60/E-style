document.addEventListener("DOMContentLoaded", function () {
    const carouselTrack = document.getElementById('carouselTrack');
    const carouselImages = Array.from(carouselTrack.children);
    const totalImages = carouselImages.length;
    
    // Set initial index
    let currentIndex = 0;
    let shiftInterval;

    // Function to shift images left
    function shiftLeft() {
        // Move the first image to the end of the list
        const firstImage = carouselImages[currentIndex];
        carouselTrack.appendChild(firstImage); // Move it to the end

        // Update the current index
        currentIndex = (currentIndex + 1) % totalImages; // Loop back if at the end
    }

    // Function to start shifting images on mouseover
    function startShiftOnHover() {
        // Clear any existing interval to avoid multiple timers
        clearInterval(shiftInterval);
        
        // Start shifting images every 2 seconds
        shiftInterval = setInterval(shiftLeft, 2000); // Shift every 2 seconds
    }

    // Function to stop shifting images on mouseout
    function stopShiftOnMouseOut() {
        clearInterval(shiftInterval);
    }

    // Add event listeners to the carousel track
    carouselTrack.addEventListener('mouseover', startShiftOnHover);
    carouselTrack.addEventListener('mouseout', stopShiftOnMouseOut);
});
