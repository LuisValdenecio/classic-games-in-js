class GameManager {

    constructor(cobraTrain) {
        this.world = document.body;
        this.thingsInTheWorld = [];
        this.start;
        this.previousTimeStamp;
        this.cobraTrain = cobraTrain;
        this.tracker = null;
    }

    add2world = () => {
        let food = new Food();
        let pointManager = new Points();
        this.tracker = new FoodTracker(food, pointManager);
        this.world.appendChild(food.maker());  
    }

    runGame = (timestamp) => {
    
        if (this.start === undefined) 
            this.start = timestamp;

        const elapsed = timestamp - this.start;

        if (this.previousTimeStamp !== timestamp) {
            const count = elapsed * .1;
            this.tracker.foodFound();
            this.cobraTrain.startMoving(count);
        }

        if (elapsed <= Infinity) { 
            this.previousTimeStamp = timestamp
            window.requestAnimationFrame(this.runGame);
        }

    }
}

