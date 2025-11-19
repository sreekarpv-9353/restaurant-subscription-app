import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const [lead, setLead] = useState({
    name: "",
    phone: "",
    email: "",
    businessType: "",
    city: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // ✅ REAL Google Form POST URL
  const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLScIJLAhGskHYKj_oj1XdX5iOLuO-1cEjCIJSFFI6nKZ9cpCyw/formResponse";

  // ✅ REAL entry IDs from your prefilled link
  const entry = {
    name: "entry.2045778455",
    email: "entry.1435936113",
    phone: "entry.562483923",
    businessType: "entry.1607527770",
    city: "entry.2069963784",
    selectedPlan: "entry.1072802824"
  };

  // Open popup with selected plan
  const openPopup = (plan) => {
    setSelectedPlan(plan);
    setShowPopup(true);
    setSubmitted(false);
  };

  // Close popup
  const closePopup = () => {
    setShowPopup(false);
    setSelectedPlan("");
    setLead({
      name: "",
      phone: "",
      email: "",
      businessType: "",
      city: ""
    });
    setSubmitted(false);
    setSubmitting(false);
  };

  // Handle field updates
  const updateLead = (field, value) => {
    setLead({ ...lead, [field]: value });
  };

  // Submit Google Form
 const submitLead = async (e) => {
  e.preventDefault();

  setSubmitting(true);

  const formData = new FormData();
  formData.append("entry.2045778455", lead.name);
  formData.append("entry.1435936113", lead.email);
  formData.append("entry.562483923", lead.phone);
  formData.append("entry.1607527770", lead.businessType);
  formData.append("entry.2069963784", lead.city);
  formData.append("entry.1072802824", selectedPlan);
console.log([...formData.entries()]);

  try {
    await fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLScIJLAhGskHYKj_oj1XdX5iOLuO-1cEjCIJSFFI6nKZ9cpCyw/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        body: formData,
      }
    );

    setSubmitted(true);
    setSubmitting(false);

    setTimeout(() => {
      closePopup();
    }, 2000);

  } catch (error) {
    console.error("FORM ERROR:", error);
    alert("Submission failed. Try again.");
    setSubmitting(false);
  }
};


  return (
    <div>

      {/* ---------------- NAVBAR ---------------- */}
      <nav className="navbar">
        <div className="container nav-inner">
          <div className="brand">
            <div className="logo-mark">FG</div>
            <div>
              <div className="brand-name">FlashGo</div>
              <div className="brand-tag">Food & Grocery Delivery SaaS</div>
            </div>
          </div>

          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <button
              className="btn-outline small"
              onClick={() => openPopup("Demo Request")}
            >
              Book Demo
            </button>
          </div>
        </div>
      </nav>

      {/* ---------------- HERO SECTION ---------------- */}
      <header className="hero">
        <div className="container hero-grid">

          <div className="hero-left">
            <h1>
              Launch your <span className="accent">Food & Grocery Delivery App</span>{" "}
              with FlashGo — Go live in 24 hours
            </h1>

            <p className="hero-sub">
              White-label Customer App, Vendor App, Delivery Boy App & full Admin Panel.
              No payment gateway needed — <b>Cash on Delivery (COD)</b> supported.
            </p>

            <div className="hero-buttons">
              <a href="#pricing" className="btn-primary">See Pricing</a>
              <button className="btn-outline" onClick={() => openPopup("General Enquiry")}>
                Contact Support
              </button>
            </div>

            <ul className="hero-points">
              <li>⚡ Go live in 24 hours</li>
              <li>🏪 Grocery + Restaurant support</li>
              <li>🚚 Delivery management & tracking</li>
            </ul>
          </div>

          <div className="hero-right">
            <div className="mockphones">
              <div className="phone p1"></div>
              <div className="phone p2"></div>
              <div className="phone p3"></div>
            </div>
            <div className="mock-caption">Customer • Vendor • Rider • Admin</div>
          </div>

        </div>
      </header>

      {/* ---------------- FEATURES SECTION ---------------- */}
      <section id="features" className="section features">
        <div className="container">

          <h2 className="section-title">Designed for Food & Grocery Businesses</h2>
          <p className="section-sub">
            Everything you need to manage orders, stores, delivery & business growth.
          </p>

          <div className="features-grid">

            <div className="feature">
              <div className="icon">🛒</div>
              <h3>Grocery Inventory</h3>
              <p>Track stock, units, expiry, pricing, variants and more.</p>
            </div>

            <div className="feature">
              <div className="icon">🍔</div>
              <h3>Restaurant Menu</h3>
              <p>Manage addons, combos, timings and availability.</p>
            </div>

            <div className="feature">
              <div className="icon">🚚</div>
              <h3>Delivery Management</h3>
              <p>Rider tracking, COD settlement & auto-assign deliveries.</p>
            </div>

            <div className="feature">
              <div className="icon">📦</div>
              <h3>Unlimited Stores</h3>
              <p>Onboard any number of restaurants & grocery stores.</p>
            </div>

            <div className="feature">
              <div className="icon">📊</div>
              <h3>Analytics Dashboard</h3>
              <p>Track orders, revenue, customers, riders & more.</p>
            </div>

            <div className="feature">
              <div className="icon">⚙️</div>
              <h3>White Label Apps</h3>
              <p>Fully branded apps with your logo and colors.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------- PRICING SECTION ---------------- */}
      <section id="pricing" className="section pricing">
        <div className="container">

          <h2 className="section-title">Subscription Plans</h2>
          <p className="section-sub">All features included. No hidden fees.</p>

          <div className="pricing-grid">

            <div className="pricing-card">
              <h3>Monthly</h3>
              <div className="price">₹13,000</div>
              <ul className="list">
                <li>Customer, Vendor & Rider app</li>
                <li>Admin dashboard</li>
                <li>Store & menu management</li>
                <li>COD supported</li>
              </ul>
              <button className="btn-secondary" onClick={() => openPopup("Monthly Plan")}>
                Select Monthly
              </button>
            </div>

            <div className="pricing-card featured">
              <div className="badge">Popular</div>
              <h3>6 Months</h3>
              <div className="price">₹55,000</div>
              <ul className="list">
                <li>Priority support</li>
                <li>Unlimited stores</li>
                <li>Zone-based fees</li>
              </ul>
              <button className="btn-primary" onClick={() => openPopup("6 Months Plan")}>
                Choose 6 Months
              </button>
            </div>

            <div className="pricing-card">
              <h3>12 Months</h3>
              <div className="price">₹72,000</div>
              <ul className="list">
                <li>Best savings</li>
                <li>Customization options</li>
                <li>Dedicated support</li>
              </ul>
              <button className="btn-secondary" onClick={() => openPopup("12 Months Plan")}>
                Choose 12 Months
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ---------------- FAQ SECTION ---------------- */}
      <section id="faq" className="section faq">
        <div className="container">
          <h2 className="section-title">FAQ</h2>

          <div className="faq-grid">
            <details>
              <summary>Do you support COD?</summary>
              <p>Yes — FlashGo is 100% Cash on Delivery compatible.</p>
            </details>
            <details>
              <summary>How soon can I launch?</summary>
              <p>Your apps are ready within 24 hours.</p>
            </details>
            <details>
              <summary>Are the apps white-label?</summary>
              <p>Yes — we brand the apps with your logo & theme.</p>
            </details>
            <details>
              <summary>Is this for both Food & Grocery?</summary>
              <p>Yes — dual category support is built in.</p>
            </details>
          </div>

        </div>
      </section>

      {/* ---------------- POPUP (Lead Form) ---------------- */}
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closePopup}>✕</button>

            {!submitted ? (
              <>
                <h3>Talk to FlashGo Team</h3>
                <p className="popup-sub">We will reach out shortly.</p>

                <div className="selected-info">
                  <b>Selected Plan:</b> {selectedPlan}
                </div>

                <form onSubmit={submitLead} className="lead-form">

                  <label>
                    Full Name *
                    <input
                      required
                      value={lead.name}
                      onChange={(e) => updateLead("name", e.target.value)}
                    />
                  </label>

                  <label>
                    Phone Number *
                    <input
                      required
                      value={lead.phone}
                      onChange={(e) => updateLead("phone", e.target.value)}
                    />
                  </label>

                  <label>
                    Email *
                    <input
                      required
                      type="email"
                      value={lead.email}
                      onChange={(e) => updateLead("email", e.target.value)}
                    />
                  </label>

                  <label>
                    Business Type
                    <select
                      value={lead.businessType}
                      onChange={(e) => updateLead("businessType", e.target.value)}
                    >
                      <option value="">Select One</option>
                      <option value="Food">Food</option>
                      <option value="Grocery">Grocery</option>
                      <option value="Both">Both</option>
                    </select>
                  </label>

                  <label>
                    City
                    <input
                      value={lead.city}
                      onChange={(e) => updateLead("city", e.target.value)}
                    />
                  </label>

                  <button className="btn-primary" disabled={submitting}>
                    {submitting ? "Submitting..." : "Submit"}
                  </button>

                </form>
              </>
            ) : (
              <div className="submitted-box">
                <h3>Submitted Successfully 🎉</h3>
                <p>We will contact you shortly!</p>
              </div>
            )}

          </div>
        </div>
      )}

      {/* ---------------- FOOTER ---------------- */}
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} FlashGo. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
