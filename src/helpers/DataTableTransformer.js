const _ = require('lodash');

export default class DataTableTransformer {
    constructor(dataTable) {
        this._dataTable = dataTable;
    }

    getGroupedAndSumarisedData(propertyName) {
        return _(this._dataTable)
            .groupBy(propertyName)
            .map((item, name) => ({
                label: name,
                clicks: _.sumBy(item, item => Number(item.clicks)),
                impressions: _.sumBy(item, item => Number(item.impressions))
            }))
            .value();
    };
}