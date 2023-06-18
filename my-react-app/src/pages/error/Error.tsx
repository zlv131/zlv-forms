import React from 'react';
import styles from './Error.module.scss';
import {useNavigate} from "react-router-dom";
const Error: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.wrapper}>
            Такой страницы не существует 🥺
            <button onClick={() => navigate("/")} className={styles.helpButton}> На главную </button>
        </div>
    );
};

export default Error;