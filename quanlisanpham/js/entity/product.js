class Product {
    _id;
    _name;
    _quality;
    _price;

    constructor(id, name, quality, price) {
        this._id = id;
        this._name = name;
        this._quality = quality;
        this._price = price;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get quality() {
        return this._quality;
    }

    set quality(value) {
        this._quality = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }
}