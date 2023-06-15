import { configureStore } from '@reduxjs/toolkit'
import valueFormsSlices from "./slices/valueFormsSlices.ts";
import stepsSlices from "./slices/stepsSlices.ts";

const store = configureStore({
    reducer: {
        valueFormsSlices,
        stepsSlices
    },
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;