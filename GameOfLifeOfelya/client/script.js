




let socket= io();

let side = 20


function setup() {
    frameRate(10)
    createCanvas(40  * side, 40 * side)
}




function paint(matrix) {
    for (let y = 0; y < matrix.length; y++) {
        for (x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green")
                rect(x * side, y * side, side, side);
                text('🌿', x * side, y * side, side, side);
                textSize(side)
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

