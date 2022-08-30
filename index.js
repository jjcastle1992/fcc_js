let count = 0;
let totalCount = 0;
saveEl = document.getElementById("save-el");

function increment () {
    console.log ("Clicked");
    count++;
    document.getElementById ("count-el").innerText = count;
}


function save () {
    let saveState = `${count} - `;
    totalCount += count;
    document.getElementById("save-el").textContent += saveState;
    document.getElementById("total-el").textContent = `Total Entries to Date: ${totalCount}`;
    document.getElementById("count-el").textContent = 0;
    count = 0;
}