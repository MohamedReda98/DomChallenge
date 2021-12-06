// we will make small project with js only without anything in html or css all will be here in js file
// first to make the header
let header = document.createElement('header');
let content = document.createElement('section');
let footer = document.createElement('footer');
// adding class lists
header.classList.add('website-head');
header.classList.add('content');
header.classList.add('footer');
// initial logo and menu
let  logo = document.createElement(
    'div'
)
let  menu = document.createElement(
    'div'
)
logo.classList.add('logo');
menu.classList.add('menu');
// adding the text content to the elements
let logoText = 'elzero';
let menuText = `<ul style="list-style: none;display: flex;gap: 5px;"><li>Home</li><li>About</li><li>Service</li><li>Contact</li></ul>`;
logo.textContent = logoText;
menu.innerHTML = menuText;
// adding the style sheets
logo.style.cssText='font-weight: 900;color:green;text-transform:capitalize;display:flex;align-items:center;justify-content:center;';
menu.style.cssText='font-weight=bolder;color:gray;text-transform:capitalize;';
// adding to the main body document
header.appendChild(logo);
header.appendChild(menu);
header.style.cssText='display:flex;padding:5px;justify-content:space-between;'
document.body.appendChild(header);




