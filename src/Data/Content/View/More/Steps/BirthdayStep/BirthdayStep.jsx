import React from "react";
import InputBlock from "../../Components/InputBlock/InputIntilias";
import CakeIcon from '@material-ui/icons/Cake';
import ButtonGo from "../../Components/BottonGo/ButtonGo";

import style from './BirthdayStep.module.css';

const BirthdayStep = (props) => {

    return (
        <div className={style.body}>
            <InputBlock text={'День рождения'} icon={<CakeIcon />} set={props.br} />
            <ButtonGo go={props.go} />
            <spam>Ведите дату правильно</spam>
        </div>
    )
}

export default BirthdayStep;