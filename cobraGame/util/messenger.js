class Messenger {
    constructor() {
        this.eventFired = {eventOn : false, eventName : '', nextDirection : ''};
    }

    eventEmited = () => {
       return this.eventFired;
    }
}