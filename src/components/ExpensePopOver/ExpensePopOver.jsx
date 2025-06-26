// Importing required libraries
import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { ExpensePopUpContext } from '../../App';
import { useDispatch, useSelector } from 'react-redux';
import { addWalletBalance, addTransaction, editTransaction } from '../../store/transactionsSlice';
import { Overlay } from '../StyledComponents/Overlay';
import { Dialog } from '../StyledComponents/Dialog';
import { Title } from '../StyledComponents/Title';
import { Input } from '../StyledComponents/Input';
import { Select } from '../StyledComponents/Select';
import { ButtonRow } from '../StyledComponents/ButtonRow';
import { Button } from '../StyledComponents/Button';

const Row = styled.div({
  display: 'flex',
  gap: '12px',
});

function toInputDate(str) {
  const date = new Date(str);
  if (isNaN(date)) return "";
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getTodayDate() {
  const today = new Date(Date.now());
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return month[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear();
}

const ExpensePopOver = () => {
  const { setOpen, categoryType, initialData, categories } = useContext(ExpensePopUpContext);
  const transactionCount = useSelector(state => state.transactions.transactions.length);
  const dispatch = useDispatch();

  //initial State
  const [form, setForm] = useState({
    id: Number(transactionCount) + 1,
    title: '',
    place: '',
    category: categories[0]?.label || '',
    value: '',
    date: getTodayDate(),
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialData) {
      setForm({
        id: initialData.id ?? Number(transactionCount) + 1,
        title: initialData.title ?? '',
        place: initialData.place ?? '',
        category: initialData.category ?? categories[0]?.label ?? '',
        value: initialData.value ?? 0,
        date: initialData.date ?? '',
      });
    }
  }, [initialData, categories]);


  //handle form input change
  const handleChange = e => {
    let { name, value } = e.target;
    if (name === 'value') {
      value = Number(value);
    }
    setForm(f => ({ ...f, [name]: value }));
  };

  // handle validation and saving data
  const handleSave = () => {
    if ((categoryType === 'expense' || categoryType === 'edit') && (form.title.trim().length <= 2 || !form.title.trim())) {
      setError('Name must be more than 2 characters.');
      return;
    }
    if (Number(form.value) <= 0 || form.value === '' || isNaN(Number(form.value))) {
      setError('Amount must be greater than 0.');
      return;
    }
    setError('');
    categoryType === 'wallet' ? dispatch(addWalletBalance(form.value)) : categoryType === 'expense' ? dispatch(addTransaction(form)) : dispatch(editTransaction(form));
    setOpen(false);
  };


  //Close the popover
  const handleCancel = () => {
    setOpen(false);
  };


  //Opens popover to add money in wallet
  if (categoryType === 'wallet') {
    return (
      <Overlay>
        <Dialog>
          <Title>Add Balance</Title>
          <Row>
            <Input
              name="value"
              placeholder="Income Amount"
              type="number"
              value={form.value}
              onChange={handleChange}
            />
            <ButtonRow>
              <Button type="primary" onClick={handleSave}>Add Balance</Button>
              <Button type="secondary" onClick={handleCancel}>Cancel</Button>
            </ButtonRow>
          </Row>
          {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
        </Dialog>
      </Overlay>
    );
  }

  //Opens popover to add and edit expense
  return (
    <Overlay>
      <Dialog>
        <Title>{initialData && initialData.id ? 'Edit Expense' : 'Add Expense'}</Title>
        <Row>
          <Input name="title" placeholder="Title" value={form.title ?? ''} onChange={handleChange} />
          <Input name="value" placeholder="Price" type="number" value={form.value} onChange={handleChange} />
        </Row>
        <Row>
          <Select name="category" value={form.category ?? ''} onChange={handleChange}>
            {categories.map(cat => (
              <option key={cat.key} value={cat.label}>{cat.label}</option>
            ))}
          </Select>
          <Input name="date" placeholder="dd/mm/yyyy" type="date" value={toInputDate(form.date ?? '')} onChange={handleChange} />
        </Row>
        {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
        <ButtonRow>
          <Button type="primary" onClick={handleSave}>{initialData && initialData.id ? 'Save' : 'Add Expense'}</Button>
          <Button type="secondary" onClick={handleCancel}>Cancel</Button>
        </ButtonRow>
      </Dialog>
    </Overlay>
  );
};

export default ExpensePopOver; 