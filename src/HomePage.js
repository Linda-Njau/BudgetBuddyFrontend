import React from 'react';
import piggyImage from './assets/piggy_03.png';
import emailNotificationImage from './assets/email_notification.jpg';
import filterSystemImage from './assets/filter_system.jpg';
import financialRecordsImage from './assets/financial_records.jpg';


function HomePage() {
  return (
    <div className="home-page">
      <div className="home-page__main-content">
        <div className="home-page__image-container">
          <img
            src={piggyImage}
            alt="Budget Buddy Piggy"
            className="home-page__image"
          />
          <p className="home-page__description">
            Hey there, buddy! Meet your trusty sidekick, Budget Buddy – your ticket to hassle-free money mastery! 
            We've got some seriously cool features up our sleeve. 
            With Budget Buddy by your side, you'll unlock a world of financial possibilities.
            From keeping tabs on every dollar to uncovering hidden savings gems, we've got your back. 
            Your financial journey just got a whole lot smoother, and a whole lot more fun! 🚀💰
          </p>
        </div>
        <div className="home-page__image-attribution">
          Image by <a href="https://www.freepik.com/free-photo/pink-piggy-bank-beach-travel-vacation-savings-sunglasses_6269056.htm#query=pig%20saving%20purple&position=3&from_view=search&track=ais">kstudio</a> on Freepik
        </div>
        <div className='home-page__features-container'>
          <div className='home-page__feature home-page__feature--left'>
            <img
              className='home-page__feature-image home-page__feature-image--left'
              src={emailNotificationImage}
              alt="Email Notification"
            />
            <h1 className='home-page__feature-title'>Email Notification</h1>
            <p className='home-page__feature-description'>
              Proactively notifies you whenever you exceed your budget in any spending category,
              helping you stay on top of your finances and avoid overspending
            </p>
          </div>
          <div className='home-page__feature'>
            <img
              className='home-page__feature-image'
              src={filterSystemImage}
              alt="Filter System"
            />
            <h1 className='home-page__feature-title'>Filter System</h1>
            <p className='home-page__feature-description'>
              Effortlessly categorize expenses by month and category to gain insights into your spending habits
            </p>
          </div>
          <div className='home-page__feature'>
            <img
              className='home-page__feature-image'
              src={financialRecordsImage}
              alt="Financial Records"
            />
            <h1 className='home-page__feature-title'>Financial Records</h1>
            <p className='home-page__feature-description'>
              Access a detailed summary of your expenses across various categories and months, 
              providing a comprehensive overview of your financial history.
            </p>
          </div>
        </div>
      </div>
      <section className='home-page__contact-section'>
        <h1 className="home-page__contact-title">Contact Us!</h1>
        <div className="home-page__contact-form">
          <form className="home-page__form">
            <label className="home-page__form-label">
              Your Email:
              <input 
                className="home-page__form-input"
                type="email"
                required
              />
            </label>
            <label className="home-page__form-label">
              Your Phone Number:
              <input 
                className="home-page__form-input"
                type="phone number"
                required
              />
            </label>
            <label className="home-page__form-label">
              Tell us something:
              <input 
                className="home-page__form-input--bottom"
                type="text"
                required
              />
            </label>
            <button className="home-page__form-button" type="submit">Send</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
