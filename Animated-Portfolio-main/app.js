// Get video elements by ID
const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

// Get sidebar and related elements
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

// Get hover sign element that appears on video hover
const hoverSign = document.querySelector('.hover-sign');

// Store all video elements in an array for easy looping
const videoList = [video1, video2, video3];

// Add hover effect for each video
videoList.forEach(function(video) {
    video.addEventListener("mouseover", function() {
        video.play(); // Play video on hover
        hoverSign.classList.add("active"); // Show hover sign
    });

    video.addEventListener("mouseout", function() {
        video.pause(); // Pause video when not hovering
        // Hide hover sign
        hoverSign.classList.remove("active"); 
    });
});

// Open sidebar when menu icon is clicked
menu.addEventListener("click", function() {
    sideBar.classList.remove("close-sidebar");
    sideBar.classList.add("open-sidebar");
});

// Close sidebar when close icon is clicked
closeIcon.addEventListener("click", function() {
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
});
