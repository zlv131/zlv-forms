import React from 'react';
import styles from './ThirdStep.module.scss';
import ButtonControl from "../button-control/ButtonControl.tsx";
const ThirdStep: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <ButtonControl title={"Назад"}/>
        </div>
    );
};

export default ThirdStep;