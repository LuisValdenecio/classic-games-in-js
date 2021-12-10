class Cobra {

    static NAME = 'cobra';

    constructor(direction, posX=0, posY=0, width=10, height=20) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.direction = direction;
        this.cobra;
        this.maker();
        this.moving = true;
    }

    maker = (class_attr='cobraDefault') => {
        this.cobra = document.createElement('div');
        this.cobra.setAttribute('class', class_attr);
        this.cobra.style.left = `${this.posX}px`;
        this.cobra.style.top = `${this.posY}px`;
        this.cobra.style.width = `${this.width}px`;
        this.cobra.style.height = `${this.height}px`;
        return this.cobra;  
    }

    // this move is agnostic, it depends on the direction proprty
    move = (velocity) => {
        switch(this.direction) {
            case 'ascendingFromBottom' :
                this.ascendFromBottom(velocity);
                break;
            case 'ascendingFromSidesRight' :
                this.ascendFromRight(velocity);
                break;
            case 'ascendingFromTop' :
                this.ascendFromTop(velocity);
                break;
            case 'ascendingFromSidesLeft' :
                this.ascendingFromLeft(velocity);
                break;
            case 'top' :
                this.moveTop(velocity);
                break;
            case 'down':
                this.moveDown(velocity);
                break;
            case 'left':
                this.moveLeft(velocity);
                break;
            default :
                this.moveFoward(velocity);
        }
    }

    moveFoward = (velocity) => {
        this.moving && 
        execute([
            () => this.cobra.style.left = `${this.posX}px`,
            () => this.posX++
        ]);
    }

    moveLeft = (velocity) => {
        this.moving && 
        execute([
            () => this.cobra.style.left = `${this.posX}px`,
            () => this.posX--
        ]);
    }

    moveTop = (velocity) => {
        this.moving && (this.cobra.style.top = `${this.posY--}px`);
    }

    moveDown = (velocity) => {
        this.moving && (this.cobra.style.top = `${this.posY++}px`);
    }

    ascendFromBottom = (velocity) => {
        this.height += 1;
        this.cobra.style.height = `${this.height}px`;
        this.height == 10 && (this.direction = 'down');
    } 

    ascendFromTop = (velocity) => {
        this.height += 1;
        this.posY -= 1;
        this.cobra.style.height = `${this.height}px`;
        this.cobra.style.top = `${this.posY}px`;
        this.height == 10 && (this.direction = 'top');
    }

    ascendFromRight = (velocity) => {
        this.width += 1;
        this.cobra.style.width = `${this.width}px`;
        this.width == 10 && (this.direction = 'right');
    }

    ascendingFromLeft = (velocity) => {
        this.width += 1;
        this.posX -= 2.3;
        this.cobra.style.width = `${this.width}px`;
        this.cobra.style.left = `${this.posX}px`;
        this.width == 10 && (this.direction = 'left');
    }

    vanish = (velocity) => {
        //this.moving = false;
        if (this.direction == 'right' || this.direction == 'left') {
            this.width -= 1;
            this.cobra.style.width = `${this.width}px`; 
            this.cobra.style.display = this.width == 0 && 'none';
            this.cobra.style.left = `${velocity + this.posX}px`;
        } else {
            this.height -= 1;
            this.cobra.style.height = `${this.height}px`; 
            this.cobra.style.display = this.height == 0 && 'none';
            this.cobra.style.top = `${velocity + this.posY}px`;
        }
    }
}