const _ = require('lodash');

const ColumnByTypeSeparator = (dataTable) => {
    if (dataTable.length === 0) {
        throw new Error('No data records in dataTable!');
    }

    const firstValue = _.mapValues(dataTable[0], (value) => (
        !isNaN(value)
    ));

    const numericDataOnly = _(dataTable)
        .reduce((accumulator, item) => (
            _.mapValues(item, (value, key) => (
                accumulator[key] && !isNaN(value)
            ))
        ), firstValue);

    const getChainColumnNamesFiltered = (isNumericOnly) => (
        _(numericDataOnly)
            .pickBy((value) => (
                value === isNumericOnly
            ))
    );

    const getStringColumnNames = () => (
        getChainColumnNamesFiltered(false)
            .keys()
            .value()
    );

    const getNumericColumns = () => (
        getChainColumnNamesFiltered(true)
            .value()
    );

    return {
        getStringColumnNames,
        getNumericColumns
    };
};

export default ColumnByTypeSeparator;