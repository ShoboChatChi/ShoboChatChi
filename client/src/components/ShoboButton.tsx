import * as React from "react";
import Button from "@material-ui/core/Button";

interface ShoboButtonProps {
    handleClick: (arg: unknown) => void;
    payload: unknown;
    value: string;
}

function ShoboButton({ handleClick, payload, value }: ShoboButtonProps) {
    return (
        <Button
            onClick={
                () => { handleClick(payload); }
            }
            >{ value }</Button>
    );
}

export default ShoboButton;
