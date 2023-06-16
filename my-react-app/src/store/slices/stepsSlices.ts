import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IStepsSlices} from "../../types/types.ts";

const initialState: IStepsSlices = {
    steps: ["1", "2", "3"],
    currentStep: 1,
};

const stepsSlices = createSlice({
    name: 'stepsSlices',
    initialState,
    reducers: {
        setCurrentStep (state, action: PayloadAction<number>) {
            state.currentStep = action.payload;
        },
    }
})

export const { setCurrentStep } = stepsSlices.actions;
export default stepsSlices.reducer