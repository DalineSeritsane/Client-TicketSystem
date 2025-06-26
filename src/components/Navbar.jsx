import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../CSS/navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Tickets', path: '/tickets' },
    { name: 'Admin', path: '/admin' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="flex justify-between h-16 items-center">
       
          <Link to="/" className="text-2xl font-extrabold text-accent">
            TICKET SYSTEM
          </Link>

         
          <div className="nav-links-desktop">
            {navLinks.map(link => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? 'nav-link active'
                    : 'nav-link'
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

        
          <div className="menu-toggle">
            <button onClick={() => setOpen(!open)}>
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="nav-links-mobile">
          <ul className="space-y-3">
            {navLinks.map(link => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? 'nav-link-mobile active'
                      : 'nav-link-mobile'
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;