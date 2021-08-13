function GameManager() {
    this.world = this.document;
}

GameManager.prototype.addToWorld = (thingToAdd) => {
    this.world.appendChild(thingToAdd);
}