import { createSlice } from "@reduxjs/toolkit";

const transactionsSlice = createSlice({
    name: "transactions",
    initialState: {
        walletBalance: 0,
        transactions: [{
            id: 1,
            title: "Samosa",
            date: "March 20, 2024",
            category: "Food",
            value: 150,
        }, {
            id: 2,
            title: "Movie",
            date: "March 20, 2024",
            category: "Entertainment",
            value: 100,
        },
        {
            id: 3,
            title: "Food",
            date: "March 20, 2024",
            category: "Food",
            value: 100,
        },
        {
            id: 4,
            title: "Travel",
            date: "March 19, 2024",
            category: "Travel",
            value: 100,
        },
        {
            id: 5,
            title: "Movie",
            date: "March 20, 2024",
            category: "Entertainment",
            value: 100,
        }],
    },
    reducers: {
        addWalletBalance: (state, action) => {
            state.walletBalance += Number(action.payload);
        },
        addTransaction: (state, action) => {
            state.transactions.push(action.payload);
        },
        removeTransaction: (state, action) => {
            state.transactions = state.transactions.filter(transaction => transaction.id !== action.payload);
        },
        editTransaction: (state, action) => {
            const { id, ...updatedTransaction } = action.payload;
            state.transactions = state.transactions.map(transaction => transaction.id === id ? updatedTransaction : transaction);
        },
    }
});

export const { addWalletBalance, addTransaction, removeTransaction, editTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;