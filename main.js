canvas=document.getElementById("canv");
ctx=canvas.getContext("2d");
cw=100;
ch=250;


background_image = "parkingLot.jpg";
greencar_image = "car2.png";

cx=0;
cy=0;
function add() {
	//upload car, and background images on the canvas.
	bg=new Image(); bg.onload=uploadBackground;
	bg.src=background_image;
	car=new Image(); car.onload=uploadgreencar;
	car.src=greencar_image;
	
}

function uploadBackground() {
	ctx.drawImage(bg,0,0,canvas.width,canvas.height)

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(car,cx,cy,cw,ch);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up() {
    if (cy>=0) {
        cy=cy-10;
        console.log("y value is "+cy);
		canvas.remove(greencar_image);
		uploadgreencar();
    }
}
function down() {
    if (cy<=450) {
        cy=cy+10;
        console.log("y value is "+cy);
		canvas.remove(greencar_image);
		uploadgreencar();
    }

}
function right() {
    if (cx<=700) {
        cx=cx+10;
        console.log("x value is "+cx);
		canvas.remove(greencar_image);
        uploadgreencar();
    }
}

function left() {
    if (cx>=0) {
        cx=cx-10;
        console.log("x value is "+cx);
		canvas.remove(greencar_image);
		uploadgreencar();
    }
}
