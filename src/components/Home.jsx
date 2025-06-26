import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Info, Sparkles } from 'lucide-react';
import '../CSS/home.css'

const Home = () => {
  return (
    <>
      <section className="home-section">
        <Link to='/log-in' className='arrow-link'>
        <ArrowRight />
        </Link>
       
        <div className="shape shape-top"></div>
        <div className="shape shape-bottom"></div>

        <div className="home-content">
          <h1 className="home-title">
            Revolutionize Customer Support<br />
            with <span className="highlight">HelpDesk Pro</span>
          </h1>
          <p className="home-subtext">
            AI-powered ticketing system using Gemini, helping your users faster and smarter. Seamlessly escalate to human support when needed.
          </p>

          <div className="home-buttons">
            <Link to='/dashboard'>
              <button className="btn-primary">
                <Sparkles className="icon" /> Get Started
              </button>
            </Link>

            <button className="btn-secondary">
              <Info className="icon" /> Learn More
            </button>
          </div>

          
          <div className="home-features">
            <div className="feature-card">
              <h3 >⚡ AI Assistant</h3>
              <p >Get immediate responses from Gemini AI on submitted tickets.</p>
            </div>
            <div className="feature-card">
              <h3 >📊 Admin Dashboard</h3>
              <p >Monitor ticket flow, update statuses, and manage support insights.</p>
            </div>
            <div className="feature-card">
              <h3 >🔒 Secure Auth</h3>
              <p >Built with JWT and bcrypt for secure login and role-based access.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;