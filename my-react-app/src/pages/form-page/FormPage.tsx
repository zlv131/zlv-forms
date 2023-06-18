import React, {useState} from 'react';
import styles from './FormPage.module.scss';
import Step from "../../components/step/Step.tsx";
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import FirstStep from "../../components/first-step/FirstStep.tsx";
import SecondStep from "../../components/second-step/SecondStep.tsx";
import ThirdStep from "../../components/third_step/ThirdStep.tsx";
import {useForm} from "react-hook-form";
import ButtonControl from "../../components/button-control/ButtonControl.tsx";
import Modal from "../../components/modal/Modal.tsx";

const FormPage: React.FC = () => {
    const [active, setActive] = useState<boolean>(false);
    const [status, setStatus] = useState<boolean>(false);
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
        for (const dataKey in data) {
            if (data[dataKey] === "") {
                setStatus(false);
                return;
            } else if (dataKey === "nickname" && (data[dataKey].length > 30 || (/^[a-zA-Z0-9а-яА-Я]+$/.test(data[dataKey])) === false)) {
                setStatus(false);
                return;
            } else if ((dataKey === "name" || dataKey === "surname") && (data[dataKey].length > 50 || (/^[a-zA-Zа-яА-Я]+$/.test(data[dataKey])) === false)) {
                setStatus(false);
                return;
            } else {
                setStatus(true);
            }
        }
        console.log(JSON.stringify(data));
    }

    return (
        <div className={styles.wrapper}>
            <Step/>
            <div className={styles.contentForm}>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    {currentStep === 1 && <FirstStep register={register} errors={errors}/>}
                    {currentStep === 2 && <SecondStep register={register} errors={errors}/>}
                    {currentStep === 3 && <ThirdStep register={register} errors={errors}/>}
                    {currentStep === 3 &&
                    <div className={styles.groupButton}>
                      <div className={styles.buttonBack}>
	                      <ButtonControl title={"Назад"}/>
                      </div>
	                    <button id={'button-send'} onClick={() => {
                            handleSubmit(onSubmit);
                            setActive(true);
                        }} className={styles.buttonSend}> Отправить </button>
                    </div>
                    }

                    <Modal active={active} setActive={setActive} status={status}/>
                </form>
            </div>
        </div>
    );
};

export default FormPage;