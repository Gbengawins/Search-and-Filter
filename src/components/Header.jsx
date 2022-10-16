import React from 'react';
import '../index.css';

function Header() {
  return (
      <div className='header'>
          {/* <div className="nav"> */}
              <div className="brand">
                  iBukun
              </div>
          {/* </div> */}
          <div className="app_title">
              <h1>Search & Filter it!</h1>
          </div>
          <div className="search">
              <div className="search_icon">
                  
              </div>
              <input type="text" className="search input" placeholder="Search..." />
          </div>
    </div>
  )
}

export default Header