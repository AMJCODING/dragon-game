let dog = document.getElementById("dog");

let lowerBlock = document.getElementById("block");

let upperBlock = document.getElementById("block1");

let ctx = dog.getContext("2d")

let frameX = 0;
let frameY = 0;
let kalb =6;





//score counter
let count_input = document.getElementById("counter");

function countUp(){
    count_input.value = parseInt(count_input.value) + 1 ;

    for(i = 1 ; i < 50 ; i++){
        if(count_input.value===`${i}0`){
            lowerBlock.style.animation=` block${i}0 5s infinite linear`;
       }
    }
}

let counter1 = setInterval(countUp , 500)



 let count = count_input.value;









//jump function
function jumping(){ 


    kalb=6

    dog.classList.add("char_jump")

    setTimeout(() => {
        dog.classList.remove("char_jump")
    }, 1000);

    frameY=1

    setTimeout(() => {
        frameY = 2;
    }, 500);

    setTimeout(() => {
        frameY=0;
    }, 1000);

}







//losing fuction
setInterval(() => {
    //the dog
    let dogTop = parseInt(window.getComputedStyle(dog).getPropertyValue("top"))
    let dogWidth = parseInt(window.getComputedStyle(dog).getPropertyValue("width"))
    let dogLeft = parseInt(window.getComputedStyle(dog).getPropertyValue("left"))

    //lower block
    let lowerBlockLeft = parseInt(window.getComputedStyle(lowerBlock).getPropertyValue("left"))
    let lowerBlockRight = parseInt(window.getComputedStyle(lowerBlock).getPropertyValue("right"))
    let lowerBlockHeight =  parseInt(window.getComputedStyle(lowerBlock).getPropertyValue("height"))


    //upper block

    let upperBlockLeft = parseInt(window.getComputedStyle(upperBlock).getPropertyValue("left"))
    let upperBlockRight = parseInt(window.getComputedStyle(upperBlock).getPropertyValue("right"))
    let upperBlockHeight =  parseInt(window.getComputedStyle(upperBlock).getPropertyValue("height"))

    // the range fo collesion
    let collesionRange = Array.from(Array(5).keys())

    if(
        collesionRange.includes(Math.abs(dogLeft + dogWidth - lowerBlockLeft)) 
        &&
        dogTop >= 600 - lowerBlockHeight
        ){
            
    alert(`GAME OVER YOUR SCORE IS "${count_input.value}"`)
    lowerBlock.style.animation = "none";
    lowerBlock.style.display = "none";
    upperBlock.style.animation = "none";
    upperBlock.style.display = "none";
         };


    if (
        collesionRange.includes(Math.abs(dogLeft + dogWidth - upperBlockLeft)) 
        &&
        dogTop <= 620
        ) {
            
    alert(`GAME OVER YOUR SCORE IS "${count_input.value}"`)
    lowerBlock.style.animation = "none";
    lowerBlock.style.display = "none";
    upperBlock.style.animation = "none";
    upperBlock.style.display = "none";
        }
    



    // if(lowerBlockLeft == dogLeft + dogWidth && lowerBlockLeft > 0 && dogTop >= 600 - lowerBlockHeight ){

}, 0);








//down function
function down_animation(){

    kalb=4;
    dog.classList.add("char_down")

    setTimeout(() => {
        dog.classList.remove("char_down")
    }, 1000);

    frameY=5;
    
    setTimeout(() => {
        frameY=0;
    }, 1000);

 }





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
    
    dog.style.left = `${counter}`
    
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

dog.style.left = `${counter}`

}

}
















//animation
const CANVAS_WIDTH = dog.width = 600;
const CANVAS_HEiGHT = dog.height = 600;

const palyer_img = new Image();

palyer_img.src = `shadow_dog.png`

const sprite_width = 573;
const sprite_height= 523;

let gameFrame =0;
const staggerFrames = 5;




function animate() {
    ctx.clearRect(0 , 0 , CANVAS_WIDTH , CANVAS_HEiGHT);
    position = Math.floor( gameFrame/staggerFrames ) % kalb;
    frameX = position * sprite_width
    ctx.drawImage(palyer_img ,frameX  ,frameY * sprite_height, sprite_width , sprite_height , 0 , 0 ,sprite_width , sprite_height  );

    gameFrame++
    requestAnimationFrame(animate);
}

animate()



