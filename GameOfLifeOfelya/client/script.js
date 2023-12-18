let socket= io();
let weather = "";

let winterButton = document.getElementById("winter");
winterButton.addEventListener("click", function(){
    weather = "winter";
})
let springButton = document.getElementById("spring");
springButton.addEventListener("click", function(){
    weather = "spring";
})
let summerButton = document.getElementById("summer");
summerButton.addEventListener("click", function(){
    weather = "summer";
})

let autumnButton = document.getElementById("autumn");
autumnButton.addEventListener("click", function(){
    weather = "autumn";
})

let defaultButton = document.getElementById("default");
defaultButton.addEventListener("click", function(){
    weather = "";
})
let lightningButton = document.getElementById("lightning");
lightningButton.addEventListener("click", function(){
    socket.emit('lightning')
})

let side = 20


function setup() {
    frameRate(10)
    createCanvas(40  * side, 40 * side)
}




function paint(matrix) {
    for (let y = 0; y < matrix.length; y++) {
        for (x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                if(weather === "winter"){
                    fill("white")
                    rect(x * side, y * side, side, side);
                    text('❄️', x * side, y * side, side, side);
                    textSize(side)
                }else if(weather === "spring") {
                    fill("green")
                    rect(x * side, y * side, side, side);
                    text('🌸', x * side, y * side, side, side);
                    textSize(side)
                } else if(weather === "summer") {
                    fill("acua")
                    rect(x * side, y * side, side, side);
                    text('☀️', x * side, y * side, side, side);
                    textSize(side)
                } else if (weather === "autumn") {
                    fill("black")
                    rect(x * side, y * side, side, side);
                    text('🍁', x * side, y * side, side, side);
                    textSize(side)
                }else {
                    fill("black")
                    rect(x * side, y * side, side, side);
                    text('🌎', x * side, y * side, side, side);
                    textSize(side)
                }

            } else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
                text('🐛', x * side, y * side, side, side);
                textSize(side)
            } else if (matrix[y][x] == 3) {
                fill("white")
                rect(x * side, y * side, side, side);
                text("🐺", x * side, y * side, side, side);
                textSize(side)
            } else if (matrix[y][x] == 4) {
                fill("black")
                rect(x * side, y * side, side, side);
                text('🔥', x * side, y * side, side, side);
                textSize(side)
            } else if (matrix[y][x] == 5) {
                fill("pink")
                rect(x * side, y * side, side, side);
                text('💧', x * side, y * side, side, side);
                textSize(side)
            } else if (matrix[y][x] == 6) {
                fill("orange")
                rect(x * side, y * side, side, side);
                text('❌', x * side, y * side, side, side);
                textSize(side)
            } else if (matrix[y][x] == 10) {
                fill("orange")
                rect(x * side, y * side, side, side);
                text('k', x * side, y * side, side, side);
                textSize(side)
            } 
            else {
                fill("gray")
                rect(x * side, y * side, side, side);

            }

        }
    }

}

setInterval(
    function () {
    socket.on('send matrix', paint)
    },1000
)


