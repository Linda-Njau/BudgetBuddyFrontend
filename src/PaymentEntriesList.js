import React, { useState, useEffect } from 'react';
import { fetchPaymentEntries } from './httpService';
import './styles.css';
import piggyImage from './assets/piggy_03.png';

const PaymentEntriesList = ({ userId }) => {
  const [allPaymentEntries, setAllPaymentEntries] = useState([]);
  const [filteredPaymentEntries, setFilteredPaymentEntries] = useState([]);
  const [paymentCategory, setPaymentCategory] = useState('');
  const [month, setMonth] = useState('');

  const filterEntries = () => {
    const filteredEntries = allPaymentEntries.filter((entry) => {
      const matchesCategory =
        entry.payment_category && entry.payment_category.includes(paymentCategory);
      let matchesMonth = false;
      if (entry.transaction_date) {
        const date = new Date(entry.transaction_date);
        const entryMonth = date.getMonth() + 1;
        const formattedEntryMonth = String(entryMonth).padStart(2, '0');
        matchesMonth = formattedEntryMonth === month;
      }
      return (matchesCategory || !paymentCategory) && (matchesMonth || !month);
    })
    setFilteredPaymentEntries(filteredEntries);
  };

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const entries = await fetchPaymentEntries(userId, '', '');
        setAllPaymentEntries(entries);
      } catch (error) {
      }
    };
    fetchEntries();
  }, [userId]);

  useEffect(() => {
    filterEntries();
  }, [paymentCategory, month, allPaymentEntries]);
  
  return (
    <div className="payment-list-page">
       <div className="payment-list-page__image-container">
          <img
            src={piggyImage}
            alt="Budget Buddy Piggy"
            className="payment-list-page__image"
          />
          <p className="payment-list-page__description">
          Easily manage your spending with Budget Buddy! Just go to the section for your payments and use the simple options to organize them.
           You can group transactions by category and choose specific months. 
          It's a straightforward way to understand your money better 
          – filter, check, and stay in control! 💳📆✨
          </p>
        </div>
    <div className="filter-container">
      <div className="filter-group">
        <div className="filter-item">
        <label>
          Payment Category:
          <input
            type="text"
            value={paymentCategory}
            onChange={(e) => {
              console.log('Payment Category Changed:', e.target.value);
              setPaymentCategory(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="filter-item">
        <label>
          Month:          
          <input
            type="text"
            value={month}
            onChange={(e) => {
              console.log('Month Changed:', e.target.value);
              setMonth(e.target.value);
            }}
          />
        </label>
      </div>
        <button className="button_filter" onClick={filterEntries}>
          Filter
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredPaymentEntries.map((entry, index) => (
            <tr key={entry.id}>
              <td>{entry.amount}</td>
              <td>{entry.payment_category}</td>
              <td>{entry.transaction_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default PaymentEntriesList;
