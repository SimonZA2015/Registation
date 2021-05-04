import React from "react";
import {InputAdornment, TextField} from "@material-ui/core";

import style from "../../Steps/InitialsStep/IntialsStep.module.css";

const InputBlock = (props) => {

    return (
        <div>
            <TextField
                className={style.inputIntials}
                onChange={(event) => props.set(event.target.value)}
                id="input-initials"
                type={props.type}
                label={props.text}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            {props.icon}
                        </InputAdornment>
                    ),
                }}
            /></div>
    )
}

export default InputBlock;