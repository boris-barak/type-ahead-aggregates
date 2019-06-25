const _ = require('lodash');

const getOptionsForSelect = (groupedAndSumarisedData) => (
    _.map(groupedAndSumarisedData, (option, index) => {
        return {
            ...option,
            value: index
        };
    })
);

export default getOptionsForSelect;