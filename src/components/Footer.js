import React from 'react';
import { Mail, Facebook, Github, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[black] text-[#555] pt-12 pb-6 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold text-accent mb-3">HelpDesk Pro</h3>
          <p className="text-sm text-blue-100 leading-relaxed">
            AI-powered ticketing system backed by real human support. Designed to deliver smarter, faster, and scalable customer service experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2 text-sm text-blue-100">
            <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
            <li><Link to="/tickets" className="hover:underline">My Tickets</Link></li>
            <li><Link to="/admin" className="hover:underline">Admin Panel</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-semibold mb-2">Contact Us</h4>
          <ul className="text-sm text-blue-100 space-y-1">
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> support@helpdeskpro.io</li>
            <li className="flex items-center gap-2">📍 Johannesburg, South Africa</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-xl font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-accent"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-accent"><Github className="w-5 h-5" /></a>
            <a href="#" className="hover:text-accent"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-blue-200 border-t border-blue-300 pt-4">
        &copy; {new Date().getFullYear()} HelpDesk Pro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;