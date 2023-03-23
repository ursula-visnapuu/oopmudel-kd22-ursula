class Resistor {
    r: number = 0;
    constructor(r: number) {
        this.r = r;
    }
    getResistance(): number {
        return this.r;
    }
    getCurrent(u: number): number {
        return u / this.getResistance();
    }
}


class SeriesCircuit extends Resistor {
    resistors: Resistor[] = []
    constructor() {
        super(0);
    }
    push(r: Resistor) {
        this.resistors.push(r);
    }
    getResistance() {
        let sum: number = 0;
        this.resistors.forEach((r: Resistor) => { sum += r.getResistance() });
        return sum;
    }
}

let r1: Resistor = new Resistor(100);
let r2: Resistor = new Resistor(150);
let r3: Resistor = new Resistor(175);
let sc1: SeriesCircuit = new SeriesCircuit();
let sc2: SeriesCircuit = new SeriesCircuit();
sc1.push(r1);
sc2.push(r2);
sc2.push(r3);
sc1.push(sc2);
console.log(sc1.getResistance());
console.log(sc1.getCurrent(12));
console.log('---------------------------')
let r4: Resistor = new Resistor(10);
sc2.push(r4)
console.log(sc2.getResistance());
console.log(sc1.getResistance());