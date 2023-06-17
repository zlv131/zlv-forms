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
                    {currentStep === 3 && <ThirdStep register={register} errors={errors}/>}

                    {currentStep === 3 &&
                    <div className={styles.groupButton}>
                      <div className={styles.buttonBack}>
	                      <ButtonControl title={"Назад"}/>
                      </div>
	                    <button id={'button-send'} onClick={() => setActive(true)} className={styles.buttonSend}> Отправить </button>
                    </div>
                    }

                    <Modal active={active} setActive={setActive} status={true}/>
                </form>
            </div>
        </div>
    );
};

export default FormPage;