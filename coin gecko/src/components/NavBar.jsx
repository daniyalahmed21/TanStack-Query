import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">CryptoCentral</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a>Home</a></li>
          <li><a>Markets</a></li>
          <li><a>About</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;