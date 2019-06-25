import React from 'react';
import './ItemSummary.css';
import ItemMetric from "./ItemMetric";

const ItemSummary = ({dataRow}) => {
    if (dataRow === null) {
        return null;
    }

    return (
        <div className="item-summary">
            {Object.entries(dataRow.metrics).map((item) => (
                <ItemMetric key={item[0]} name={item[0]} count={item[1]}/>
            ))}
        </div>
    );
};

export default ItemSummary;