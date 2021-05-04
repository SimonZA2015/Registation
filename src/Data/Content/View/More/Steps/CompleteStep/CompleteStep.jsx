import React from "react";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import style from './CompleteStep.module.css';

const CompleteStep = ({props}) => {

    const info = props.getInfo();

    return (
        <div className={style.body}>
            <CheckCircleOutlineIcon style={{margin: '0px 48%'}}/>
            <div className={style.info}>
                <h4>{'Ваше имя: ' + info.name}</h4>
                <span>{'Дата рождения: ' + info.birthday}</span>
                <div><span>{'Ваш пароль: ' + info.pass}</span></div>
            </div>
        </div>
    )
}

export default CompleteStep;