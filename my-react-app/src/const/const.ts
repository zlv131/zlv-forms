import {IListLinks} from "../types/types.ts";

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
        link: "https://drive.google.com/file/d/1K6FrqRhG014nNpXQic7sFE2P68Gre5vJ/view?usp=sharing"
    },
];

const PATTERN = /\D/g;

const URL: string = 'https://api.sbercloud.ru/content/v1/bootcamp/frontend';

export {
    URL,
    listLinks,
    PATTERN,
}