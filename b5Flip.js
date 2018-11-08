//window.onload = loadDocument;
window.addEventListener("load",loadDocument);

function loadDocument(e) {
    var switchEL = document.getElementById("bookButton");
    switchEL.onclick = flipBook;
    var panelEL = document.getElementById("robotFlap");
    panelEL.flipped = false;
        var switchEL = document.getElementById("robotButton");
    switchEL.onclick = flipRobot;
    var panelEL = document.getElementById("bookFlap");
    panelEL.flipped = false;
}

function flipBook(e) { 
    var panelEL = document.getElementById("robotFlap");

    if(!panelEL.flipped)  
    {    panelEL.style.transform = "rotateX(180deg)";
        panelEL.flipped = true;
    } else { 
        panelEL.style.transform = "";
        panelEL.flipped = false;
    }
    
}

function flipRobot(e) { 
    var panelEL = document.getElementById("bookFlap");

    if(!panelEL.flipped)  
    {    panelEL.style.transform = "rotateY(180deg)";
        panelEL.flipped = true;
    } else { 
        panelEL.style.transform = "";
        panelEL.flipped = false;
    }
    
}