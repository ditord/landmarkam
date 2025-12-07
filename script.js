/**
 * Landmark Rebuild Project
 * Custom JavaScript for Hamburger Menu Interactivity, Button Actions, and Sticky Header.
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- Header Scroll Logic (Sticky/Shrinking Header) ---
    const header = document.querySelector('header');
    const scrollPoint = 50; // Distance in pixels before the header starts shrinking

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollPoint) {
            // Adds 'header-scroll' class (for shrinking CSS) when scrolled past 50px
            header.classList.add('header-scroll');
        } else {
            // Removes 'header-scroll' class when scrolled back to the top
            header.classList.remove('header-scroll');
        }
    });

    // --- 1. Hamburger Menu Logic ---
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            // Toggles navigation open/close state
            mainNav.classList.toggle('open');
            // Toggles button active state (for potential 'X' icon animation)
            menuToggle.classList.toggle('is-active');
            // Toggles body class to prevent scrolling when menu is open
            document.body.classList.toggle('nav-open');
        });
    }

    // --- 2. 'New Locations' Button Action ---
    const newLocationsButton = document.querySelector('.btn-book');
    const patreonURL = 'https://www.patreon.com/landmarkam';

    if (newLocationsButton) {
        newLocationsButton.addEventListener('click', () => {
            // Opens the URL in a new tab/window
            window.open(patreonURL, '_blank'); 
        });
    }
});