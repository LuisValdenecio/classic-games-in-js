const doNothing = () => {}

const execute = ((arrayOfCode) =>{
    arrayOfCode.forEach(element => {
        element();
    });
});