import ColumnByTypeSeparator from "./ColumnByTypeSeparator";

const _ = require('lodash');

const getGroupedAndSumarisedData = (dataTable) => {
    const columnSeparator = ColumnByTypeSeparator(dataTable);

    const arrayOfResults = _.map(columnSeparator.getStringColumnNames(), (columnNameString) => {
        return _(dataTable)
            .groupBy(columnNameString)
            .map((item, name) => {
                const newDataRow = _.mapValues(columnSeparator.getNumericColumns(), (value, columnNameNumeric) => (
                    _.sumBy(item, item => Number(item[columnNameNumeric]))
                ));

                return {
                    label: name,
                    metrics: {...newDataRow}
                };
            })
            .value();
    });

    return _.reduce(arrayOfResults, (a, b) => (
        [...a, ...b]
    ));
};

export default getGroupedAndSumarisedData;