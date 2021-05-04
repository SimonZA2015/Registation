import React from 'react';
import InputBlock from "../../Components/InputBlock/InputIntilias";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ButtonGo from "../../Components/BottonGo/ButtonGo";

import style from './IntialsStep.module.css';

//Страница, на которой будет проходить регистрация
const InitialsView = (props) => {

    return (
        <div className={style.body}>
            <InputBlock set={(text) => props.name(text)} text={'Ваше имя и фамилия'} icon={<AccountCircle />}  />
            <ButtonGo go={props.go} />
        </div>
    )
}

export default InitialsView;