import React from 'react';

const ItemMetric = ({name, count}) => (
    <div>
        <span>{name}:</span>
        <strong>{count}</strong>
    </div>
);

export default ItemMetric;