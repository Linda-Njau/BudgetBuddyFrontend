import React, { useState } from 'react';
import './paymententry.css';
import { postData } from './httpService';
import DatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css';
import piggyImage from './assets/piggy_03.png';
import amountImage from './assets/amount.png';
import categoryImage from './assets/category.png';
import calendarImage from './assets/calendar.png';
import PropTypes from 'prop-types';

const PaymentEntry = ({ userId }) => {
    const [amount, setAmount ] = useState('');
    const [transactionDate, setTransactionDate] = useState(new Date());
    const [payment_category, setPaymentCategory] = useState('FOOD');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submit button clicked');
        const formattedDate = transactionDate.toISOString().split('T')[0];
        console.log('Formatted Date:', formattedDate);
        try {
            const payload = { 
                amount: parseFloat(amount), 
                transactionDate: formattedDate,  
                payment_category: payment_category,
                user_id: userId,
            };
            console.log('Amount:', amount);
            console.log('Payment Category:', payment_category);
            console.log('the complete payload: ', payload)
            const response = await postData('/payment_entries', payload);
            console.log('Server Resonse: ', response);
            setAmount('');
            setTransactionDate(new Date());
        } catch (error) {
            console.error('Payment Entry Failed:', error);
        }
    };
    return (
      <div className="payment-page">
      <div className="payment-page__image-container">
          <p className="payment-page__description">
          Let's jazz up your budget! Ready, set, spend! Punch in those numbers, 
          pick a category, and mark the date. Each entry is a step closer to financial glory. 
          Let the budgeting bonanza begin! 🚀💰
          </p>
          <img
            src={piggyImage}
            alt="Budget Buddy Piggy"
            className="payment-page__image"
          />
        </div>
      <div className="payment-container">
        <div className="instruction-container">
        <div> 
        <img
              className='payment-page__amount-image'
              src={amountImage}
              alt="amount"
            />
        </div>
        <div>
        <img
              className='payment-page__category-image'
              src={categoryImage}
              alt="category"
            />
        </div>
        <div>
        <img
              className='payment-page__calendar-image'
              src={calendarImage}
              alt="calendar"
            />
        </div>
      </div>
      <div className="payment-form-container">
        <form className="payment-form" onSubmit={handleSubmit}>
          <div className="form-group">
          <small>Enter the amount you spent in numbers.</small>
            <label>
              Amount:
              <input type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              />
            </label>
            
          </div>
    
          <div className="form-group">
          <small>Select the appropriate category for this payment.</small>
            <label>
              Payment Category:
              <select value={payment_category} onChange={(e) => setPaymentCategory(e.target.value)}>
                <option value="FOOD">FOOD</option>
                <option value="TRAVEL">TRAVEL</option>
                <option value="UTILITIES">UTILITIES</option>
                <option value="TRANSPORT">TRANSPORT</option>
                <option value="ENTERTAINMENT">ENTERTAINMENT</option>
              </select>
            </label>
          </div>
    
          <div className="form-group">
          <small>Choose the date when the transaction was made.</small>
            <label>
              Transaction Date:
              <div className="date-picker">
              <DatePicker
                selected={transactionDate}
                onChange={(date) => setTransactionDate(date)}
                dateFormat="yyyy-MM-dd"
              />
              </div>
            </label>
          </div>
    
          <button type="submit">Submit</button>
        </form>
      </div>
      </div>
      </div>
    );
    

PaymentEntry.propTypes = {
  userId: PropTypes.number.isRequired,
};
};

export default PaymentEntry
