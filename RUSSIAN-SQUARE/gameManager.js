class GameManager {

    constructor() {
        this.start = null;
        this.previousTimeStamp = null;
    }

    runGame = (timestamp) => {

        if (this.start === null) {
            this.start = timestamp;
        }

        const elapsed = timestamp - this.start;

        if (this.previousTimeStamp !== timestamp) {
            // run here some moving game logic
            
        }

        if (elapsed <= Infinity) {
            this.previousTimeStamp = timestamp;
            window.requestAnimationFrame(this.runGame);
        }

       
    }

}