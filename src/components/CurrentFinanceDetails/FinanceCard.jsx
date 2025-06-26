// Importing required libraries
import React from 'react'
import styled from 'styled-components'
import { useContext } from 'react';
import { ExpensePopUpContext } from '../../App';
import { CardButton } from '../StyledComponents/CardButton';
import { CardWrapper } from '../StyledComponents/CardWrapper';

const CurrencySpan = styled.span((props) => ({
    color: props.$type === "wallet" ? "#89e047" : "#f5bb47",
    fontWeight: "bold",
}));

const FinanceCard = ({ type, dataValue }) => {
    const { setOpen, setCategoryType, setInitialData } = useContext(ExpensePopUpContext);
    return (
        <CardWrapper>
            <div>
                {type === "wallet" ? "Wallet Balance" : "Expenses"}: <CurrencySpan $type={type}>₹{dataValue}</CurrencySpan>
            </div>
            <CardButton $type={type} onClick={() => {
                setOpen(true);
                setCategoryType(type === "wallet" ? "wallet" : "expense");
                setInitialData(null);
            }} >+ Add {type === "wallet" ? "Income" : "Expense"}</CardButton>
        </CardWrapper>
    )
}

export default FinanceCard