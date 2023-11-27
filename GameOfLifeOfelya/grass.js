class Grass{
    constructor(x,y){
        this.x = x ;
        this.y = y ;
        this.multiply = 0 ; 
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y ],
            [this.x + 1, this.y ],
            [this.x - 1, this.y + 1],
            [this.x , this.y + 1],
            [this.x + 1, this.y + 1]
            ];
    }

    choosCell(char){
                let found = []

                for(let i in this.directions){
                                    let x  = this.directions[i][0]
                                    let y  = this.directions[i][1]

                                    if(x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){

                                                            if(matrix[y][x] == char){
                                                                    found.push(this.directions[i])
                                                            }
                                    }
                }


                return found 
    }


    mul(){
         this.multiply++
          let emptyCells =  this.choosCell(0)
          let newCell = random(emptyCells)

                if(newCell  &&  this.multiply >= 4){
                              let newX = newCell[0]
                              let newY = newCell[1]
                              
                              matrix[newY][newX] = 1

                              let grass = new Grass (newX,newY)
                              grassArr.push(grass)

                              this.multiply = 0 
                }
    }

}