class Hinhchunhat {
    length;
    width;
    acreage;
    perimter;

    constructor(lengthInput, widthInput, acreageInput, perimterInput) {
        this.length = lengthInput;
        this.width = widthInput;
        this.acreage = acreageInput;
        this.perimter = perimterInput;

    }

    getLength() {
        return this.length;
    }

    getWidth() {
        return this.width;
    }

    getAcreage() {
        return this.acreage;
    }

    getPerimter() {
        return this.perimter;
    }

    setLength(lengthInput) {
        this.length = lengthInput;
    }

    setWidth(widthInput) {
        this.width = widthInput
    }

    setAcreage(acreageInput) {
        this.acreage = acreageInput;
    }

    setPerimter(perimterInput) {
        this.perimter = perimterInput;
    }

    setAVGAcreage() {
        return this.length * this.width
    }

    setAVGPerimter() {
        return (this.length + this.width) * 2
    }

    getInfo() {
        return this.length + '-' + this.width + '-' + this.setAVGAcreage() + '-' + this.setAVGPerimter()
    }
}

function main() {
    let hinhChuNhat1 = new Hinhchunhat(10, 8)
    // let hinhChuNhat2 = new Hinhchunhat(12, 10)
    hinhChuNhat1.setLength(15);
    hinhChuNhat1.setWidth(10);
    alert(hinhChuNhat1.getLength())
    alert(hinhChuNhat1.getWidth())


    console.log(hinhChuNhat1.getInfo());
    console.log(hinhChuNhat1getInfo());
}

main()