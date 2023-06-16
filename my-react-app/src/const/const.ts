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
        link: "https://t.me/zlv_tg"
    },
];

const PATTERN = /\D/g;

export {
    listLinks,
    PATTERN,
}