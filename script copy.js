/**
 * Landmark Rebuild Project
 * Custom JavaScript for Hamburger Menu Interactivity and Button Actions.
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Hamburger Menu Logic ---
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('open');
            menuToggle.classList.toggle('is-active');
            document.body.classList.toggle('nav-open');
        });
    }

    // --- 2. 'New Locations' Button Action (New Requirement) ---
    const newLocationsButton = document.querySelector('.btn-book');
    const patreonURL = 'https://www.patreon.com/landmarkam';

    if (newLocationsButton) {
        newLocationsButton.addEventListener('click', () => {
            // Opens the URL in a new tab/window
            window.open(patreonURL, '_blank'); 
        });
    }
});