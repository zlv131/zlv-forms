import React from 'react';
import styles from './Step.module.scss';
import {useAppSelector} from "../../hooks/useAppSelector.ts";
const Step: React.FC = () => {
    const currentStep = useAppSelector(state => state.stepsSlices.currentStep);

    return (
        <div className={styles.wrapper}>
            {currentStep === 1 && <img src="./src/assets/firstStep.svg" alt=""/>}
            {currentStep === 2 && <img src="./src/assets/secondStep.svg" alt=""/>}
            {currentStep === 3 && <img src="./src/assets/thirdStep.svg" alt=""/>}
        </div>
    );
};

export default Step;