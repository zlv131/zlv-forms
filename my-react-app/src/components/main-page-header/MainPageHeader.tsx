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
            <img src="./src/assets/Divider.svg" alt=""/>
        </div>
    );
};

export default MainPageHeader;