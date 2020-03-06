import * as React from "react";
import Button from "@material-ui/core/Button";

import { useStyles } from "../style";

interface ShoboButtonProps {
    handleClick: (arg: unknown) => void;
    payload: unknown;
    value: string;
}

function ShoboButton({ handleClick, payload, value }: ShoboButtonProps) {
    const classes = useStyles();
    return (
        <Button
            onClick={
                () => { handleClick(payload); }
            }
            className={ classes.button }
            variant="outlined"
            >{ value }</Button>
    );
}

export default ShoboButton;
