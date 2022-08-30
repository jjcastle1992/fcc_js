let count = 0;
saveEl = document.getElementById("save-el");

function increment () {
    console.log ("Clicked");
    count++;
    document.getElementById ("count-el").innerText = count;
}


function save () {
    let saveState = `${count} - `;
    document.getElementById("save-el").textContent += saveState;
    document.getElementById("count-el").textContent = 0;
    count = 0;
}