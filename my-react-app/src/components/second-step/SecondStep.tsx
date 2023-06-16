import React from 'react';
import styles from './SecondStep.module.scss';
import ButtonControl from "../button-control/ButtonControl.tsx";
const SecondStep: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <ButtonControl title={"Назад"}/>
            <ButtonControl title={"Вперед"}/>
        </div>
    );
};

export default SecondStep;