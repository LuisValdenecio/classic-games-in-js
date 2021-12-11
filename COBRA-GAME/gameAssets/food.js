class Food {
    
    constructor() {
        this.food;
        this.posX;
        this.posY;
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
        this.posX = Math.random() * 100;
        this.posY = Math.random() * 100;
    }

    broadCastPosition = () => {
        return { x : 547.942, y : this.getHTMLele().style.top }
    }

}