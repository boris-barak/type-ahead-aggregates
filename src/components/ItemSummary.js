import React from 'react';
import './ItemSummary.css';

const ItemSummary = ({clicks, impressions}) => (
    <div className="item-summary">
        <div>
            <span>Clicks:</span>
            <strong>{clicks}</strong>
        </div>
        <div>
            <span>Impressions:</span>
            <strong>{impressions}</strong>
        </div>
    </div>
);

export default ItemSummary;