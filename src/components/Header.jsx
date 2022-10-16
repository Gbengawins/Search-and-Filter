import React from 'react';
import '../index.css';
import { AiOutlineSearch } from 'react-icons/ai';
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
                  <AiOutlineSearch className='icon'/>
              </div>
              <input type="text" className="search_input" placeholder="Search..." />
          </div>
                  
      
                  
              
    </div>
  )
}

export default Header