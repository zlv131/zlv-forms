interface IListLinks {
    id: number;
    name: string;
    link: string;
}

interface ICheckBox {
    id: number,
    checked: boolean,
}
interface IValueFormsSlices {
    phoneNumber: string;
    email: string;
    listAdvantages: IAdvantagesItem[];
    listCheckBox: ICheckBox[];
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
    IValueFormsSlices,
    IStepsSlices,
    IAdvantagesItem,

}