//window.onload = loadDocument;
window.addEventListener("load", loadBubble1)

function loadBubble1(e) {
    var switchEL = document.getElementById("Bubble1switch");
    switchEL.onclick = flipBubble1;
    var panelEL = document.getElementById("popup");
    panelEL.flipped = false;
}

function flipBubble1(e) { 
    var panelEL = document.getElementById("popup");

    if(!panelEL.flipped)  
    {    panelEL.style.transform = "rotateX(-180deg)";
        panelEL.flipped = true;
    } else { 
        panelEL.style.transform = "";
        panelEL.flipped = false;
    }
    
}