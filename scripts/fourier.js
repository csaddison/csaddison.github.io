// 8.26.19
// Sine/Fourier Visualization


// Initialize variables

var octaves = 6;
var margin = 100;
var freq = new Array();
var amp = new Array();
var theta = new Array();

/*
freq[0] = .01;
amp[0] = 200;

freq[1] = .005;
amp[1] = 50;
*/

function setup() {

    createCanvas(windowWidth - margin, windowHeight - margin - 50);

    for (var i = 0; i < octaves; i++){

        theta[i] = 0;

        freq[i] = createSlider(0, 100, 50);
        freq[i].position(
            (windowWidth - margin) / 4, 
            ((windowHeight - margin - 50) / 4) + (60 * i)
            );

        amp[i] = createSlider(2, 200, 75);
        amp[i].position(
        (windowWidth - margin) / 4,
        ((windowHeight - margin - 50) / 4) + 30 + (60 * i)
        );

    }

}

// Draw loop

function draw() {

    background('black');

    let x_cen = width / 2;
    let y_cen = height / 2;
    let x_tan = x_cen + (Math.cos(theta[0]) * amp[0].value());
    let y_tan = y_cen + (Math.sin(theta[0]) * amp[0].value());

    for (var n = 0; n < octaves; n++) {

        stroke('white');
        noFill();
        circle(x_cen, y_cen, amp[n].value() * 2);

        fill('red')
        circle(x_tan, y_tan, 10)

        stroke('gold');
        line(x_cen, y_cen, x_tan, y_tan);

        if (n + 1 < octaves) {

            x_tan += (Math.cos(theta[n+1]) * amp[n+1].value());
            y_tan += (Math.sin(theta[n+1]) * amp[n+1].value());

        }

        x_cen += (Math.cos(theta[n]) * amp[n].value());
        y_cen += (Math.sin(theta[n]) * amp[n].value());

        theta[n] += freq[n].value() / 10000;

    }

}


// Window resize check

function windowResized() {

    resizeCanvas(windowWidth - margin, windowHeight - margin - 50);

    freq1Slider.position((windowWidth - margin) / 4, (windowHeight - margin - 50) / 4);
    amp1Slider.position((windowWidth - margin) / 4, ((windowHeight - margin - 50) / 4) + 30);
  }
