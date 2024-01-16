import React from 'react';
import './ProductDisplay.css';
import star_icon from '~/Components/Assets/star_icon.png';
import star_dull_icon from '~/Components/Assets/star_dull_icon.png';

const ProductDisplay = (props) => {
    const { product } = props;

    return (
        <div className="productDisplay">
            <div className="productDisplay-left">
                <div className="productDisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productDisplay-img">
                    <img className="productDisplay-main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="productDisplay-right">
                <h1>{product.name}</h1>
                <div className="productDisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>122</p>
                </div>
                <div className="productDisplay-right-price">
                    <div className="productDisplay-right-price-old">${product.old_price}</div>
                    <div className="productDisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productDisplay-right-description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, distinctio veniam! Fugiat
                    laborum dolorem omnis est, sed nemo eum suscipit?
                </div>
                <div className="productDisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productDisplay-right-size">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button>ADD TO CART</button>
                <p className="productDisplay-right-category">
                    <span>Category :</span> Women, T-Shirt, Crop Top
                </p>
                <p className="productDisplay-right-category">
                    <span>Tag :</span> Moderm, Latest
                </p>
            </div>
        </div>
    );
};
export default ProductDisplay;
