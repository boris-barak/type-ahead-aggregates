import axios from "axios";
import getDataTableFromCSV from "../factories/getDataTableFromCSV";
import DataTableTransformer from "./DataTableTransformer";

export default class DataProvider {
    constructor(url) {
        this._ulr = url;
        this._data = null;
    }

    loadDataFromApi(finishCallback) {
        let self = this;

        axios.get(this._ulr).then(data => {
            let dataTable = getDataTableFromCSV(data.data);
            const dataTableTransformer = new DataTableTransformer(dataTable);
            let channels = dataTableTransformer.getGroupedAndSumarisedData('channel');
            let campaigns = dataTableTransformer.getGroupedAndSumarisedData('campaign');

            self._data = [...channels, ...campaigns];

            self._data.forEach((value, index) => {
                value['value'] = index;
            });

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