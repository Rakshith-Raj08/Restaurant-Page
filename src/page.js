import imageSrc from './assets/images.jpeg';

export function pageLoad() {
    // Get the content div
    const contentDiv = document.getElementById('content');

    // Create and append a heading element
    const heading = document.createElement('h1');
    heading.textContent = 'Hello, welcome to Shankar Anna Tiffins';
    contentDiv.appendChild(heading);

    // Create and append an image element
    const imgElement = document.createElement('img');
    imgElement.src = imageSrc;
    imgElement.alt = 'Shankar Anna Tiffins Image';
    contentDiv.appendChild(imgElement);
}
