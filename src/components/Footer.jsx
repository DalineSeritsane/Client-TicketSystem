import React from 'react';
import { Mail, Facebook, Github, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import "../CSS/footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
       
        <div className='footer-section'>
          <h3 className="footer-title">HelpDesk Pro</h3>
          <p className="footer-text">
            AI-powered ticketing system backed by real human support. Designed to deliver smarter, faster, and scalable customer service experiences.
          </p>
        </div>

      
        <div className='footer-section'>
          <h4 className="footer-subtitle">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
            <li><Link to="/tickets" className="hover:underline">My Tickets</Link></li>
            <li><Link to="/admin" className="hover:underline">Admin Panel</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
          </ul>
        </div>

      
        <div className='footer-section'>
          <h4 className="footer-subtitle">Contact Us</h4>
          <ul className="footer-contact">
            <li ><Mail size={16} /> support@helpdeskpro.io</li>
            <li >📍 Johannesburg, South Africa</li>
          </ul>
        </div>

      
        <div className='footer-section'>
          <h4 className="footer-subtitle">Follow Us</h4>
          <div className="footer-socials">
            <a href="#" ><Facebook size={20} /></a>
            <a href="#" ><Github size={20} /></a>
            <a href="#" ><Twitter size={20} /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} HelpDesk Pro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;