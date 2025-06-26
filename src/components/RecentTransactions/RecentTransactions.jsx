// Importing required libraries
import React, { useContext, useState } from 'react'
import Expense from './Expense'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeTransaction } from '../../store/transactionsSlice';
import { ExpensePopUpContext } from '../../App';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './RecentTransactions.css';

const RecentTransactions = () => {
    const transactions = useSelector(state => state.transactions.transactions);
    const { search, startDate, endDate } = useContext(ExpensePopUpContext);
    const filteredTransactions = transactions
        .toSorted((a, b) => new Date(a.date) - new Date(b.date))
        .filter(transaction => {
            //Matches search in title, category, and value in transactios
            const matchesSearch = transaction.title.toLowerCase().includes(search.toLowerCase()) || transaction.category.toLowerCase().includes(search.toLowerCase()) || transaction.value.toString().includes(search.toLowerCase());
            const transactionDate = new Date(transaction.date);
            const afterStart = !startDate || transactionDate >= new Date(startDate);
            const beforeEnd = !endDate || transactionDate <= new Date(endDate);
            return matchesSearch && afterStart && beforeEnd;
        });
    const dispatch = useDispatch();
    const [page, setPage] = useState(0);
    const pageCount = Math.ceil(filteredTransactions.length / 4);

    //Removes the transaction on button click
    const onRemove = (transactionId) => {
        dispatch(removeTransaction(transactionId));
    }

    // Go to previous page
    const handlePrev = () => {
        setPage((prev) => (prev - 1 + pageCount) % pageCount);
    };
    // Go to next page
    const handleNext = () => {
        setPage((prev) => (prev + 1) % pageCount);
    };

    // Get transactions for current page
    const startIndex = page * 4;
    const paginatedTransactions = filteredTransactions.slice(startIndex, startIndex + 4);
    console.log(paginatedTransactions);

    return (
        <div className='recent-transactions-container'>
            {paginatedTransactions.length > 0 ? (
                <div className='expenses-container'>
                    {paginatedTransactions.map(transaction => (
                        <Expense key={transaction.id} transaction={transaction} onRemove={onRemove} />
                    ))}
                </div>
            ) : (
                <div className='no-transactions-found'>No Recent Transactions</div>
            )}
            {!!paginatedTransactions.length > 0 && <div className='navigation-btn-container'>
                <button className="navigation-btn" onClick={handlePrev} aria-label="Previous page">
                    <FaArrowLeft />
                </button>
                <div className='page-number-container'>
                    {Array.from({ length: pageCount }).map((_, index) => (
                        <button className={`page-number ${page === index ? 'active' : ''}`} key={index} onClick={() => setPage(index)}>{index + 1}</button>
                    ))}
                </div>
                <button className="navigation-btn" onClick={handleNext} aria-label="Next page">
                    <FaArrowRight />
                </button>
            </div>}
        </div>
    )
}

export default RecentTransactions