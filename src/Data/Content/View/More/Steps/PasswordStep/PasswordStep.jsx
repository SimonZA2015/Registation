import React from "react";
import InputBlock from "../../Components/InputBlock/InputIntilias";
import ButtonGo from "../../Components/BottonGo/ButtonGo";
import LockIcon from '@material-ui/icons/Lock';

import style from './PasswordStep.module.css';

const PasswordStep = (props) => {

    return (
        <div className={style.body}>
            <InputBlock text={'Пароль'} icon={<LockIcon />} set={props.pass} type={'password'} />
            <InputBlock text={'Потвердите пароль'} icon={<LockIcon />} set={props.pass1} type={'password'}/>
            <ButtonGo go={props.go} />
            <span>Придумайте пароль и повторите его в следущем инпуте</span>
        </div>
    )
}

export default PasswordStep;