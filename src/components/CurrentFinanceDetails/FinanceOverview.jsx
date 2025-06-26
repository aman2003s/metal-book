// Importing required libraries
import React from 'react'
import FinanceCard from './FinanceCard'
import ExpensesChart from './ExpensesChart'
import Headline from '../StyledComponents/Headline'
import Wrapper from '../StyledComponents/Wrapper';
import './FinanceOverview.css'
import { useSelector } from 'react-redux';

const CurrentFinanceDetails = () => {
    const { walletBalance, transactions } = useSelector(state => state.transactions);
    const expenses = transactions.reduce((acc, transaction) => acc + Number(transaction.value), 0);

    return (
        <div className='finance-overview-container'>
            <Headline $headlinetype="h1">Expense Tracker</Headline>
            <div className='finance-card-container'>
                <FinanceCard type="wallet" dataValue={walletBalance} />
                <FinanceCard type="expenses" dataValue={expenses} />
                <ExpensesChart />
            </div>
        </div>
    )
}

export default CurrentFinanceDetails 