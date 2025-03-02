import React from 'react'
import classes from './Header.module.css'
import { AiOutlineMenuFold } from "react-icons/ai";
const LowerHeader = () => {
  return (
    <div className={classes.lower__container}>
      <ul>
        <li>
        <AiOutlineMenuFold className={classes.lowerMenu__icon}/>
        <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Customer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  )
}

export default LowerHeader
