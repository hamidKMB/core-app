import React from "react";

import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";

/* ------------------------------ making store ------------------------------ */

const personDetails = {
    name : "your name",
    age: 18,
}


export const mainSlice = createSlice({
    name: "personStore",
    initialState: personDetails,
    reducers: {
        changeName(state, action) {
            console.log(action);
            state.name = action.payload;
        },

        changeAge(state, action) {
            console.log(action);
            state.age = action.payload
        },
    }
})

const store = configureStore({
    reducer: {
        personStore: mainSlice.reducer
    }
})

/* ----------------------------- Time to expose ----------------------------- */

const { changeName , changeAge } = mainSlice.actions;

export function usePersonStore() {
    const dispatch = useDispatch();
    return {
        name: useSelector(state => state.personStore.name),
        age: useSelector(state => state.personStore.age),
        changeName: (name) => dispatch( changeName(name) ),
        changeAge: (age) => dispatch ( changeAge(age) ),
    }
}

export function PersonStoreProvider({children}) {
    return <Provider store={store}>{children}</Provider>
}