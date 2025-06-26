// Importing required libraries
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import Chart from 'react-google-charts';
import './ExpenseChart.css';

const ExpensesPieChart = () => {
  const [expensesData, setExpensesData] = useState([]);
  const transactions = useSelector(state => state.transactions.transactions);


  //Options for the chart and styling
  const options = {
    backgroundColor: 'transparent',
    chartArea: { width: '100%', height: '80%', alignment: 'center' },
    legend: {
      position: 'bottom',
      textStyle: {
        color: "#fff",
        fontSize: 12,
      },
      alignment: 'center',
    },
    pieSliceBorderColor: 'transparent',
  }

  useEffect(() => {
    const expenses = Object.groupBy(transactions, (transaction) => transaction.category);
    setExpensesData([
      ['Category', 'Amount'],
      ...Object.entries(expenses).map(([category, transactions]) => [category, transactions.reduce((acc, curr) => acc + curr.value, 0)]),
    ])
    console.log(expensesData, "expensesData")
  }, [transactions])

  if (transactions.length === 0) {
    return <div className='chart-container'>No data found</div>
  }
  
  return (
    <div className='chart-container'>
      <Chart chartType="PieChart" data={expensesData} width={"100%"} height={"100%"} options={options} />
    </div >
  )
}

export default ExpensesPieChart 