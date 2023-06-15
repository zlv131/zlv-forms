interface IListLinks {
    id: number;
    name: string;
    link: string;
}

interface IValueFormsSlices {
    phoneNumber: string;
    email: string;
}

interface IStepsSlices {
    steps: string[],
    currentStep: string,
}

export type {
    IListLinks,
    IValueFormsSlices,
    IStepsSlices,
}