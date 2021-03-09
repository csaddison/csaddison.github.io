// function setup() {

// 	var clientHeight = document.getElementById('sketch').clientHeight;
// 	var clientWidth = document.getElementById('sketch').clientWidth;

// 	var cnv = createCanvas(clientWidth, clientHeight);
// 	cnv.parent("sketch");
// 	background(0);
// }

// function draw() {
//     background(0);
//     circle(mouseX, mouseY, 15)
// }

// <div id="sketch"></div>

// #sketch {
//     width: 500px;
//     height: 500px;
// }

// canvas {
//     position: relative;
// }



function scrollDelay() {
    setTimeout(scrollDown, 3000);
    function scrollDown() {
        window.scrollTo(0, 850);
    }
}

window.onload = scrollDelay;