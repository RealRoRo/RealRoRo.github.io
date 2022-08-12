function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function soundToggle() {
    toggle = document.getElementById("soundCassette").muted
    if(toggle) {
        document.getElementById("audioToggle").innerHTML = "Sound OFF"
        document.getElementById("soundCassette").muted = false;
    }
    else{
        document.getElementById("audioToggle").innerHTML = "Sound ON"
        document.getElementById("soundCassette").muted = true;
    }
}
function toggleCard(id, cardIdArray) {
    if(cardIdArray.includes(id)) {
        console.log(id)
        let displayImg = document.getElementById(id);
        var sibling = document.getElementById(id).nextElementSibling;
        displayImg.style.display = "none"
        sibling.style.display = "inline-block"
        setInterval(() => {
            
            displayImg.style.display = ""
            sibling.style.display = "none"
        }, 3000);
    }
}
let cardCollection = document.getElementsByClassName("card-image")
let cardCollectionArray = Array.prototype.slice.call(cardCollection)
let cardIdArray = [];
for (let i = 0;i < cardCollectionArray.length;i++) {
    cardIdArray.push(cardCollectionArray[i].id)
}
console.log(cardIdArray)
const onClick = (event) => toggleCard(event.srcElement.id, cardIdArray);
window.addEventListener('click', onClick);


