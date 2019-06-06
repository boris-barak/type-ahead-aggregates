import DataRow from "../entities/DataRow";

const getDataTableFromCSV = (dataFromCSV) => {
    let dataArrayFromCSV = dataFromCSV.split('\n');

    dataArrayFromCSV.shift(); // removes the first line

    let dataArray = [];
    dataArrayFromCSV.forEach((csvLine) => {
        let itemData = csvLine.split(',');
        let dataRow = new DataRow(itemData);

        dataArray.push(dataRow);
    });

    return dataArray;
};

export default getDataTableFromCSV;