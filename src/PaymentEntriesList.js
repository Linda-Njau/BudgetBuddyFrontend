import React, { useState, useEffect, useCallback } from 'react';
import { fetchPaymentEntries } from './httpService';
import './styles.css';
import './paymententrylist.css'
import piggyImage from './assets/piggy_03.png';

const PaymentEntriesList = ({ userId }) => {
  const [allPaymentEntries, setAllPaymentEntries] = useState([]);
  const [filteredPaymentEntries, setFilteredPaymentEntries] = useState([]);
  const [paymentCategory, setPaymentCategory] = useState('');
  const [month, setMonth] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const filterEntries = useCallback(() => {
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
    });
    setFilteredPaymentEntries(filteredEntries);
  }, [allPaymentEntries, paymentCategory, month]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const entries = await fetchPaymentEntries(userId, '', '');
        setAllPaymentEntries(entries);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    fetchEntries();
  }, [userId]);

  useEffect(() => {
    filterEntries();
  }, [paymentCategory, month, allPaymentEntries, filterEntries]);

  return (
      <div className={filteredPaymentEntries.length === 0 ? "payment-list-page_no_entries" : "payment-list-page"}>
        {filteredPaymentEntries.length === 0 ? (
        <div>
          <div className="payment-list-page__image-container">
            <img
              src={piggyImage}
              alt="Budget Buddy Piggy"
              className="payment-list-page__image"
            />
            <p className="payment-list-page__description">
              No payment entries found Buddy! 💰
            </p>
          </div>
          {isLoading ? null : ( 
            <div className="payment-list-page__content">
              <div className="filter-container">
                <div className="filter-group">
                  <div className="filter-item">
                    <label>
                      Payment Category:
                      <input
                        type="text"
                        value={paymentCategory}
                        onChange={(e) => {
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
          )}
        </div>
      ) : (
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
      )}
    </div>
  );  
};

export default PaymentEntriesList;
