let LivingCreature = require("./livingCreature")


  module.exports = class Predator extends LivingCreature{
    constructor(x, y) {
        super(x,y)
        this.energy = 10;

    }



    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(char, char2) {
        this.getNewCoordinates();


        return super.choosCell(char,char2);
    }


    mull() {
        let emptyCell = this.chooseCell(0);
        let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)]

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = 3;

            let pred = new Predator(newX, newY);
            predatorArr.push(pred);
        }
    }

    eat() {
        let foods = this.chooseCell(1, 2)
        let food = foods[Math.floor(Math.random() * foods.length)]

        if (food) {
            this.energy += 5
            let newX = food[0]
            let newY = food[1]

            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0

            for (let i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1)

                    break;
                }
            }

            for (let i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)

                    break;
                }
            }

            this.x = newX
            this.y = newY
            if (this.energy >= 20) {
                this.mull()
            }

        } else {
            this.move()
        }

    }

    move() {
        let emptyCells = this.chooseCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            this.energy--
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0


            this.x = newX
            this.y = newY           
            if (this.energy <= 0) {
                this.die()
            }
        }

    }

    die() {
        console.log("Barev dzez")
        matrix[this.y][this.x] = 0;
        for (let i in predatorArr) {
            if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                predatorArr.splice(i, 1);
                break;
            }
        }
    }
}