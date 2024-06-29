
import { pageLoad } from './page';
import { loadMenu } from './menu';
import { loadAbout } from './about';

// Initial page load
pageLoad();

// Add event listeners to navigation buttons
document.querySelector('nav').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const buttonText = e.target.textContent;

        if (buttonText === 'Home') {
            pageLoad();
        } else if (buttonText === 'Menu') {
            loadMenu();
        } else if (buttonText === 'About') {
            loadAbout();
        }
    }
});
