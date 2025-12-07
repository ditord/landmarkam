/**
 * Landmark Rebuild Project
 * Custom JavaScript for interactivity.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Example: Add a click listener to the 'Book Now' button
    const bookButton = document.querySelector('.btn-book');
    if (bookButton) {
        bookButton.addEventListener('click', () => {
            console.log('Book Now clicked!');
            // Add booking/modal logic here
        });
    }
});