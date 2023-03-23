abstract class AbstractResistor {
    abstract getResistance(): number;
    getCurrent(u: number): number{
        return u/this.getResistance();
    }
}

class Resistor extends AbstractResistor {
    r: number = 0;
    constructor(r: number) {
        super();
        this.r = r;
    }
    getResistance(): number {
        return this.r;
    }
}

abstract class MultipleConnection extends AbstractResistor{
    resistors: AbstractResistor[] = []
    addResistor(r: AbstractResistor) {
        this.resistors.push(r);
    }
}

class ParallelConnection extends MultipleConnection{
    getResistance(): number{
        let inverseSum: number=0;
        for(let resistor of this.resistors){
            inverseSum+=1/resistor.getResistance();
        }
        return 1/inverseSum;
    }

    getCurrent(u: number): number {
        let currentSum: number=0;
        for(let resistor of this.resistors){
            currentSum += resistor.getCurrent(5);
        }
        return currentSum;
    }
}

class SerialConnection extends MultipleConnection{
    getResistance(): number{
        let sum: number=0;
        for(let resistor of this.resistors){
            sum += resistor.getResistance();
        }
        return sum;
    }
}

let p:ParallelConnection=new ParallelConnection();
p.addResistor(new Resistor(220));
p.addResistor(new Resistor(220));
p.addResistor(new Resistor(110));
console.log(p.getResistance());
console.log(p.getCurrent(5));

let p2:ParallelConnection=new ParallelConnection();
p2.addResistor(new Resistor(110));
p2.addResistor(new Resistor(110));
console.log(p2.getResistance());

let p3:ParallelConnection=new ParallelConnection();
p3.addResistor(p);
p3.addResistor(p2);
console.log(p3.getResistance());

let s1:SerialConnection=new SerialConnection();
s1.addResistor(new Resistor(220));
s1.addResistor(new Resistor(110));
console.log(s1.getResistance());

let s2:SerialConnection=new SerialConnection();
s2.addResistor(new Resistor(220));
s2.addResistor(new Resistor(440));
console.log(s2.getResistance());

let s3:SerialConnection=new SerialConnection();
s3.addResistor(s1);
s3.addResistor(s2);
console.log(s3.getResistance());
console.log(s3.getCurrent(12));


let s4:SerialConnection=new SerialConnection();
s4.addResistor(new Resistor(220));
s4.addResistor(new Resistor(110));
let p4:ParallelConnection=new ParallelConnection();
p4.addResistor(s4)
p4.addResistor(new Resistor(330))
console.log(p4.getResistance());