class GameManager {

    runGame = () => {
        window.requestAnimationFrame(this.runGame)
    }

}