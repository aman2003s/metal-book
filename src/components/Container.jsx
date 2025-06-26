// Importing required libraries
import React, { useContext, useState } from 'react'
import Headline from './StyledComponents/Headline';
import Wrapper from './StyledComponents/Wrapper';
import SearchBar from './StyledComponents/SearchBar';
import './Container.css';
import { ExpensePopUpContext } from '../App';
import { FaCalendarAlt } from 'react-icons/fa';
import { Overlay } from './StyledComponents/Overlay';
import { Dialog } from './StyledComponents/Dialog';
import { Button } from './StyledComponents/Button';

const ContainerWithText = ({ children, headline, headlinetype, recentTransactions = false }) => {
    const { setSearch, startDate, setStartDate, endDate, setEndDate } = useContext(ExpensePopUpContext);
    const [datePopupOpen, setDatePopupOpen] = useState(false);
    return (
        <Wrapper>
            <div className='headline-container'>
                <Headline $headlinetype={headlinetype}>{headline}</Headline>
                {!!recentTransactions && (
                    <div className='date-search-container'>
                        <SearchBar onChange={(e) => setSearch(e.target.value)} />
                        <button
                            className='date-button'
                            onClick={() => setDatePopupOpen(true)}
                            aria-label="Select date range"
                        >
                            <FaCalendarAlt />
                        </button>
                        {datePopupOpen && (
                            <Overlay onClick={() => setDatePopupOpen(false)}>
                                <Dialog onClick={e => e.stopPropagation()}>
                                    <div className='date-popup-container'>
                                        <label htmlFor="startDate" >
                                            Start Date:

                                        </label><input
                                            type="date"
                                            id="startDate"
                                            value={startDate}
                                            onChange={e => setStartDate(e.target.value)}
                                        />
                                        <label htmlFor="endDate">
                                            End Date:

                                        </label> <input
                                            type="date"
                                            id="endDate"
                                            value={endDate}
                                            onChange={e => setEndDate(e.target.value)}
                                        />
                                        <Button type="primary" onClick={() => setDatePopupOpen(false)} style={{ marginTop: 16 }}>Done</Button>
                                    </div>
                                </Dialog>
                            </Overlay>
                        )}
                    </div>
                )}
            </div>
            <div className='white-container'>
                {children}
            </div>
        </Wrapper>

    )
}

export default ContainerWithText 