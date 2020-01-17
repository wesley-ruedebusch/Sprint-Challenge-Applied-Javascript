// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

    // Create Elements
    const header = document.createElement('div');
    const dateSpan = document.createElement('span');
    const h1 = document.createElement('h1');
    const temp = document.createElement('span');

    // Element Class
    header.classList.add('header');
    dateSpan.classList.add('date');
    temp.classList.add('temp');

    // Append Elements
    header.appendChild(dateSpan);
    header.appendChild(h1);
    header.appendChild(temp);

    // Set Context
    dateSpan.textContent = '01/17/2020';
    h1.textContent = 'Lambda Times';
    temp.textContent = '48°';

    return header;
}

document.querySelector('.header-container').append(Header());