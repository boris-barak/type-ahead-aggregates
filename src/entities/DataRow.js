export default class DataRow {
    constructor(array) {
        this._data = array;
    }

    get campaign() {
        return this._data[0];
    }

    get channel() {
        return this._data[1];
    }

    get clicks() {
        return this._data[2];
    }

    get impressions() {
        return this._data[3];
    }
}