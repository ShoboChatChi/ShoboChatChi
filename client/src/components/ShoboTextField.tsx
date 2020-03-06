import * as React from "react";
import { TextareaAutosize } from "@material-ui/core";

import { useStyles } from "../style";

const TextArea = ({ handleChange, value }: any) => {
    return (
        <TextareaAutosize
            value={ value }
            onChange={
                e => handleChange(e.target.value)
            }
            />
    );
};

export default TextArea;
