import React from "react";
import InputBlock from "../../Components/InputBlock/InputIntilias";
import CakeIcon from '@material-ui/icons/Cake';
import ButtonGo from "../../Components/BottonGo/ButtonGo";

import style from './BirthdayStep.module.css';

const BirthdayStep = (props) => {

    return (
        <div className={style.body}>
            <InputBlock text={'День рождения'} icon={<CakeIcon />} set={props.br} type={'number'} />
            <ButtonGo go={props.go} />
        </div>
    )
}

export default BirthdayStep;