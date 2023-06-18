import React from 'react';
import styles from './Modal.module.scss';
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks/useAppDispatch.ts";
import {setCurrentStep} from "../../store/slices/stepsSlices.ts";

interface IModalProps {
    active: boolean,
    setActive: any,
    status: boolean,
}
const Modal: React.FC<IModalProps> = ({ active, setActive, status }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleOnClick = () => {
        if (status) {
            dispatch(setCurrentStep(1));
            navigate("/");
        } else {
            setActive(false);
        }
    }

    return (
        <div className={active ? styles.wrapperActive : styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.titleModal}>
                        {status ? "Форма успешно отправлена" : "Ошибка: нужно заполнить все поля корректно"}
                    </div>
                    <img className={styles.imgModal} src={status ? "./src/assets/success.svg" : "./src/assets/unlucky.svg"} alt=""/>
                    <button onClick={handleOnClick}
                        id={status ? "button-to-main" : "button-close"}
                        className={styles.buttonModal}>
                        {status ? "На главную" : "Закрыть"}
                    </button>
                </div>
        </div>
    );
};

export default Modal;