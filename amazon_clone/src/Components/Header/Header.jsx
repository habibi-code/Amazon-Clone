import React from 'react';
import classes from './Header.module.css'; 
import logoImg from '../../assets/logo.png';
import { IoLocationOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { BiCart } from "react-icons/bi";


const Header = () => {
  return (
    <header className={classes.Header}>
      {/* Logo */}
      <div className={classes.header__logo}>
        <img
          src={logoImg}
          alt="Amazon Logo"
          className={classes.header__logoImage}
        />
      </div>

      {/* Location and Delivery Country */}
      <div className={classes.header__location}>
        <IoLocationOutline className={classes.header__locationIcon} />
        <div className={classes.locationTxt}>
        <span className={classes.header__locationText}>Deliver to</span>
        <span className={classes.header__locationCountry}>United States</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className={classes.header__search}>
        {/* All Departments Dropdown using <select> */}
      <div className={classes.header__allDepartments}>
        <select className={classes.header__select}>
          <option value="">All</option>
          <option value="all">All Departments</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="home">Home & Kitchen</option>
          <option value="books">Books</option>
          <option value="toys">Toys & Games</option>
          <option value="sports">Sports & Outdoors</option>
          {/* Add more departments as needed */}
        </select>
      </div>
        <input
          type="text"
          className={classes.header__searchInput}
          placeholder="Search Amazon"
        />
        <div className={classes.header__bg}>
        <FaSearch className={classes.header__searchIcon} />
        </div>
      </div>

      {/* Language Option using <select> */}
      <div className={classes.header__language}>
      <img src="https://cdn.countryflags.com/thumbs/united-states-of-america/flag-400.png" alt="flag" className={classes.header__languageIcon}/>
        <select className={classes.language__select}>
          <option value="en">EN</option>
          <option value="es">ES</option>
          <option value="fr">FR</option>
          <option value="de">DE</option>
          {/* Add more languages as needed */}
        </select>
      </div>

      {/* Navigation */}
      <div className={classes.header__nav}>
        <div className={classes.header__option}>
          <span className={classes.header__optionLineOne}>Hello, Sign In</span>
          <span className={classes.header__optionLineTwo}>Account & Lists</span>
        </div>
        <div className={classes.header__option}>
          <span className={classes.header__optionLineOne}>Returns</span>
          <span className={classes.header__optionLineTwo}>& Orders</span>
        </div>
        <div className={classes.header__option}>
          <span className={classes.header__optionLineOne}>Your</span>
          <span className={classes.header__optionLineTwo}>Prime</span>
        </div>
      </div>

      {/* Cart Icon */}
      <div className={classes.header__cart}>
        <BiCart className={classes.header__cartIcon} />
        <span className={classes.header__cartCount}>0</span>
      </div>
    </header>
  );
};

export default Header;
