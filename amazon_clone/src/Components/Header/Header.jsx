import React from 'react'
import './Header.css'
import { CiLocationOn } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import logoImg from "../../assets/logo.png"
import { IoCartOutline } from "react-icons/io5";
const Header = () => {
  return (
    <section>
        <section>
            <div className='logo'>
                <a href="/">
                <img src={logoImg} alt="amazon img" />
                </a>
                <span>
                   <CiLocationOn />
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
                <input type="text" placeholder='Search Amazon'/>
                <FaSearch />
            </div>
            {/* Right side */}
            <div>
            <div>
                <img src="https://cdn.britannica.com/33/4833-050-F6E415FE/Flag-United-States-of-America.jpg" alt="flag" />
                <select name="" id="">
                    <option value="">EN</option>
                </select>
            </div>
            {/* three components */}
            <a href="/">
            <div>
                <p>Sign in</p>
                <span>Acount & Lists</span>
            </div>
            </a>
            <a href="/">
            <p>returns</p>
            <span>& Orders</span>
            </a>
            <a href="/">
            <IoCartOutline />
            <span>0</span>
            </a>

            </div>
        </section>
    </section>
  )
}

export default Header
