import React, {useState, useCallback} from 'react';
import './App.css';
import TypeAhead from "./TypeAhead";
import ItemSummary from "./ItemSummary";
import LoadingContainer from "./LoadingContainer";
import DataProvider from "../helpers/DataProvider";
import {API_URL} from "../config";

const dataProvider = new DataProvider(API_URL);

const App = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const onTypeAheadChange = useCallback((selectedItem) => {
        setSelectedIndex(selectedItem.value);
    }, []);

    const selectedDataRow = dataProvider.getSelectedRow(selectedIndex);

    return (
        <LoadingContainer dataProvider={dataProvider}>
            {() => ( // used the callback here because the children has to be rendered after the loading is finished
                <div className="App">
                    <TypeAhead groupedOptions={dataProvider.getData()} onChange={onTypeAheadChange} />
                    <ItemSummary dataRow={selectedDataRow} />
                </div>
            )}
        </LoadingContainer>
    );
};

export default App;