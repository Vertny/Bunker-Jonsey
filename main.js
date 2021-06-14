car1="Carno1.jpg";
car_x = 10;
car_y = 10;
carheight = 100;
carwidth = 100;
background="Canvasback.jpg"
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

function add(){
    background_img= new Image();
    background_img.onload = uploadBackground;
    background_img.src = background;

    car1_img= new Image();
    car1_img.onload = uploadcar;
    car1_img.src = car1 ;

    
}

function uploadBackground(){
    ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
}

function uploadcar(){
    ctx.drawImage(car1_img, car_x, car_y, carwidth, carheight);
}

window.addEventListener("keydown", my_kedow);

function my_kedow(e){

   keypressed=e.keyCode;
   console.log(keypressed);   
    if(keypressed == '38')
    {
        up();
        console.log("up");
    }

    if(keypressed == '40')
    {   
        down();
        console.log("down");
    }

    if(keypressed == '37')
    {
        left();
        console.log("left");
    }

    if(keypressed == '39')
    {
        right();
        console.log("right");
    }
}

function up(){
    if(car_y >=0){
        car_y = car_y-10;
        console.log("When up arrow is pressed = " + car_x + " - " + car_y);
        uploadBackground();
        uploadcar();
    }
}
function down(){
    if(car_y <= 700){
        car_y = car_y+10;
        console.log("When up arrow is pressed = " + car_x + " - " + car_y);
        uploadBackground();
        uploadcar();
    }
} function left(){
    if(car_x >=0){
        car_x =car_x-10;
        console.log("When up arrow is pressed = " + car_x + " - " + car_y);
        uploadBackground();
        uploadcar();
    }
} function right(){
    if(car_x <= 900){
        car_x =car_x+10;
        console.log("When up arrow is pressed = " + car_x + " - " + car_y);
        uploadBackground();
        uploadcar();
    }
} 

if(car_x > 700){
    console.log("The super Space Car won the time ")
    document.getElementById('game status').innerHTML = "Careo the Great Won"
} 

