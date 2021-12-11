class Food {
    
    constructor() {
        this.food;
        this.posX;
        this.posY;
        this.world = document.body;
    }
  
    maker = () => {
        this.randomPositioner();
        this.food = document.createElement('div');
        this.food.setAttribute('id', 'food');
        this.food.style.left = `${this.posX}px`;
        this.food.style.top = `${this.posY}px`;
        return this.food;
    }   

    randomPositioner = () => {
        this.posX = Math.random(0, 1) * 400;
        this.posY = Math.random(0, 1) * 400;
    }

    broadCastPosition = () => {
        return { posX : this.posX, posY : this.posY }
    }

    eliminateFood = () => {
        this.world.removeChild(this.food);
        let newCobra = this.maker();
        this.world.appendChild(newCobra);
    }

}