import React from 'react';
import ThemeToggler from './ThemeToggler';

const Navbar = () => {
  return (
    <div>
      <h2 style={{ display: 'inline-block', marginRight: '1rem' }}>My App</h2>
      <ThemeToggler />
    </div>
  );
};

export default Navbar;
