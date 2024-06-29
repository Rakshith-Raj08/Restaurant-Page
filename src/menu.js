export function loadMenu() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear existing content

    const heading = document.createElement('h1');
    heading.textContent = 'Menu';
    contentDiv.appendChild(heading);

    const menuList = document.createElement('ul');
    
    const menuItems = ['Idli', 'Dosa', 'Vada', 'Pongal', 'Upma'];
    menuItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        menuList.appendChild(listItem);
    });

    contentDiv.appendChild(menuList);
}
