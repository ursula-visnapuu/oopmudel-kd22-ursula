// function getCurrent(voltage: number, watts: number): number{
//     return watts/voltage;
// }
//
// function getCurrent2(voltage: number, resistance: number): number{
//     return voltage/resistance;
// }
//
// function maximumVoltage(resistanceOhms: number, powerMaximumWatts: number):number{
//     //U*I=P
//     //U/I=R
//     //I=U/R
//     //U*U/R=P
//     //U*U=P*R
//     //U=sqrt(P*R)
//     return Math.sqrt(powerMaximumWatts*resistanceOhms);
// }
//
// let maxVoltage = maximumVoltage(110, 0.25)
// let maxCurrent = getCurrent(maxVoltage, 0.25)
// console.log(maxVoltage);
// console.log(maxCurrent);
// let maxPower = maxCurrent * maxVoltage
// console.log(maxPower)
//
// maxVoltage = maximumVoltage(4700, 1)
// console.log(maxVoltage);
//
// let testCurrent = getCurrent2(5, 220)
// console.log(testCurrent)

class Resistor {
    r: number = 0;
    maximumPower: number = 0
    constructor(r: number, maximumPower: number) {
        this.r = r;
        this.maximumPower = maximumPower
    }
    getCurrent(u: number): number {
        return u / this.r;
    }

    getPower(u: number): number {
        return u * this.getCurrent(u)
    }

    getMaxVoltage(u: number): number {
        return Math.sqrt(this.maximumPower * this.r);
    }
}

let r1: Resistor = new Resistor(110, 0.25);
console.log(r1.getMaxVoltage(5));