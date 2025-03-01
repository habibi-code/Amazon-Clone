import React from 'react'
import './Header.css'
import logoImg from "../../assets/logo.png"
const Header = () => {
  return (
    <section>
        <section>
            <div className='logo'>
                <a href="/">
                <img src={logoImg} alt="amazon img" />
                </a>
                <span>
                    {/* icon */}
                </span>
                <div>
                    <p>Delivered to</p>
                    <span>Ethiopia</span>
                </div>
            </div>
            {/* Search bar */}
            <div>
                <select name="" id="">
                    <option value="">All</option>
                </select>
                {/* icon */}
            </div>
            {/* Right side */}
            <div>
                
            </div>
        </section>
    </section>
  )
}

export default Header
