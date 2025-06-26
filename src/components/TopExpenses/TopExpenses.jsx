// Importing required libraries
import React, { useState, useEffect, useMemo } from 'react'
import Chart from 'react-google-charts';
import { useSelector } from 'react-redux';
import './TopExpenses.css';
import { FaPlane } from 'react-icons/fa';

const TopExpenses = () => {
    //getting top 3 expenses by price
    const topExpenses = useSelector(state => state.transactions.transactions).toSorted((a, b) => b.value - a.value).slice(0, 3);

    // Options for the chart and styling
    const options = {
        title: '',
        legend: { position: 'none' },
        chartArea: { left: 120, width: '85%', height: '80%' },
        bar: {
            groupWidth: '40%'
        },
        hAxis: {
            textStyle: {
                color: '#000',
                fontSize: 12,
            },
        },
        vAxis: {
            textStyle: {
                color: '#000',
                fontSize: 14,
            },
            minTextSpacing: 2,
            slantedText: false,
        },
    };

    const expensesData = useMemo(() => ([
        ['Category', 'Expenses'],
        ...topExpenses.map(expense => [expense.category, expense.value]),
    ]), [topExpenses]);

    if (topExpenses.length === 0) {
        return <div className='chart-container'>No data found</div>
    }
    
    return (
        <div className='top-expenses-container'>
            <Chart chartType="BarChart" data={expensesData} width={"100%"} height={"100%"} options={options} />
        </div>
    )
}

export default TopExpenses;