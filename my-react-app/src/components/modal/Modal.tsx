import React from 'react';
import styles from './Modal.module.scss';
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks/useAppDispatch.ts";
import {setCurrentStep} from "../../store/slices/stepsSlices.ts";

interface IModalProps {
    active: boolean,
    setActive: (active: boolean) => void,
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
                    {status
                        ? <svg className={styles.imgModal} width="396" height="132" viewBox="0 0 396 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="396" height="132" fill="white"/>
                            <rect x="158" y="26" width="80" height="80" rx="40" fill="#05AE71" fill-opacity="0.15"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M178.8 66C178.8 55.4016 187.402 46.8 198 46.8C208.598 46.8 217.2 55.4016 217.2 66C217.2 76.5985 208.598 85.2001 198 85.2001C187.402 85.2001 178.8 76.5985 178.8 66ZM205.409 58.9903C204.968 58.6817 204.356 58.7557 204.006 59.16L195.896 68.5311L191.715 64.7738C191.316 64.4157 190.701 64.4157 190.302 64.7738L188.733 66.1842C188.289 66.5831 188.289 67.264 188.733 67.6629L194.595 72.9315C194.787 73.1041 195.04 73.2 195.302 73.2H196.907C197.214 73.2 197.506 73.0683 197.703 72.8401L207.357 61.6856C207.745 61.2368 207.658 60.5625 207.168 60.2199L205.409 58.9903Z" fill="#05AE71"/>
                        </svg>
                        : <svg width="396" height="132" viewBox="0 0 396 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="396" height="132" fill="white"/>
                            <rect x="158" y="26" width="80" height="80" rx="40" fill="#E84E58" fill-opacity="0.15"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M198 46.7998C187.401 46.7998 178.8 55.4014 178.8 65.9998C178.8 76.5982 187.401 85.1998 198 85.1998C208.598 85.1998 217.2 76.5982 217.2 65.9998C217.2 55.4014 208.598 46.7998 198 46.7998ZM190.409 57.4835C190.732 57.161 191.255 57.161 191.577 57.4835L198 63.9062L204.423 57.4838C204.745 57.1613 205.268 57.1613 205.59 57.4838L206.758 58.6515C207.08 58.974 207.08 59.4968 206.758 59.8192L200.335 66.2417L206.758 72.6641C207.08 72.9865 207.08 73.5094 206.758 73.8318L205.59 74.9996C205.268 75.322 204.745 75.322 204.422 74.9996L198 68.5772L191.577 74.9998C191.255 75.3223 190.732 75.3223 190.41 74.9998L189.242 73.8321C188.919 73.5096 188.919 72.9868 189.242 72.6643L195.665 66.2417L189.242 59.819C188.919 59.4965 188.919 58.9737 189.242 58.6512L190.409 57.4835Z" fill="#E84E58"/>
                        </svg>
                    }
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