import React from 'react';
import { NavLink } from 'react-router-dom';
import logoImg from "./logo.png";


export default function Header(props) {
  // const { products,onAdd } = data;
  return (
      <>
    {/* <header className="block row center">
      <div>
        <NavLink to="/">
          <h1>Small Shopping Cart</h1>
        </NavLink>
      </div>
      <div>
      <NavLink to="/explor"> Exlpore more</NavLink>
      {'     '}
          <NavLink to="/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </NavLink>{' '}

      </div>
    </header> */}
  


        <div className="nav">
      <div className="logo">
        <img src={logoImg} alt="logoImg" />

       
      </div>
      
      <div className="navBar">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          
          </li>
          <li>
          <NavLink to="/explor">Explor More</NavLink>

           
          </li>
          <li>
          <NavLink to="/about">About</NavLink>

         
          </li>
          <li>
          <NavLink to="/cart"
          
          
          
          >Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}</NavLink>
            
          </li>
        </ul>
      </div>
    </div>
  </>
  );
}
