import React from 'react';
import styles from './MainPageHeader.module.scss';
import Avatar from "./avatar/Avatar.tsx";
import Info from "./info/Info.tsx";
const MainPageHeader: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <Avatar/>
                <Info/>
            </div>
            <svg className={styles.divider} width="852" height="2" viewBox="0 0 852 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1L852 1" stroke="black" stroke-opacity="0.08"/>
            </svg>
        </div>
    );
};

export default MainPageHeader;