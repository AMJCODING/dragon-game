let char = document.getElementById("char");

let block = document.getElementById("block");

let block1 = document.getElementById("block1");

let ctx = char.getContext("2d")

let frameX = 0;
let frameY = 0;
let kalb =6;









//score counter
let count_input = document.getElementById("counter");

function countUp(){
    count_input.value = parseInt(count_input.value) + 1 ;

    for(i = 0 ; i < 21 ; i++){
        if(count_input.value===`${i}0`){
            block.classList.add(`block_fast_${i}`)
        }}
     
}

let counter1 = setInterval(countUp , 500)



 let count = count_input.value;











//jump function
function jumping(){ 


    kalb=6

    char.classList.add("char_jump")

    setTimeout(() => {
        char.classList.remove("char_jump")
    }, 1000);

    frameY=1

    setTimeout(() => {
        frameY = 2;
    }, 500);

    setTimeout(() => {
        frameY=0;
    }, 1000);

}

setInterval(() => {
    let char_top = parseInt(window.getComputedStyle(char).getPropertyValue("top"))

    let char_width = parseInt(window.getComputedStyle(char).getPropertyValue("width"))

    let block_left = parseInt(window.getComputedStyle(block).getPropertyValue("left"))

    let block_height =  parseInt(window.getComputedStyle(block).getPropertyValue("height"))

    let char_left = parseInt(window.getComputedStyle(char).getPropertyValue("left"))


    if(block_left == char_left + char_width && block_left > 0 && char_top >= 600 - block_height ){


        alert(`GAME OVER YOUR SCORE IS "${count}"`)
        block.style.animation = "none";
        block.style.display = "none";
        block1.style.animation = "none";
        block1.style.display = "none";
        

    }
}, 1);








//down function
function down_animation(){

    kalb=4;
    char.classList.add("char_down")

    setTimeout(() => {
        char.classList.remove("char_down")
    }, 1000);

    frameY=5;
    
    setTimeout(() => {
        frameY=0;
    }, 1000);

 }


setInterval(() => {
    let char_top = parseInt(window.getComputedStyle(char).getPropertyValue("top"))

    let char_width = parseInt(window.getComputedStyle(char).getPropertyValue("width"))

    let block1_left = parseInt(window.getComputedStyle(block1).getPropertyValue("left"))

    let char_left = parseInt(window.getComputedStyle(char).getPropertyValue("left"))


    if(block1_left =0 && char_left+char_width && block1_left >0 && char_top<=640 ){

        alert(`GAME OVER YOUR SCORE IS "${count}"`)
        block1.style.animation = "none";
        block1.style.display = "none";
        block.style.animation = "none";
        block.style.display = "none";
        count=0;

    }
}, 10);





//right function

let counter = 0;



function right_animation(){



setTimeout(() => {
    frameY=0;
}, 500);

    if (counter !== 1600) {

kalb=7;

frameY=3;

setTimeout(() => {
    frameY=0;
}, 500);
    
        counter+=100;
    
    char.style.left = `${counter}`
    
    }
    

}


function left_animation(){


if (counter!==0) {
    
kalb=7;

frameY=3;

setTimeout(() => {
    frameY=0;
}, 300);
    counter-=100;

char.style.left = `${counter}`

}

}
















//animation
const CANVAS_WIDTH = char.width = 600;
const CANVAS_HEiGHT = char.height = 600;

const palyer_img = new Image();

palyer_img.src = `shadow_dog.png`

const sprite_width = 573;
const sprite_height= 523;

let gameFrame =0;
const staggerFrames = 5;




function animate() {
    ctx.clearRect(0 , 0 , CANVAS_WIDTH , CANVAS_HEiGHT);
    position =Math.floor( gameFrame/staggerFrames ) % kalb;
    frameX = position * sprite_width
    ctx.drawImage(palyer_img ,frameX  ,frameY * sprite_height, sprite_width , sprite_height , 0 , 0 ,sprite_width , sprite_height  );

    gameFrame++
    requestAnimationFrame(animate);
}

animate()



