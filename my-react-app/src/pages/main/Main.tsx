import React from 'react';
import MainPageHeader from "../../components/main-page-header/MainPageHeader.tsx";
import styles from './Main.module.scss';
const Main: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <MainPageHeader/>
        </div>
    );
};

export default Main;