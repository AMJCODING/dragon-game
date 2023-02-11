let char = document.getElementById("char");

let block = document.getElementById("block");

let block1 = document.getElementById("block1");


//jump function
function jumping(){ 



    char.classList.add("char_jump")

    setTimeout(() => {
        char.classList.remove("char_jump")
    }, 1000);

}

setInterval(() => {
    let char_top = parseInt(window.getComputedStyle(char).getPropertyValue("top"))

    let char_width = parseInt(window.getComputedStyle(char).getPropertyValue("width"))

    let block_left = parseInt(window.getComputedStyle(block).getPropertyValue("left"))

    let block_height =  parseInt(window.getComputedStyle(block).getPropertyValue("height"))

    let char_left = parseInt(window.getComputedStyle(char).getPropertyValue("left"))


    if(block_left == char_left + char_width && block_left > 0 && char_top >= 600 - block_height ){


        alert("you lose")
        block.style.animation = "none";
        block.style.display = "none";
        block1.style.animation = "none";
        block1.style.display = "none";

    }
}, 10);








//down function
function down_animation(){

    char.classList.add("char_down")

    setTimeout(() => {
        char.classList.remove("char_down")
    }, 1000);

 }


setInterval(() => {
    let char_top = parseInt(window.getComputedStyle(char).getPropertyValue("top"))

    let char_width = parseInt(window.getComputedStyle(char).getPropertyValue("width"))

    let block1_left = parseInt(window.getComputedStyle(block1).getPropertyValue("left"))

    let char_left = parseInt(window.getComputedStyle(char).getPropertyValue("left"))


    if(block1_left == char_left+char_width && block1_left >0 && char_top<=640 ){

        alert("you lose")
        block1.style.animation = "none";
        block1.style.display = "none";
        block.style.animation = "none";
        block.style.display = "none";


    }
}, 10);





//right function

let counter = 0;



function right_animation(){

    if (counter !== 1600) {
    
        counter+=100;
    
    char.style.left = `${counter}`
    
    }
    

}


function left_animation(){

if (counter!==0) {
    
    counter-=100;

char.style.left = `${counter}`

}

}







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
