class KeyBoardEvents {

    constructor() {
        this.world = document;
    }

    initializer(callbck) {
        this.world.addEventListener('keydown', (event) => {
            callbck(event.code);
        });
    }
}