// Function to handle the button click event
function toggleHighlight() {
    const heading = document.getElementById('mainHeading');

    // Toggle the 'highlighted' class on the heading
    if (heading.classList.contains('highlighted')) {
        heading.classList.remove('highlighted');
    } else {
        heading.classList.add('highlighted');
    }
}

// Event listener for the button click
const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', toggleHighlight);
