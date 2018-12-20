window.onload = loadDocument;

function loadDocument(e) {
    var switchEL = document.getElementById("buttonflip");
    switchEL.onclick = flipIt;
    var panelEL = document.getElementById("flipPanel");
    panelEL.flipped = false;
}

function flipIt(e) { 
    var panelEL = document.getElementById("flipPanel");

    if(!panelEL.flipped)  
    {    panelEL.style.transform = "rotateX(-180deg)";
        panelEL.flipped = true;
    } else { 
        panelEL.style.transform = "";
        panelEL.flipped = false;
    }
    
}