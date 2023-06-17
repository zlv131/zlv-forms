import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IValueFormsSlices} from "../../types/types.ts";

const initialState: IValueFormsSlices = {
    phoneNumber: '',
    email: '',
    nickname: '',
    name: '',
    surname: '',
    sex: '',
    listAdvantages: [
        { id: 1, title: '' },
        { id: 2, title: '' },
        { id: 3, title: '' },
    ],
    listCheckBox: [
        { id: 1, checked: true },
        { id: 2, checked: false },
        { id: 3, checked: false },
    ],
    selectedRadio: null,
};

const valueFormsSlices = createSlice({
    name: 'valueFormsSlices',
    initialState,
    reducers: {
        setPhoneNumber (state, action: PayloadAction<string>) {
            state.phoneNumber = action.payload;
        },

        setEmail (state, action: PayloadAction<string>) {
            state.email = action.payload;
        },

        addItemListAdvantages (state) {
            state.listAdvantages.push({ id: state.listAdvantages.length + 1, title: ""});
        },

        removeItemListAdvantages (state, action) {
            state.listAdvantages = state.listAdvantages.filter(item => item.id !== action.payload.id);
        },

        setAdvantageValueById(state, action: PayloadAction<{ id: number, title: string}>) {
            const index = state.listAdvantages.findIndex(item => item.id === action.payload.id);
            state.listAdvantages[index].title = action.payload.title;
        },

        setChecked (state, action: PayloadAction<{ id: number, checked: boolean}>) {
            const index = state.listCheckBox.findIndex(item => item.id === action.payload.id);
            state.listCheckBox[index].checked = action.payload.checked;
        },

        setSelectedRadio (state, action: PayloadAction<number>) {
            state.selectedRadio = action.payload;
        },

        setNickname (state, action: PayloadAction<string>) {
            state.nickname = action.payload;
        },

        setName (state, action: PayloadAction<string>) {
            state.name = action.payload;
        },

        setSurname (state, action: PayloadAction<string>) {
            state.surname = action.payload;
        },

        setSex (state, action: PayloadAction<string>) {
            state.sex = action.payload;
        },

    }
})

export const { setPhoneNumber, setEmail, addItemListAdvantages, removeItemListAdvantages, setAdvantageValueById, setChecked, setSelectedRadio, setNickname, setName, setSex, setSurname } = valueFormsSlices.actions;
export default valueFormsSlices.reducer