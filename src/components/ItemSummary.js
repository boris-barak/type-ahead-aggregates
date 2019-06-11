import React from 'react';
import './ItemSummary.css';
import ItemMetric from "./ItemMetric";

const ItemSummary = ({clicks, impressions}) => (
    <div className="item-summary">
        <ItemMetric name="Clicks" count={clicks} />
        <ItemMetric name="Impressions" count={impressions} />
    </div>
);

export default ItemSummary;