import React from "react";
import Select from "react-select";
import getOptionsForSelect from "../helpers/getOptionsForSelect";

const TypeAhead = ({groupedOptions, onChange}) => {
    const options = getOptionsForSelect(groupedOptions);

    return (
        <div>
            <p>Choose channel or campaign:</p>
            <Select
                options={options}
                onChange={onChange}
            />
        </div>
    );
};

export default TypeAhead;