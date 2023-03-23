class Resistor {
    r: number = 0;
    name: String;
    constructor(r: number, name: String) {
        this.r = r;
        this.name = name;
    }
    getResistance(): number {
        return this.r;
    }
    getCurrent(u: number): number {
        return u / this.getResistance();
    }
    getDescription() {
        return "Resistor " + this.name;
    }
}


class SeriesCircuit extends Resistor {
    resistors: Resistor[] = []
    constructor(name: String) {
        super(0, name);
    }
    push(r: Resistor) {
        this.resistors.push(r);
    }
    getResistance() {
        let sum: number = 0;
        this.resistors.forEach((r: Resistor) => { sum += r.getResistance() });
        return sum;
    }

    getDescription(): string {
        return "SeriesCircuit " + this.name + "(" + this.resistors.map(r => r.getDescription()).join(", ") + ")";
    }
}

let r1: Resistor = new Resistor(100, "t1");
let r2: Resistor = new Resistor(150, "t2");
let r3: Resistor = new Resistor(175, "t3");
let r4: Resistor = new Resistor(175, "t4");
let sc1: SeriesCircuit = new SeriesCircuit("j1");
let sc2: SeriesCircuit = new SeriesCircuit("j2");
let sc3: SeriesCircuit = new SeriesCircuit("j3");
sc1.push(r1);
sc2.push(r2);
sc2.push(r3);
sc3.push(r4);
sc2.push(sc3)
sc1.push(sc2);
console.log(sc1.getDescription());
console.log(sc3.getResistance())
console.log(sc2.getResistance())
console.log(sc1.getResistance())