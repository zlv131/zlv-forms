import React from 'react';
import styles from './Info.module.scss';
import {IListLinks} from "../../../types/types.ts";
import {listLinks} from "../../../const/const.ts";

const Info: React.FC = () => {
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