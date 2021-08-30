class CobraTrain {

    constructor(messenger) {
        this.world = document.body;
        this.cobras = [
            new Cobra('right', 0, 0, 10, 10), 
            new Cobra('right', 10, 0, 10, 10)
        ];
        this.initialVelocity = 0;
        this.messenger = messenger;
        this.cobras.forEach(cobra => this.world.appendChild(cobra.maker()));
        this.cobraExtended = false;
    }

    extendTheTrain = (posX, posY, ascendingDirection, width, height) => {
        let newCobra = new Cobra(ascendingDirection,posX,posY,width,height);
        this.world.appendChild(newCobra.cobra);
        this.cobras.push(newCobra);
        this.cobraExtended = true;
    }

    startMoving = (velocity) => {
        // onKeyUp:
            // 1st: stop moving the 1st block
            // 2nd: make the last vanish
            // 3rd: create a third cobra a make it ascend 
        if (this.messenger.eventEmited().eventOn) {

            this.cobras[0].vanish(velocity);
            this.cobras[1].moving = false;
        

            this.world.querySelectorAll('.cobraDefault')[0].setAttribute('id', 'eliminate_from_dom');

            // get prpties of the new cobra
            if (!this.cobraExtended) {
                
                let posX = this.cobras[1].posX;
                let posY = this.cobras[1].posY;
                let ascendingDirection =  this.messenger.eventEmited().eventName;
                let width = (
                    ascendingDirection == "ascendingFromSidesRight"
                    || ascendingDirection == "ascendingFromSidesLeft"
                ) ? 0 : 10;
                let height = (
                    ascendingDirection == "ascendingFromBottom"
                    || ascendingDirection == "ascendingFromTop"    
                    ) ? 0 : 10;

                if (ascendingDirection == "ascendingFromBottom" || ascendingDirection == "ascendingFromTop") {

                    if (ascendingDirection == "ascendingFromBottom") {
                        this.extendTheTrain(posX-1, posY+12, ascendingDirection, width, height);
                    } else {
                        this.extendTheTrain(posX-1, posY-2, ascendingDirection, width, height);
                    }

                }  else {
                    this.extendTheTrain(posX+12, posY-1, ascendingDirection, width, height);
                } 
            }

            // decide where the 1st block should go next
            let nextPosition;
            switch(this.messenger.eventEmited().eventName) {
                case 'ascendingFromBottom':
                    nextPosition = 'down';
                    break;
                case 'ascendingFromTop':
                    nextPosition = 'top';
                    break;
            }


            this.cobras[0].height == 0 &&
            execute(
                [
                    () => this.cobras.splice(0,1), 
                    () => this.world.removeChild(this.world.querySelector('#eliminate_from_dom')),
                    () => this.messenger.eventFired = false,
                    () => this.cobraExtended = false, 
                    () => this.cobras[0].moving = true,
                    () => this.cobras[0].direction = 'right'
                ]
            )

            this.cobras[0].width == 0 &&
            execute(
                [
                    () => this.cobras.splice(0,1), 
                    () => this.world.removeChild(this.world.querySelector('#eliminate_from_dom')),
                    () => this.messenger.eventFired = false,
                    () => this.cobraExtended = false, 
                    () => this.cobras[0].moving = true,
                    () => this.cobras[0].direction = nextPosition
                ]
            )          
        }
            
        this.cobras.forEach((cobra) => {
            cobra.move(velocity);
        });
    }

    makeCobraVanish = (cobra, velocity) => {
        cobra.vanishFromSides(velocity); 
    }  
    
}