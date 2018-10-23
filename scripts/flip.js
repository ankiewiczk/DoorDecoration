window.onload = loadDocument;

function loadDocument(e) {
    var switchEL = document.getElementById("flipswitch");
    switchEL.onclick = flipIt;
    var panelEL = document.getElementById("flip1");
    panelEL.flipped = false;

}

function flipIt(e) { 
    var panelEL = document.getElementById("flip1");

    if(!panelEL.flipped)  
    {    panelEL.style.transform = "rotateY(-180deg)";
        panelEL.flipped = true;
    } else { 
        panelEL.style.transform = "";
        panelEL.flipped = false;
    }
    
}