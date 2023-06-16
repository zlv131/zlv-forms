import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IValueFormsSlices} from "../../types/types.ts";

const initialState: IValueFormsSlices = {
    phoneNumber: '',
    email: '',
    listAdvantages: [
        { id: 1, title: '' },
        { id: 2, title: '' },
        { id: 3, title: '' },
    ],
    listCheckBox: [
        { id: 1, checked: false },
        { id: 2, checked: false },
        { id: 3, checked: false },
    ]
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
        }
    }
})

export const { setPhoneNumber, setEmail, addItemListAdvantages, removeItemListAdvantages, setAdvantageValueById, setChecked } = valueFormsSlices.actions;
export default valueFormsSlices.reducer