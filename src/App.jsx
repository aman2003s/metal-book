// Importing required components and libraries
import FinanceOverview from './components/CurrentFinanceDetails/FinanceOverview';
import RecentTransactions from './components/RecentTransactions/RecentTransactions';
import TopExpenses from './components/TopExpenses/TopExpenses';
import Container from './components/Container';
import './App.css';
import ExpensePopOver from './components/ExpensePopOver/ExpensePopOver';
import { useState, createContext } from 'react';
import { FaUtensils, FaPlane } from 'react-icons/fa';
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

// Creating a context for managing expense pop-up state
export const ExpensePopUpContext = createContext();

function App() {
  //States for Popup context
  const [open, setOpen] = useState(false);
  const [categoryType, setCategoryType] = useState(null);
  const [initialData, setInitialData] = useState(null);
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [categories] = useState([
    { key: "food", label: "Food", icon: <FaUtensils /> },
    { key: "entertainment", label: "Entertainment", icon: <BiSolidMoviePlay /> },
    { key: "travel", label: "Travel", icon: <FaPlane /> },
    { key: "shopping", label: "Shopping", icon: <FaShoppingCart /> },
    { key: "other", label: "Other", icon: <RiCheckboxBlankCircleFill /> },
  ]);
  //States for Popup context

  return (
    <>
      <ExpensePopUpContext.Provider value={{ open, setOpen, categoryType, setCategoryType, initialData, setInitialData, categories, search, setSearch, startDate, setStartDate, endDate, setEndDate }}>
        <FinanceOverview />
        <div className='transaction-details-container'>
          <Container headline="Recent Transactions" recentTransactions>
            <RecentTransactions />
          </Container>
          <Container headline="Top Expenses"><TopExpenses /></Container>
        </div>
        {open && <ExpensePopOver />}
      </ExpensePopUpContext.Provider >
    </>
  )
}

export default App
