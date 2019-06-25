import axios from "axios";
import getDataTableFromCSV from "../factories/getDataTableFromCSV";
import getGroupedAndSumarisedData from "./getGroupedAndSumarisedData";

export default class DataProvider {
    constructor(url) {
        this._ulr = url;
        this._data = null;
    }

    loadDataFromApi(finishCallback) {
        axios.get(this._ulr).then(data => {
            const dataTable = getDataTableFromCSV(data.data);
            this._data = getGroupedAndSumarisedData(dataTable);

            finishCallback();
        });
    };

    getData() {
        return this._data;
    }

    getSelectedRow(index) {
        if (index === null) {
            return null;
        }

        return this._data[index];
    }
}