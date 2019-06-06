import React from "react";
import Select from "react-select";

const TypeAhead = ({groupedOptions, onChange}) => (
    <div>
        <p>Choose channel or campaign:</p>
        <Select
            options={groupedOptions}
            onChange={onChange}
        />
    </div>
);

export default TypeAhead;