let LivingCreature = require("./livingCreature")

module.exports = class Lightning extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 10
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

    chooseCell(char, char2, char3, char4, char5,char6) {
        this.getNewCoordinates();
        return super.choosCell(char, char2, char3, char4, char5,char6)
    }

    eat() {
        console.log("========eeeeee===========");
        let foods = this.chooseCell(1, 2, 3, 4, 5,6)
        // let food = foods[Math.floor(Math.random() * foods.length)]



        if (foods.length  > 0) {
            let newX = null
            let newY = null            
            for (let i in foods) {
                newX = foods[i][0]
                newY = foods[i][1]
            }
            // this.energy += 5
            // let newX = food[0]
            // let newY = food[1]

            matrix[newY][newX] = 10
            matrix[this.y][this.x] = 7

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
            for (let i in amenakerArr) {
                if (newX == amenakerArr[i].x && newY == amenakerArr[i].y) {
                    amenakerArr.splice(i, 1)

                    break;
                }
            }

            // this.x = newX
            // this.y = newY

        } else {
            // this.move()
            this.die()
        }

    }

    move() {
        let emptyCells = this.chooseCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            this.energy--
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 7
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
        for (let i in lightningArr) {
            console.log("meri kaycak");
            if (this.y == lightningArr[i].y && this.x == lightningArr[i].x) {
                lightningArr.splice(i, 1);
                break;
            }
        }
    }

}