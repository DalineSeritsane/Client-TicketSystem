import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Info, Sparkles } from 'lucide-react';

const Home = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 text-primary py-20 px-6 md:px-20 min-h-screen flex items-center relative overflow-hidden">
        <Link to='/log-in'>
        <ArrowRight />
        </Link>
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-accent opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-52 h-52 bg-secondary opacity-20 rounded-full blur-3xl animate-ping"></div>

        <div className="max-w-5xl mx-auto text-center space-y-8 z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Revolutionize Customer Support<br />
            with <span className="text-accent drop-shadow-md">HelpDesk Pro</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            AI-powered ticketing system using Gemini, helping your users faster and smarter. Seamlessly escalate to human support when needed.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link to='/dashboard'>
              <button className="bg-primary hover:bg-blue-800 text-[#333] px-6 py-3 rounded-xl text-lg shadow-lg transition duration-300 flex items-center gap-2 hover:text-[#fff] cursor-pointer">
                <Sparkles className="w-5 h-5" /> Get Started
              </button>
            </Link>

            <button className="border-2 border-white bg-secondary hover:bg-[#fff] text-[#333] px-6 py-3 rounded-xl text-lg transition duration-300 flex items-center gap-2 cursor-pointer">
              <Info className="w-5 h-5 text-[#333]" /> Learn More
            </button>
          </div>

          {/* Features Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left cursor-pointer">
            <div className="bg-white p-6 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold mb-2 text-primary">⚡ AI Assistant</h3>
              <p className="text-sm text-gray-600">Get immediate responses from Gemini AI on submitted tickets.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold mb-2 text-primary">📊 Admin Dashboard</h3>
              <p className="text-sm text-gray-600">Monitor ticket flow, update statuses, and manage support insights.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold mb-2 text-primary">🔒 Secure Auth</h3>
              <p className="text-sm text-gray-600">Built with JWT and bcrypt for secure login and role-based access.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;