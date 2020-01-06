var c;
var canvas;
var s;

function setup(){
	canvas = createCanvas(800, 580);
	background(255);
    c = color(0);
    s = color(255);
}

// This function takes in four parameters
// loc is the y-coordinate location of the color box palette
function boxColor(loc, r, g, b){
	stroke(255);
	strokeWeight(1);
	fill(r, g, b);
	rect(2, loc, 45, 20);
}

// This function checks the location of the mouse
// and then assign the color value to variable c
// thus changing the color of the paint brush
function mousePressed(){
    if ((mouseX >= 2) && (mouseX <= 45) &&
        (mouseY >= 2) && (mouseY <= 20)) {
        c = color(255, 0, 0); //red
    }
    else if ((mouseX >= 2) && (mouseX <= 45) &&
        (mouseY >= 24) && (mouseY <= 44)) {
        c = color(255, 165, 0);	    //orange
    }
    else if ((mouseX >= 2) && (mouseX <= 45) &&
        (mouseY >= 46) && (mouseY <= 66)) {
        c = color(255, 255, 0);	    //yellow
    }
    else if ((mouseX >= 2) && (mouseX <= 45) &&
        (mouseY >= 68) && (mouseY <= 88)) {
        c = color(0, 255, 0);	    //green
    }
    else if ((mouseX >= 2) && (mouseX <= 45) &&
        (mouseY >= 90) && (mouseY <= 110)) {
        c = color(0, 255, 255);	    //light blue
    }
    else if ((mouseX >= 2) && (mouseX <= 45) &&
        (mouseY >= 112) && (mouseY <= 132)) {
        c = color(0, 0, 255);	    //blue
    }
    else if ((mouseX >= 2) && (mouseX <= 45) &&
        (mouseY >= 134) && (mouseY <= 154)) {
        c = color(225, 0, 255);	    //magenta
    }
    else if ((mouseX >= 2) && (mouseX <= 45) &&
        (mouseY >= 156) && (mouseY <= 176)) {
        c = color(102, 51, 0);	    //brown
    }
    else if ((mouseX >= 2) && (mouseX <= 45) &&
        (mouseY >= 178) && (mouseY <= 198)) {
        c = color(255, 255, 255);	//white
    }
    else if ((mouseX >= 2) && (mouseX <= 45) &&
        (mouseY >= 200) && (mouseY <= 220)) {
        c = color(0, 0, 0);		    //black
    }
    else if ((mouseX >= 2) && (mouseX <= 45) &&
        (mouseY >= 222) && (mouseY <= 242)) {
        c = color(165, 165, 165);	//gray
    }
    else if ((mouseX >= 2) && (mouseX <= 45) &&
        (mouseY >= 244) && (mouseY <= 264)) {
        c = color(243, 34, 75);     //pnk
    }

    //Save, Clear and Resize
    else if ((mouseX >= 2) && (mouseX <= 45) &&
        (mouseY >= 310) && (mouseY <= 330)) {
        saveCanvas(canvas, 'myCanvas', 'jpg');
    }
    else if ((mouseX >= 2) && (mouseX <= 45) &&
        (mouseY >= 340) && (mouseY <= 360)) {
        clear();
    }
}

function draw() {
    fill(43);
    rect(0, 0, 50, height);
    
    if (mouseIsPressed == true) {
        stroke(c);
        strokeWeight(5);
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
	//red
	boxColor(2, 255, 0, 0);

	//orange
	boxColor(24, 255, 165, 0);

	//yellow
	boxColor(46, 255, 255, 0);

	//green
	boxColor(68, 0, 255, 0);

	//light blue
	boxColor(90, 0, 255, 255);

	//blue
	boxColor(112, 0, 0, 255);

	//magenta
	boxColor(134, 255, 0, 255);

	//brown
	boxColor(156, 102, 51, 0);

	//white
	boxColor(178, 255, 255, 255);

	//black
	boxColor(200, 0, 0, 0);

	//gray
    boxColor(222, 165, 165, 165);

    //pink
    boxColor(244, 243, 34, 75);

    //save button
    boxColor(310, 70, 70, 70);
    noStroke();
    fill(255);
    text("Save", 12, 325);

    //clear button
    boxColor(340, 70, 70, 70);
    noStroke();
    fill(255);
    text("Clear", 10, 355);

    //resize brush
    stroke(255);
    fill(70);
    strokeWeight(1);
    rect(2, 370, 45, 60);

    noStroke();
    fill(255);
    text("current", 5, 460);
    text("color", 10, 475);
    fill(c);
    stroke(255);
    ellipse(25, 500, 30, 30);
    noStroke();
}

