class Cobra {

    static NAME = 'cobra';

    constructor() {
        this.cobra;
        this.posX = 0;
        this.posY = 0;
    }

    maker = () => {
        this.cobra = document.createElement('div');
        this.cobra.setAttribute('id', 'cobra')
        return this;
    }

    getHTMLele = () => {
        return this.cobra === undefined ? this.maker() : this.cobra;
    }

    moveFoward = (velocity) => {
        this.cobra.style.left = velocity*5 + 'px';
        this.posX = velocity*5;
    }

    broadCastPosition = () => {
        return { x : this.posX, y : this.posY}
    }

    

}