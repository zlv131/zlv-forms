import React from 'react';
import styles from './FormPage.module.scss';
import Step from "../../components/step/Step.tsx";
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import FirstStep from "../../components/first-step/FirstStep.tsx";
import SecondStep from "../../components/second-step/SecondStep.tsx";
import ThirdStep from "../../components/third_step/ThirdStep.tsx";
import {useForm} from "react-hook-form";
const FormPage: React.FC = () => {
    const currentStep = useAppSelector(state => state.stepsSlices.currentStep);

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
    } = useForm({
        mode: "onBlur",
    });

    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
    }

    return (
        <div className={styles.wrapper}>
            <Step/>
            <div className={styles.contentForm}>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    {currentStep === 1 && <FirstStep register={register} errors={errors}/>}
                    {currentStep === 2 && <SecondStep register={register} errors={errors}/>}
                    {currentStep === 3 && <ThirdStep/>}

                    <button id={'button-start'}
                            className={styles.button}> Начать </button>
                </form>
            </div>
        </div>
    );
};

export default FormPage;