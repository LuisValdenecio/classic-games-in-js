class FoodTracker {

    constructor(food, pointManager) {
        this.food = food;
        this.world = document.body;
        this.pointManger = pointManager;
    }

    foodFound = () => {
        if (this.equalCoordinates()) {
            this.food.eliminateFood();
            this.pointManger.increasePoints();
        }            
    }

    equalCoordinates = () => {
        // pick up the last cobra
        let cobra = this.world.getElementsByClassName('cobraDefault')[1];
        let cobraPosX = cobra.style.left.split('px')[0];
        let cobraPosY = cobra.style.top.split('px')[0];

        let foodCoord = this.food.broadCastPosition();
        let foodPosX = foodCoord.posX;
        let foodPosY = foodCoord.posY;

        // check for equality in the cobra and food coordinates
        if (Math.abs(cobraPosX - foodPosX) <= 1 || Math.abs(cobraPosY - foodPosY) <= 1) 
            return true;
    }

}   