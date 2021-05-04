import React, {useState} from 'react';
import InitialsStep from "../../Steps/InitialsStep/InitialsStep";

import style from './RegistrationBlock.module.css';
import BirthdayStep from "../../Steps/BirthdayStep/BirthdayStep";
import PasswordStep from "../../Steps/PasswordStep/PasswordStep";
import CompleteStep from "../../Steps/CompleteStep/CompleteStep";

//Блок показа этапов регистрации
const RegistrationBlock = (props) => {

    //получаю номер экрана
    const idStep = props.props.getStep();

    const steps = [
        <InitialsStep go={() => props.props.setName(props.Name)} name={props.setName} />,
        <BirthdayStep go={() => props.props.setBirthday(props.Br)} br={(t) => {props.setBr(t)}} />,
        <PasswordStep go={() => {if (props.pass === props.pass1) {
            props.props.setPassword(props.pass,  props.pass1);
        }}} pass1={props.setPass1} pass={props.setPass} />,
        <CompleteStep props={props.props} />
    ];

    return (
        <div className={style.body}>
            {steps[idStep]}
        </div>
    )
}

export default RegistrationBlock;