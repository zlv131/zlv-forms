import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IValueFormsSlices} from "../../types/types.ts";

const initialState: IValueFormsSlices = {
    phoneNumber: '',
    email: '',
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
        }
    }
})

export const { setPhoneNumber, setEmail } = valueFormsSlices.actions;
export default valueFormsSlices.reducer