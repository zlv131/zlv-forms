interface IListLinks {
    id: number;
    name: string;
    link: string;
}

interface ICheckBox {
    id: number,
    checked: boolean,
}

interface IValueForms {
    phoneNumber: string;
    email: string;
    nickname: string,
    name: string,
    surname: string,
    sex: string,
    listAdvantages: IAdvantagesItem[];
    listCheckBox: ICheckBox[];
    selectedRadio: null | number;
    about: string;
}

interface IStepsSlices {
    steps: string[],
    currentStep: number,
}

interface IAdvantagesItem {
    id: number,
    title: string;
}



export type {
    IListLinks,
    IValueForms,
    IStepsSlices,
    IAdvantagesItem,

}