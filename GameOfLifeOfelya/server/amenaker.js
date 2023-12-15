let LivingCreature = require("./livingCreature")



module.exports = class Amenaker extends LivingCreature{
    constructor(x, y) {
         super(x,y)
        this.energy = 15;
     

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

    chooseCell(char, char2, char3, char4, char5) {
        this.getNewCoordinates();
     return  super.chooseCell(char, char2, char3, char4, char5)
    }

    eat() {
        let foods = this.chooseCell(1, 2, 3, 4, 5)
        let food = random(foods)

        if (food) {
            this.energy += 5
            let newX = food[0]
            let newY = food[1]

            matrix[newY][newX] = 6
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

            for (let i in predatorArr) {
                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1)

                    break;
                }
            }
            for (let i in fireArr) {
                if (newX == fireArr[i].x && newY == fireArr[i].y) {
                    fireArr.splice(i, 1)

                    break;
                }
            }
            for (let i in waterArr) {
                if (newX == waterArr[i].x && newY == waterArr[i].y) {
                    waterArr.splice(i, 1)

                    break;
                }
            }

            this.x = newX
            this.y = newY

        } else {
            this.move()
        }

    }

    move() {
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)

        if (newCell) {
            this.energy--
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 6
            matrix[this.y][this.x] = 0


            this.x = newX
            this.y = newY           
            if (this.energy <= 0) {
                this.die()
            }
        }

    }

    die() {
        matrix[this.y][this.x] = 0;
        for (let i in amenakerArr) {
            if (this.y == amenakerArr[i].x && this.x == amenakerArr[i].y) {
                amenakerArr.splice(i, 1);
                break;
            }
        }
    }

}