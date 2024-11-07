// Select the toggle button and the nav element
const toggleButton = document.getElementById("toggleButton");
const nav = document.getElementById("navLinks");

// Add click event listener to the toggle button
toggleButton.addEventListener('click', () => {
    nav.classList.toggle('active'); // Toggle the 'active' class on the nav
    toggleButton.classList.toggle('active'); // Toggle the 'active' class on the toggle button
});