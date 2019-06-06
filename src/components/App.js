import React from 'react';
import './App.css';
import TypeAhead from "./TypeAhead";
import Loading from "./Loading";
import DataProvider from "../helpers/DataProvider";
import {API_URL} from "../config";
import ItemSummary from "./ItemSummary";

const dataProvider = new DataProvider(API_URL);

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            selectedIndex: null,
        };

        this.onTypeAheadChange = this.onTypeAheadChange.bind(this);
    }

    onTypeAheadChange(selectedItem) {
        console.log(selectedItem);

        this.setState({
            selectedIndex: selectedItem.value
        });
    }

    componentDidMount() {
        let self = this;

        dataProvider.loadDataFromApi(() => {
            self.setState({
                isLoading: false
            });

            console.log(dataProvider.getData());
        });
    }

    render() {
        if (this.state.isLoading) {
            return <Loading />;
        }

        let dataRow = dataProvider.getSelectedRow(this.state.selectedIndex);

        let itemSummaryElement = (dataRow !== null)
            ? <ItemSummary clicks={dataRow.clicks} impressions={dataRow.impressions} />
            : null;

        return (
            <div className="App">
                <TypeAhead groupedOptions={dataProvider.getData()} onChange={this.onTypeAheadChange} />

                {itemSummaryElement}
            </div>
        );
    }
}

export default App;
