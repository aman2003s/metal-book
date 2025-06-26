// Importing required libraries
import React, { useContext } from 'react'
import './Expense.css'
import { CiCircleRemove } from "react-icons/ci";
import { FiEdit2 } from "react-icons/fi";
import { ExpensePopUpContext } from '../../App';

const Expense = ({ transaction, onEdit, onRemove }) => {
    const { setOpen, setCategoryType, setInitialData, categories } = useContext(ExpensePopUpContext);
    return (
        <div className='expense-container'>
            <div className='category-icon'>{categories.find(category => category.label === transaction?.category)?.icon}</div>
            <div className='expense-details'>
                <div>
                    <div className='expense-title'>{transaction?.title}</div>
                    <div className='expense-date'>{transaction?.date}</div>
                </div>
                <div className='expense-value'>₹{transaction?.value}</div>
            </div>
            <div className='action-btn-container'>
                <button className='action-btn remove' onClick={() => onRemove(transaction?.id)} aria-label='Remove'><CiCircleRemove /></button>
                <button className='action-btn edit' onClick={() => {
                    setCategoryType("editExpense");
                    setInitialData(transaction);
                    setOpen(true);
                }} aria-label='Edit'><FiEdit2 /></button>
            </div>
        </div>
    )
}

export default Expense