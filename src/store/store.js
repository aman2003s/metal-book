// Importing configureStore from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit"
import transactionsReducer from "./transactionsSlice"

// Creating the Redux store and adding the transactions reducer
const store = configureStore({
    reducer: {
        transactions: transactionsReducer,
    },
});

export default store;