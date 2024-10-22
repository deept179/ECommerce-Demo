import React, { useState } from 'react';
import ProductImg from "../../assets/images/tshirt.png"
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/cartSlice';

const Products = () => {
    const [products] = useState([
        {
            id: 1,
            title: "Canvas",
            description: "High quality canvas shoes.",
            price: 20,
            discountedPrice: 15,
            currency: "$",
            image: ProductImg,
        },
        {
            id: 2,
            title: "Sport shoes",
            description: "Sporty shoes, durable at affordable ranges.",
            price: 25,
            discountedPrice: 20,
            currency: "$",
            image: ProductImg,
        },
        {
            id: 3,
            title: "Heels",
            description: "Fashionable trendy heels.",
            price: 30,
            currency: "$",
            image: ProductImg,
        },
    ]);

    const dispatch = useDispatch();

    // const addToCart = (product) => {
    //     dispatch(addToCart(product));
    // }

    // const removeFromCart = (productId) => {
    //     dispatch(removeFromCart(productId));
    // }

    const items = useSelector((state) => state.cart.items);
    console.log("items : ", items);

    return (
        <div className="product-list p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
                <div key={product.id} className="product-card bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
                    <img src={product.image} alt={product.title} className="product-image w-full h-48 object-cover" />
                    <div className="product-details p-4">
                        <h3 className="product-title text-lg font-semibold text-gray-800">{product.title}</h3>
                        <p className="product-description text-gray-600 text-sm mt-2">{product.description}</p>
                        <div className="product-price mt-3 flex items-center">
                            {product.discountedPrice ? (
                                <>
                                    <span className="product-price-discounted text-lg font-bold text-indigo-500">
                                        {product.currency}{product.discountedPrice}
                                    </span>
                                    <span className="product-price-original line-through text-gray-500 ml-2 text-sm">
                                        {product.currency}{product.price}
                                    </span>
                                </>
                            ) : (
                                <span className="product-price-regular text-lg font-bold text-gray-800">
                                    {product.currency}{product.price}
                                </span>
                            )}
                        </div>
                        <div className="mt-4 flex justify-between">
                            <button
                                // ...
                                onClick={() => dispatch(addToCart(product))}
                            >
                                +
                            </button>

                            {/* Option 1: Render specific properties of cart items */}
                            <ul>
                                {items.map((item) => (
                                    <li key={item.id}>
                                        {item.quantity}
                                    </li>
                                ))}
                            </ul>

                            <p className='flex justify-center w-fit'>
                                {items.length < 0 && 'Add to Cart'}
                            </p>

                            <button
                                // ...
                                onClick={() => dispatch(removeFromCart(product.id))}
                            >
                                -
                            </button>
                        </div>
                        <div className="mt-4 flex justify-center">
                            <button className="product-buy-btn bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md">
                                Purchase Now
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;
