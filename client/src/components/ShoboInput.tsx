
import * as React from "react";
import { Input } from "@material-ui/core";

const ShoboInput = ({ handleChange, value, type }: any) => {
    return (
        <Input
            type={ type }
            value={ value }
            onChange={
                e => handleChange(e.target.value)
            }
            />
    );
};

export default ShoboInput;
