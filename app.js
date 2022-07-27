// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const resetButton = document.getElementById('reset-button');

const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');

const reportEl = document.getElementById('report');

const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
let headChange = 0;
let middleChange = 0;
let bottomChange = 0;
// set state for all of the character's catchphrases

let catchphrasesArr = [];

headDropdown.addEventListener('change', () => {
    // get the value of the head dropdown
    let head = headDropdown.value;
    
    // increment the head change count state
    headChange++
    console.log(headChange);
    // update the dom for the head (use style.backgroundImage on the headEl div instead of trying to set the .src -- it's NOT an img tag!)
    headEl.style.backgroundImage = `url(./assets/${head}.png)`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});


middleDropdown.addEventListener('change', () => {
    // get the value of the middle dropdown
    let middle = middleDropdown.value;
    console.log(middle);
    // increment the middle change count state
    middleChange++;
    // update the dom for the middle (NOTE: use style.backgroundImage on the middleEl div instead of trying to set the .src -- it's NOT an img tag!)
    middleEl.style.backgroundImage = `url(./assets/${middle}.png)`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});


bottomDropdown.addEventListener('change', () => {
    // get the value of the bottom dropdown
    let bottom = bottomDropdown.value;
    // increment the bottom change count state
    bottomChange++;
    // update the dom for the bottom (NOTE use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)
    bottomEl.style.backgroundImage = `url(./assets/${bottom}.png)`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    
    // push the new catchphrase to the catchphrase array in state
    catchphrasesArr.push(catchphraseInput.value);
    console.log(catchphrasesArr);
    // clear out the form input's value so it's empty to the user
    catchphraseInput.value = "";
    
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)
    displayCatchphrases();


});

resetButton.addEventListener('click', () => {
    catchphrasesEl.textContent = "";
    reportEl.textContent = "";
    headEl.style.backgroundImage = '';
    middleEl.style.backgroundImage = '';
    bottomEl.style.backgroundImage = '';

})

function displayStats() {
    // text content of the reportEl to tell the user how many times they've changed each piece of the state
    reportEl.textContent = `You have changed your characters head ${headChange} times. \r\n You have changed your characters shirt ${middleChange} times. \r\n
    You have changed your characters pants ${bottomChange} times.`

}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    catchphrasesEl.textContent = "";
    // loop through each catchphrase in state
    for (let catchphrase of catchphrasesArr) {
        const catchphraseTag = document.createElement('p');

        catchphraseTag.textContent = catchphrase;

        catchphrasesEl.append(catchphraseTag);
    }
    // and for each catchphrase
    
    // create an HTML element with the catchphrase as its text content
    
    // and append that HTML element to the cleared-out DOM
}
