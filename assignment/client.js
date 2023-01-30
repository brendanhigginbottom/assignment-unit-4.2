let nonWinterIsDisplayed = false;

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

/*function showWinter(){

}*/
