let nonWinterIsDisplayed = false;
let winterIsDisplayed = false;

function showNonWinter(){
    if(nonWinterIsDisplayed === false){
        let nonWinter = document.querySelector('#nonWinterHtml');
        nonWinter.innerHTML += `
        <img id="bike" src="bike.jpg" alt="A sweet all-black Surly Straggler">
        <h3>Surly Straggler if it's not winter.</h3> 
        `;
        nonWinterIsDisplayed = true;
    } else {
        let nonWinter = document.querySelector('#nonWinterHtml');
        nonWinter.innerHTML = ''
        nonWinterIsDisplayed = false;
    }
}

function showWinter(){
    if(winterIsDisplayed === false){
        let winter = document.querySelector('#winterHtml');
        winter.innerHTML += `
        <img id="bike" src="winterBike.jpg" alt="A sweet black and purple Trek Antelope">
        <h3>Trek Antelope (with Antelope scratched out to just read "ope") 
        in the winter.</h3> 
        `;
        winterIsDisplayed = true;
    } else {
        let winter = document.querySelector('#winterHtml');
        winter.innerHTML = ''
        winterIsDisplayed = false;
    }
}
