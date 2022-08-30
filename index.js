let count = 0;

function increment () {
    console.log ("Clicked");
    count++;
    document.getElementById ("count-el").innerText = count;
}

function save () {
    console.log (count);
}