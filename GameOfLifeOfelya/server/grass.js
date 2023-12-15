let LivingCreature = require("./livingCreature")


module.exports = class Grass extends LivingCreature{
    
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