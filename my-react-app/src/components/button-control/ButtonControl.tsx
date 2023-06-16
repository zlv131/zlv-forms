import React from 'react';
import styles from './ButtonControl.module.scss';
import {useAppDispatch} from "../../hooks/useAppDispatch.ts";
import {setCurrentStep} from "../../store/slices/stepsSlices.ts";
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import {useNavigate} from "react-router-dom";

interface IButtonControlProps {
    title: string;
}
const ButtonControl: React.FC<IButtonControlProps> = ({ title }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const currentStep = useAppSelector(state => state.stepsSlices.currentStep);

    const handleOnClick = () => {
        if (title === "Вперед") {
            dispatch(setCurrentStep(currentStep + 1));
        } else if (title === "Назад" && currentStep === 1) {
            navigate("/");
        } else {
            dispatch(setCurrentStep(currentStep - 1));
        }
    }


    return (
        <div className={styles.wrapper}>
            <button value={title}
                    className={title === "Вперед" ? styles.buttonForward : styles.buttonBack}
                    onClick={handleOnClick}> {title} </button>
        </div>
    );
};

export default ButtonControl;