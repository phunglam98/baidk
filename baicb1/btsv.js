class Sinhviencodegym{
    name;
    age;
    point;
    constructor(nameInput, ageInput, pointInput) {
        this.name = nameInput;
        this.age = ageInput;
        this.point = pointInput;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age
    }
    getPoint(){
        return this.point;
    }
    setName(nameInput){
        this.name = nameInput;
    }
    setAge(ageInput){
        this.age = ageInput;
    }
    setPoint(pointInput){
        this.point = pointInput;
    }
    getAVGPoint(){
        let sum = 0;
        for (let i = 0; i < this.point.length; i++) {
            sum +=this.point[i];

        }
        let avg = sum/this.point.length;
        return avg;
    }
    getInfo(){
        return this.getName() + '-' + this.getAVGPoint()
    }
}
function main(){
    let sinhVien1 = new Sinhviencodegym('lam',25,[7,8,9])
    let sinhVien2 = new Sinhviencodegym('dan',25,[7,8,10])

    console.log(sinhVien1.getInfo())
    console.log(sinhVien2.getInfo())

}

