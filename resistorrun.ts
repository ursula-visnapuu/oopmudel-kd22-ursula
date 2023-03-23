class Resistor {
    r: number = 0;
    allowedPower: number = 0
    constructor(r: number, ap: number) {
        this.r = r;
        this.allowedPower = ap
    }
    getCurrent(u: number): number {
        return u / this.r;
    }
    getPower(u: number): number {
        return u * this.getCurrent(u);
    }
}

let r1 = new Resistor(220, 0.2);
let r2 = new Resistor(110, 0.1);
let r3 = new Resistor(4700, 5);

let resistors: Resistor[] = []
resistors = [r1, r2, r3]

function controlResistorAllowed(resistors: Resistor[], u: number): Resistor[] {
    let allowedResistors: Resistor[] = []
    resistors.forEach((resistor) => {
        if(resistor.getPower(u) <= resistor.allowedPower){
            allowedResistors.push(resistor);
        }
    })
    return allowedResistors
}

let allowedResistors = controlResistorAllowed(resistors, 5)
console.log(allowedResistors)