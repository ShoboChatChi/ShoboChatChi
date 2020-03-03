import * as React from "react";

interface ButtonProps {
    handleClick: (arg: unknown) => void;
    payload: any;
    value: string;
}

function Button({ handleClick, payload, value }: ButtonProps) {
    return (
        <div>
            <button onClick={
                    () => { handleClick(payload); }
                }>{ value }</button>
        </div>
    );
}

export default Button;
