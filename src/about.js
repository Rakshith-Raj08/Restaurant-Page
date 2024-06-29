export function loadAbout() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear existing content

    const heading = document.createElement('h1');
    heading.textContent = 'About Us';
    contentDiv.appendChild(heading);

    const aboutText = document.createElement('p');
    aboutText.textContent = 'Shankar Anna Tiffins has been serving delicious South Indian breakfast since 1985. We are known for our authentic flavors and friendly service.';
    contentDiv.appendChild(aboutText);
}
