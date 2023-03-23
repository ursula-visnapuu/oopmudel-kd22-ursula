class Resistor{
    resistance: number;
    maxPower: number;
    constructor(resistance: number, maxPower: number){
        this.resistance=resistance;
        this.maxPower=maxPower;
    }
    getMaxVoltage():number{
        return Math.sqrt(this.resistance*this.maxPower);
    }
    getMaxCurrent():number{
        return Math.sqrt(this.maxPower/this.resistance);
    }
}

class SeriesCircuit{
    resistors: Resistor[] = [];
    push(r: Resistor) {
        this.resistors.push(r);
    }
    getMaxCurrent():number{
        if(this.resistors.length==0){throw new Error("No resistors");}
        let maxCurrent=this.resistors[0].getMaxCurrent();
        for(let r of this.resistors){
            if(r.getMaxCurrent()<maxCurrent){maxCurrent=r.getMaxCurrent();}
        }
        return maxCurrent;
    }

    getMaxVoltage():number{
        if(this.resistors.length==0){throw new Error("No resistors");}
        let sum = 0;
        for(let r of this.resistors){
            sum += this.getMaxCurrent() * r.resistance
        }
        return sum;
    }

    getTotalResistanse(): number {
        if(this.resistors.length==0){throw new Error("No resistors");}
        let sum = 0;
        for(let r of this.resistors){
            sum += r.resistance
        }
        return sum;
    }
}

let ss1=new SeriesCircuit();
ss1.push(new Resistor(220, 0.5));
ss1.push(new Resistor(110, 0.5));
ss1.push(new Resistor(110, 0.5));
console.log(ss1.getMaxCurrent());
console.log(ss1.getMaxVoltage());
console.log(ss1.getTotalResistanse());

let ss2=new SeriesCircuit();
ss2.push(new Resistor(220, 0.5));
ss2.push(new Resistor(4700, 0.25));
console.log(ss2.getMaxCurrent());
console.log(ss2.getMaxVoltage());
console.log(ss2.getTotalResistanse());