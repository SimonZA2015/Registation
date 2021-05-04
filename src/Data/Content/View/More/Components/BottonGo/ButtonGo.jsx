import React from "react";
import {Button, withStyles} from "@material-ui/core";
import style from "../../Steps/InitialsStep/IntialsStep.module.css";

const ButtonTemp = withStyles((theme) => ({
    root: {
        position: 'absolute',
        bottom: '10px',
        right: '10px',
    },
}))(Button);

const ButtonGo = (props) => {

    return (
        <ButtonTemp onClick={() => props.go()} className={style.buttonGo} variant="contained" color="primary">Next</ButtonTemp>
    )
}

export default ButtonGo;