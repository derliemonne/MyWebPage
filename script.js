function onClick() {
    fact = document.getElementById("fact");
    fact.innerHTML = randomChoice(facts)
    
}

function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

facts = []

async function init() {
    text = await fetch("facts.txt")
        .then((request) => request.text())
    facts = text.split("\n").map(function(fact) {
        return fact.trim()
    })
}  

window.onload = init




