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