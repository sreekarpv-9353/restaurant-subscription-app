import React, { useState } from 'react';
import './App.css';

function App() {
  const [showSupportMessage, setShowSupportMessage] = useState(false);

  const handleAnnualPlanClick = () => {
    // In a real app, you would add Firebase integration here
    setShowSupportMessage(true);
  };

  return (
    <div className="App">
      <header>
        <div className="container">
          <h1>Restaurant Management System</h1>
          <p>Choose the perfect subscription plan for your business</p>
        </div>
      </header>
      
      <section className="pricing-section">
        <div className="container">
          <div className="section-title">
            <h2>Subscription Plans</h2>
            <p>Select the plan that best fits your restaurant's needs</p>
          </div>
          
          <div className="pricing-container">
            {/* Monthly Plan */}
            <div className="pricing-card">
              <h3 className="plan-name">Monthly Plan</h3>
              <div className="plan-price">
                <div className="price-amount">₹10,000</div>
                <div className="price-period">per month</div>
              </div>
              <ul className="plan-features">
                <li>Full access to admin panel</li>
                <li>Customer mobile app</li>
                <li>Customer management</li>
                <li>Menu management</li>
                <li>Basic analytics</li>
                
              </ul>
              {/* <button className="btn btn-secondary">Select Monthly Plan</button> */}
                <button 
                className="btn btn-secondary"
                onClick={handleAnnualPlanClick}
              >
                Select Monthly Plan
              </button>
            </div>
            
            {/* Annual Plan with Offer */}
            <div className="pricing-card featured">
              <div className="featured-badge">Best Value</div>
              <h3 className="plan-name">Annual Plan</h3>
              <div className="discount-note">
                Special Offer! Save 40% with annual billing
              </div>
              <div className="plan-price">
                <span className="original-price">₹10,000/month</span>
                <div className="discount-price">₹6,000</div>
                <div className="price-period">per month (billed annually)</div>
                <div className="savings-text">
                  Total: ₹72,000 per year (Save ₹48,000)
                </div>
              </div>
              <ul className="plan-features">
                <li>Everything in Monthly Plan</li>
                <li>Priority customer support</li>
                <li>Custom integrations</li>
                <li>Free setup assistance</li>
                <li>Zone wise delivery fee integration</li>
                <li>Minimum Delivery Value setup</li>
              </ul>
              <button 
                className="btn btn-primary"
                onClick={handleAnnualPlanClick}
              >
                Get Annual Plan
              </button>
            </div>
          </div>

          {/* Support Message */}
          {showSupportMessage && (
            <div className="support-message">
              <div className="message-content">
                <h3>Thank You for Your Interest!</h3>
                <p>Please reach out to our customer support team to complete your annual / Monthly subscription.</p>
                <div className="support-contact">
                  <strong>Customer Support:</strong>
                  <div className="phone-number">flashfood813@gmail.com</div>
                </div>
                <button 
                  className="btn btn-secondary"
                  onClick={() => setShowSupportMessage(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
      
      <footer>
        <div className="container">
          <p>&copy; 2023 Restaurant Management System. All rights reserved.</p>
          <p>Contact us: flashfood813@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}

export default App;