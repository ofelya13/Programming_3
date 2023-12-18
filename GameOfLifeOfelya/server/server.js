let express = require("express");

let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let fs = require("fs");

app.use(express.static("../client"));

app.get("/", function (req, res) {
    res.redirect("index.html");
});

server.listen(3000, function () {
    console.log("Example is running on port 3000");
});


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

matrix = matrixGenerator(40, 35, 10, 5, 10, 30, 7)
io.sockets.emit('send matrix', matrix)

grassArr = [];
grassEaterArr = [];
waterArr = [];
predatorArr = [];
fireArr = [];
amenakerArr = [];

Grass = require("./grass")
Water = require("./water")
Predator = require("./predator")
Fire = require("./fire")
Amenaker = require("./amenaker")
GrassEater = require("./grassEater")

function createObject(matrix) {

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
            }
        }
    }
    io.sockets.emit("send matrix", matrix);

}

function nkarel() {


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

    io.sockets.emit("send matrix", matrix);

}


setInterval(nkarel, 1000)

function lightning() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (y == x) { 
                matrix[y][x] = 10;
                io.sockets.emit("send matrix", matrix);
                

            }
            console.log("Kaycak");

            // io.sockets.emit('Lightning', );
        }

    }
}

io.on('connection', function (socket) {
    createObject(matrix);
    socket.on("lightning", lightning)
})

let statistic = {
    grass: 0,
    grassEater: 0,
    predator: 0,
    fire: 0,
    water: 0,
    amenaker: 0
}
setInterval(function () {
    statistic.grass = grassArr.length;
    statistic.grassEater = grassEaterArr.length;
    statistic.predator = predatorArr.length;
    statistic.fire = fireArr.length;
    statistic.water = waterArr.length;
    statistic.amenaker = amenakerArr.length;

    fs.writeFile("statistics.json", JSON.stringify(statistic), () => {
        console.log("Writed statistic to file !!!");
    })


}, 6000)

