class Resistor {
    r: number = 0;
    constructor(r: number) {
        this.r = r;
    }
    getCurrent(u: number): number {
        return u / this.r;
    }
    getPower(u: number): number {
        return u * this.getCurrent(u);
    }
    getResistance(): number {
        return this.r;
    }
}

class SeriesCircuit {
    resistors: Resistor[] = []
    push(r: Resistor) {
        this.resistors.push(r);
    }
    getTotalResistance() {
        let sum: number = 0;
        this.resistors.forEach((r: Resistor) => { sum += r.getResistance() });
        return sum;
    }
    getCurrent(u: number) {
        return u / this.getTotalResistance();
    }

    getTotalPower(u: number){
        return u * this.getCurrent(u)
    }

    getBiggestResistance(): Resistor{
        this.resistors.sort((a, b) => (a.getResistance() > b.getResistance()) ? 1 : -1).reverse()
        return this.resistors[0]
    }

    getBiggestPotential(u: number): number{
        let biggestPotential: number = 0
        this.resistors.forEach((resistor) => {
            let resistorPotential: number = this.getCurrent(u) * resistor.getResistance()
            if(resistorPotential > biggestPotential){
                biggestPotential = resistorPotential
            }
        })
        return  biggestPotential
    }

    getBiggestPower(u: number): number{
        let biggestPower: number = 0
        this.resistors.forEach((resistor) => {
            let resistorPotential: number = this.getCurrent(u) * resistor.getResistance()
            let resistorPower: number = resistorPotential * this.getCurrent(u)
            if(resistorPower > biggestPower){
                biggestPower = resistorPower
            }
        })
        return  biggestPower
    }
}

class ParalellCircuit {
    resistors: Resistor[] = []
    push(r: Resistor) {
        this.resistors.push(r);
    }
    getTotalResistance(): number {
        let inversesum: number = 0;
        this.resistors.forEach((resistor) => {
            inversesum += 1 / resistor.getResistance()
        })
        return 1/inversesum;
    }
    getCurrent(u: number) {
        return u / this.getTotalResistance();
    }

    getTotalPower(u: number){
        return u * this.getCurrent(u)
    }
}

let sc1: ParalellCircuit = new ParalellCircuit();
sc1.push(new Resistor(4.5));
sc1.push(new Resistor(9));
console.log(sc1.getTotalPower(4.5));
console.log(sc1.getTotalResistance());
console.log(sc1.getCurrent(4.5))
