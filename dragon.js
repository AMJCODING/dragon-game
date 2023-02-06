let char = document.getElementById("char");

let block = document.getElementById("block");

let block1 = document.getElementById("block1");


function jumping(){ 



    char.classList.add("char_jump")

    setTimeout(() => {
        char.classList.remove("char_jump")
    }, 1000);

}


 function down_animation(){

    char.classList.add("char_down")

    setTimeout(() => {
        char.classList.remove("char_down")
    }, 1000);

 }






setInterval(() => {
    let char_top = parseInt(window.getComputedStyle(char).getPropertyValue("top"))

    let char_width = parseInt(window.getComputedStyle(char).getPropertyValue("width"))

    let block_left = parseInt(window.getComputedStyle(block).getPropertyValue("left"))

    let block_height =  parseInt(window.getComputedStyle(block).getPropertyValue("height"))


    if(block_left<char_width-5 && block_left>0 && char_top>=600 - block_height ){

let lose_msg =         confirm("you lose")
        block.style.animation = "none"
        block.style.display = "none"

        if(lose_msg ===true){
            window.open("http://127.0.0.1:5500/dragon.html")
        }
    }
}, 10);




setInterval(() => {
    let char_top = parseInt(window.getComputedStyle(char).getPropertyValue("top"))

    let char_width = parseInt(window.getComputedStyle(char).getPropertyValue("width"))

    let block1_left = parseInt(window.getComputedStyle(block1).getPropertyValue("left"))

    let block1_height =  parseInt(window.getComputedStyle(block1).getPropertyValue("height"))


    if(block1_left<char_width-5 && block1_left>0 && char_top<=640 ){

let lose_msg =         confirm("you lose")
        block.style.animation = "none"
        block.style.display = "none"

        if(lose_msg ===true){
            window.open("http://127.0.0.1:5500/dragon.html")
        }
    }
}, 10);




// counter




let count_input = document.getElementById("counter");

function countDown(){
    count_input.value = parseInt(count_input.value) + 1 ;

    for(i = 0 ; i < 20 ; i++){
        if(count_input.value===`${i}0`){
            block.classList.add(`block_fast_${i}`)
        }}
     
}

let counter1 = setInterval(countDown , 1000)
