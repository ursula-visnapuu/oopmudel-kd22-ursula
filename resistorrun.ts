class Resistor {
    r: number = 0;
    constructor(r: number) {
        this.r = r;
    }
    getCurrent(u: number): number {
        return u / this.r;
    }
}


let r1: Resistor = new Resistor(110);
let r2: Resistor = new Resistor(220);
let r3: Resistor = new Resistor(4700);
let resistors: Resistor[] = [];
resistors.push(r1)
resistors.push(r2)
resistors.push(r3)
let totalCurrent: number = 0;
resistors.forEach((resistor) => {
    totalCurrent += resistor.getCurrent(5)
})
console.log(totalCurrent);