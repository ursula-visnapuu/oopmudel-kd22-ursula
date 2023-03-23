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

class Switch extends AbstractResistor {
    on: boolean = false;
    setOn(state: boolean){
        this.on=state;
    }
    getResistance(): number {
        return (this.on ? 0 : 1000000000);
    }
    getCurrent(u: number): number{
        if(u>0){
            if(this.on){
                throw new Error("Short circuit");
            }
        }
        return super.getCurrent(u);
    }
}

function printResistance(r: AbstractResistor){
    console.log(r.getResistance());
}

function getTotalResistance(elements: AbstractResistor[]){
    let totalResistance = 0
    elements.forEach((element) => {
        totalResistance += element.getResistance()
    })
    console.log(totalResistance)
}

let r1: Switch = new Switch();
let r2: AbstractResistor = new Resistor(220);
let elements = []
elements.push(r1)
elements.push(r2)
r1.setOn(true);
getTotalResistance(elements)

r1.setOn(false);
getTotalResistance(elements)