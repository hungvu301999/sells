import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '~/Context/ShopContext';
import remove_icon from '~/Components/Assets/cart_cross_icon.png';

const CartItems = () => {
    const { all_product, cartItems, removeCart, getTotalcartAmount } = useContext(ShopContext);
    return (
        <div className="cartitems">
            <div className="cartitems-fomat-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e, index) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={index}>
                            <div className="cartitems-fomat cartitems-fomat-main">
                                <img src={e.image} alt="" className="carticon-product-icon" />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img
                                    src={remove_icon}
                                    className="remove-icon"
                                    onClick={() => {
                                        removeCart(e.id);
                                    }}
                                    alt=""
                                />
                            </div>
                        </div>
                    );
                } else return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalcartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalcartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter it here!</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder="promo code" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
