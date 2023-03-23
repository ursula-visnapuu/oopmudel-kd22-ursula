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
        return this.name + " " + this.getResistance() + "ohm";
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
        return this.name + " " + this.getResistance() +  "ohm(" + this.resistors.map(r => r.getDescription()).join(", ") + ")";
    }
}

let r1: Resistor = new Resistor(10, "takisti1");
let r2: Resistor = new Resistor(5, "takisti2");
let r3: Resistor = new Resistor(10, "takisti3");
let sc1: SeriesCircuit = new SeriesCircuit("jada1");
let sc2: SeriesCircuit = new SeriesCircuit("jada2");
sc2.push(r1);
sc2.push(r2);
sc1.push(sc2);
sc1.push(r3);
console.log(sc1.getDescription());