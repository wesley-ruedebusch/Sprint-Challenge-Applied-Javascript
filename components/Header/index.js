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
const  
newHeader = document.createElement('div'),
newDate = document.createElement('span'),
newTitle = document.createElement('h1'),
newTemp = document.createElement('span');

// assign class
newHeader.classList.add('header');
newDate.classList.add('date');
newTemp.classList.add('temp');

// set content
newDate.textContent = 'SMARCH 28, 2019';
newTitle.textContent = 'Lambda Times';
newTemp.textContent = '98°';

newHeader.append(newDate, newTitle, newTemp);

return newHeader;
}

const headerEntryPoint = document.querySelector('.header-container');
const myHeader = Header();
headerEntryPoint.appendChild(myHeader);