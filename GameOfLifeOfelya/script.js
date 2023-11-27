function matrixGenerator(matrixSize, grassCount, grassEaterCount, predatorCount, fireCount, waterCount, amenakerCount) {
    let matrix = []

    for (let i = 0; i < matrixSize; i++) {
        matrix.push([])
        for (let j = 0; j < matrixSize; j++) {
            matrix[i].push(0)
        }
    }



    for (let i = 0; i < grassCount; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
        }

    }

    for (let i = 0; i < grassEaterCount; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
        }


    }

    for (let i = 0; i < predatorCount; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 3
        }


    }

    for (let i = 0; i < fireCount; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 4
        }


    }

    for (let i = 0; i < waterCount; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 5
        }


    }

    for (let i = 0; i < amenakerCount; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 6
        }


    }

    return matrix
}

let matrix = matrixGenerator(40, 35, 10, 5, 10, 30, 7)

let side = 20

let grassArr = [];
let grassEaterArr = [];
let predatorArr = [];
let fireArr = [];
let waterArr = [];
let amenakerArr = [];
function setup() {
    frameRate(10)
    createCanvas(matrix[0].length * side, matrix.length * side)
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y)
                grassArr.push(grass)
            } else if (matrix[y][x] == 2) {
                let grEat = new GrassEater(x, y)
                grassEaterArr.push(grEat)
            } else if (matrix[y][x] == 3) {
                let pred = new Predator(x, y)
                predatorArr.push(pred)
            } else if (matrix[y][x] == 4) {
                let fire = new Fire(x, y)
                fireArr.push(fire);
            } else if (matrix[y][x] == 5) {
                let water = new Water(x, y)
                waterArr.push(water);
            } else if (matrix[y][x] == 6) {
                let amenaker = new Amenaker(x, y)
                amenakerArr.push(amenaker);
            } else {
                fill("gray")
            }
        }
    }
}




function draw() {
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

    for (let i in grassArr) {

        grassArr[i].mul()
    }

    for (let i in grassEaterArr) {

        grassEaterArr[i].eat()
    }

    for (let i in predatorArr) {
        predatorArr[i].eat()

    }

    for (let i in fireArr) {
        fireArr[i].eat()

    }

    for (let i in waterArr) {
        waterArr[i].eat()

    }


    for (let i in amenakerArr) {
        amenakerArr[i].eat()

    }
}

console.log("Hellow world !!!!");
