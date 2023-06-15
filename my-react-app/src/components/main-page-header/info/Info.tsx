import React from 'react';
import styles from './Info.module.scss';
import {IListLinks} from "../../../types/types.ts";
const Info: React.FC = () => {



    const listLinks: IListLinks[] = [
        {
            id: 1,
            name: "Telegram",
            link: "https://t.me/zlv_tg"
        },
        {
            id: 2,
            name: "GitHub",
            link: "https://github.com/zlv131"
        },
        {
            id: 3,
            name: "Resume",
            link: "https://t.me/zlv_tg"
        },
    ];

    return (
        <div className={styles.wrapper}>
            <p className={styles.titleName}> Захар Леглер </p>
            <div className={styles.links}>
                {listLinks.map((item: IListLinks) =>
                    <div key={item.id}>
                        <img src="./src/assets/folder.svg" alt=""/>
                        <a className={styles.itemLink} href={item.link}> {item.name} </a>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Info;