window.addEventListener("load", loadBubble4);

function loadBubble4(e) {
    var switchEL = document.getElementById("switch4");
    switchEL.onclick = flipIt4;
    var panelEL = document.getElementById("flap");
    panelEL.flipped = false;
}

function flipIt4(e) { 
    var panelEL = document.getElementById("flap");

    if(!panelEL.flipped)  
    {    panelEL.style.transform = "rotateX(-180deg)";
        panelEL.flipped = true;
    } else { 
        panelEL.style.transform = "";
        panelEL.flipped = false;
    }
    
}