window.onload = loadDocument;

function loadDocument(e) {
    var switchEL = document.getElementById("flipswitch");
    switchEL.onclick = flipIt;
    var panelEL = document.getElementById("flip");
    panelEL.flipped = false;
}

function flipIt(e) { 
    var panelEL = document.getElementById("flip");

    if(!panelEL.flipped)  
    {    panelEL.style.transform = "rotateX(-180deg)";
        panelEL.flipped = true;
    } else { 
        panelEL.style.transform = "";
        panelEL.flipped = false;
    }
    
}