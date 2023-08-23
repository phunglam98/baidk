class Product {
    id;
    name;
    img;
    quality;
    price;


    constructor(id, name, img, quality, price) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.quality = quality;
        this.price = price;

    }

    get id() {
        return this.id;
    }

    set id(value) {
        this.id = value;
    }

    get name() {
        return this.name;
    }

    set name(value) {
        this.name = value;
    }
    get img() {
        return this.img;
    }

    set img(value) {
        this.img = value;
    }

    get quality() {
        return this.quality;
    }

    set quality(value) {
        this.quality = value;
    }

    get price() {
        return this.price;
    }

    set price(value) {
        this.price = value;
    }


}
