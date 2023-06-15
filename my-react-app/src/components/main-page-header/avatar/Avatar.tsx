import React from 'react';
import styles from './Avatar.module.scss';
const Avatar: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.avatar}>
                <span className={styles.title}> ЗЛ </span>
            </div>
        </div>
    );
};

export default Avatar;