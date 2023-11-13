import React from 'react';
import { Link } from 'react-router-dom';
import piggyImage from './assets/piggy_03.png';
import emailNotificationImage from './assets/email_notification.jpg';
import filterSytemImage from './assets/filter_system.jpg';
import financialrecordsImage from './assets/financial_records.jpg';


function HomePage() {
  return (
    <div className="home-page">
      <div className="main-content">
        <div className="image-container">
        <img
  src={piggyImage}
  alt="Budget Buddy Piggy"
  className='image-container__piggy'/>
  <p className='image-container__paragraph'> 
   
  Hey there, buddy! Meet your trusty sidekick, Budget Buddy – your ticket to hassle-free money mastery! 
We've got some seriously cool features up our sleeve. 
With Budget Buddy by your side, you'll unlock a world of financial possibilities.
 From keeping tabs on every dollar to uncovering hidden savings gems, we've got your back. 
Your financial journey just got a whole lot smoother, and a whole lot more fun! 🚀💰
    </p>
</div>
<div className="image-container-attribution">
  Image by <a href="https://www.freepik.com/free-photo/pink-piggy-bank-beach-travel-vacation-savings-sunglasses_6269056.htm#query=pig%20saving%20purple&position=3&from_view=search&track=ais">kstudio</a> on Freepik
</div>
      <div className='container-features'>
          <div className='features-wrapper features-wrapper--left'>
            <img
            className='features-photo features-photo--left'
            src={emailNotificationImage}
            alt="Email Notification"
            />
            <h1 className='features-title'>Email Notification</h1>
            <p className='features-description'> proactively notifies you whenever you exceed your budget in any spending category,
              helping you stay on top of your finances and avoid overspending</p>
          </div>
          <div className='features-wrapper'>
          <img
          className='features-photo'
            src={filterSytemImage}
            alt="filter system"
            />
            <h1 className='features-title'>Filter system</h1>
            <p className='features-description'> Effortlessly categorize expenses by month and category to 
              gain insights into your spending habits</p>
          </div>
          <div className='features-wrapper'>
          <img
          className='features-photo'
            src={financialrecordsImage}
            alt="financial records"
            />
            <h1 className='features-title'>Financial records</h1>
            <p className='features-description'>Access a detailed summary of your expenses across various categories and months, 
              providing a comprehensive overview of your financial history.</p>
          </div>
      </div>
      </div>
      <section className='contact-page'>
        <h1 className="contact-title">Contact Us!</h1>
      <div className="contact-form">
  <form className="contact-box">
    <label className="contact-label">
      Your Email:
      <input 
        className="contact-input"
        type="email"
        required
      />
    </label>
    <label className="contact-label">
      Your phone Number:
      <input 
        className="contact-input"
        type=" phone number"
        required
      />
    </label>
    <label className="contact-label">
      Tell us something:
      <input 
        className="contact-input--bottom"
        type="text"
        required
      />
    </label>
    <button className="contact-button" type="submit">send</button>
  </form>
</div>
      </section>
    </div>
  );
}

export default HomePage;

