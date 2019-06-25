const _ = require('lodash');

const getDataTableFromCSV = (dataFromCSV) => {
    const wholeArrayFromCSV = dataFromCSV.split('\n');
    const headerArrayFromCSV = wholeArrayFromCSV[0].split(',');

    const dataArrayFromCSV = wholeArrayFromCSV.slice(1); // without the first line/header

    return _.map(dataArrayFromCSV, (csvLine) => {
        const itemData = csvLine.split(',');

        return _.reduce(
            itemData,
            (accumulator, value, index) => {
                const key = headerArrayFromCSV[index];
                return {...accumulator, [key]: value};
            },
            {}
        );
    });
};

export default getDataTableFromCSV;