import React, { useState, useContext, useRef } from 'react';
import './Navbar.css';
import { ShopContext } from '~/Context/ShopContext';
import logo from '~/Components/Assets/logo.png';
import cart_icon from '~/Components/Assets/cart_icon.png';
import dropdown_icon from '~/Components/Assets/dropdown_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState('shop');
    const { getNavCartCount } = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
        console.log(e.target);
    };

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <img className="nav-dropdown" onClick={dropdown_toggle} src={dropdown_icon} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => setMenu('shop')}>
                    <Link to="/">Shop</Link> {menu === 'shop' ? <hr /> : <></>}
                </li>
                <li onClick={() => setMenu('mens')}>
                    <Link to="/mens">Men</Link>
                    {menu === 'mens' ? <hr /> : <></>}
                </li>
                <li onClick={() => setMenu('womens')}>
                    <Link to="/womens">Women</Link>
                    {menu === 'womens' ? <hr /> : <></>}
                </li>
                <li onClick={() => setMenu('kids')}>
                    <Link to="/kids">Kids</Link>
                    {menu === 'kids' ? <hr /> : <></>}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to="/login">
                    <button>Login</button>
                </Link>

                <Link to="cart">
                    <img src={cart_icon} alt="" />
                </Link>
                <div className="nav-cart-count">{getNavCartCount()}</div>
            </div>
        </div>
    );
};

export default Navbar;
