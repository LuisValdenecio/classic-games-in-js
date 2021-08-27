class GameManager {

    constructor(cobraTrain) {
        this.world = document.body;
        this.thingsInTheWorld = [];
        this.start;
        this.previousTimeStamp;
        this.cobraTrain = cobraTrain;
    }

    add2world = () => {
        this.world.appendChild(new Food().maker());  
    }

    runGame = (timestamp) => {
    
        if (this.start === undefined) this.start = timestamp;

        const elapsed = timestamp - this.start;

        if (this.previousTimeStamp !== timestamp) {
            const count = elapsed * .1;
            this.cobraTrain.startMoving(count);
        }

        if (elapsed <= Infinity) { 
            this.previousTimeStamp = timestamp
            window.requestAnimationFrame(this.runGame);
        }

    }
}

