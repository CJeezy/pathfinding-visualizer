import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <nav className='header-bar'>
            <div className='main-text'>
                Pathfinding Vizualizer
            </div>

            <div className='about-text'>
                This application visuzlies multiple pathfinding algorithms.
            </div>
            
        </nav>
      </div>
    );
  }
}

export default Header;
