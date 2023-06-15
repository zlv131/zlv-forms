import React from 'react';
import MainPageHeader from "../../components/main-page-header/MainPageHeader.tsx";
import styles from './Main.module.scss';
import MainPageForm from "../../components/main-page-form/MainPageForm.tsx";
const Main: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <MainPageHeader/>
            <MainPageForm/>
        </div>
    );
};

export default Main;