let count = 0;
saveEl = document.getElementById("save-el");

function increment () {
    console.log ("Clicked");
    count++;
    document.getElementById ("count-el").innerText = count;
}


function save () {
    let saveState = ` ${count} - `;
    document.getElementById("save-el").innerText += saveState;
    console.log (count);
}