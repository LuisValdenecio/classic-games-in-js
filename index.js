class GameManager {

    constructor() {
        this.world = document.body;
        this.thingsInTheWorld = [];

        // the proprties bellw are for frame counting
        this.start;
        this.previousTimeStamp;
    }

    add2world = (thingsToAdd) => {
        thingsToAdd.forEach(element => {
            this.world.appendChild(element.getHTMLele());    
            this.thingsInTheWorld.push(element);
        });
    }

    removeFromWorld = (indx) => {
        this.world.removeChild(this.thingsInTheWorld[indx].getHTMLele());
        this.thingsInTheWorld[indx] && this.thingsInTheWorld.splice(indx,indx);
    }

    /*I'll move this method into the tracker file soon*/
    found_food = () => {
        return (this.thingsInTheWorld[1].broadCastPosition().x -
             this.thingsInTheWorld[0].broadCastPosition().x) < 50 
            ? true : false;
    }

    initializer = (timestamp) => {
        
        if (this.start === undefined)
            this.start = timestamp;

        const elapsed = timestamp - this.start;

        if (this.previousTimeStamp !== timestamp) {
            const count = elapsed * .1;
            this.thingsInTheWorld[0].moveFoward(count);
        }

        this.found_food() && this.removeFromWorld(1);

        if (elapsed <= 1000) { 
            this.previousTimeStamp = timestamp
            window.requestAnimationFrame(this.initializer);
        }

    }


}

