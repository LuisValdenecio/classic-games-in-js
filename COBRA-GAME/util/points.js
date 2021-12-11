class Points {
    constructor() {
        this.pointHolder = document.body.querySelectorAll(".bold-data")[0];
        this.recordHolder = document.body.querySelectorAll(".bold-data")[1];
        this.points = 0;
        this.setRecord();
    }

    increasePoints = () => {
        this.updateRecord();
        this.points += 1;
        this.pointHolder.innerHTML = this.points;
    }

    setRecord = () => {
        this.recordHolder.innerHTML = localStorage.getItem('cobra-record') ? 
        localStorage.getItem('cobra-record') : 0;
    }

    updateRecord = () => {
        let actualRecord = localStorage.getItem('cobra-record');
        if (this.points > actualRecord) {
            localStorage.setItem('cobra-record', this.points);
            this.recordHolder.innerHTML = 'Congrats!'
        }
    }
}