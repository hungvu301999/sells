import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import './RelatedProducts.css';
import { ShopContext } from '~/Context/ShopContext';
import Item from '../Item/Item';

const RelatedProducts = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    const products = [];
    const product = all_product.find((e) => e.id === Number(productId));

    // creat a new Array with 4 elements;
    all_product.map((item, index) => {
        if ((item.category === product.category) & (item.id !== product.id)) {
            products.push(item);
            products.splice(4);
        }
    });
    return (
        <div className="relatedproducts">
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-item">
                {products.map((item, index) => {
                    return (
                        <Item
                            key={index}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    );
                })}
                ;
            </div>
        </div>
    );
};

export default RelatedProducts;
