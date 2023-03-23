import {subtle} from "crypto";

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

    getResistance(){
        return this.resistance
    }

    getCurrent(u: number): number {
        return u / this.getResistance()
    }

    getPower(u: number): number {
        return u * this.getCurrent(u)
    }
}

class ParallelCircuit{
    resistors: Resistor[] = [];
    push(r: Resistor) {
        this.resistors.push(r);
    }
    getMaxVoltage():number{
        if(this.resistors.length==0){throw new Error("No resistors");}
        let maxVoltage=this.resistors[0].getMaxVoltage();
        for(let r of this.resistors){
            if(r.getMaxVoltage()<maxVoltage){maxVoltage=r.getMaxVoltage();}
        }
        return maxVoltage;
    }

    getResistance(): number{
        let inverseSum: number=0;
        for(let resistor of this.resistors){
            inverseSum+=1/resistor.getResistance();
        }
        return 1/inverseSum;
    }

    getCurrent(u: number): number{
        let currentSum: number = 0
        for(let resistor of this.resistors){
            currentSum += resistor.getCurrent(u)
        }
        return currentSum
    }

    getPower(u: number): number{
        return this.getCurrent(u) * u
    }
}

function getCurrents(resistors: Resistor[]) : number[]{
    let currents:number[]=[];
    for(let i=0; i<resistors.length; i++){
        currents.push(resistors[i].getCurrent(5));
    }
    return currents;
}

function getPowers(resistors: Resistor[]) : number[]{
    let currents:number[]=[];
    for(let i=0; i<resistors.length; i++){
        currents.push(resistors[i].getPower(5));
    }
    return currents;
}

let ps1=new ParallelCircuit();
ps1.push(new Resistor(220, 0.5));
ps1.push(new Resistor(220, 0.5));
ps1.push(new Resistor(110, 0.25));
console.log(ps1.getMaxVoltage());
console.log(ps1.getResistance());
console.log(ps1.getCurrent(5));
console.log(getCurrents(ps1.resistors))
console.log(getPowers(ps1.resistors));