import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import developmentsReducer from "./slices/developmentsSlice.ts"

export const store = configureStore({
    reducer: {
        developments: developmentsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;