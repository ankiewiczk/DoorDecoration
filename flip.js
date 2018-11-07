window.onload = loadDocument;

function loadDocument(e) {
	
    var switchEL = document.getElementById("buttonb3");
    switchEL.onclick = flipb3;
    var panelEL = document.getElementById("b3flap");
    panelEL.flipped = false;
}

function flipb3(e) { 
    var panelEL = document.getElementById("b3flap");

    if(!panelEL.flipped)  
    {    panelEL.style.transform = "rotateY(-180deg)";
        panelEL.flipped = true;
    } else { 
        panelEL.style.transform = "";
        panelEL.flipped = false;
    }
    
}