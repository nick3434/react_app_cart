import { useState, useEffect } from 'react';
import Layout from "../components/Layout"
import productList from "../dummy/productList";
import ProductCard from "../components/ProductCard";
import { NavLink } from 'react-router-dom';

const HomeView = (props) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cart = localStorage.getItem('cart');
        if (cart) {
            setCart(JSON.parse(cart));
        }
    }, []);

    const setCartToLocalStorage = (cart) => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    const addCartItem = (cartItem) => {
        const newCart = [...cart, cartItem];
        setCart(newCart);
        setCartToLocalStorage(newCart);
    };

    const removeCartItem = (idx) => {
        const newCart = [...cart];
        newCart.splice(idx, 1);
        setCart(newCart);
        setCartToLocalStorage(newCart);
    };

    const productCards = productList.map((product) => {
        return <ProductCard 
            key={product.id} 
            product={product} 
            addCartItem={addCartItem}
        />
    });

    let totalPrice = 0;
    const cartTableRows = cart.map((cartItem, idx) => {
        totalPrice += cartItem.price * cartItem.quantity;
        return (
            <tr key={cartItem.id}>
                <td className="btn btn-danger btn-sm me-2">
                    <button onClick={() => removeCartItem(idx)}>&times;</button>
                    {cartItem.name}
                </td>
                <td>${cartItem.price}</td>
                <td>{cartItem.quantity}</td>
                <td>${cartItem.price * cartItem.quantity}</td>
            </tr>
        )
    });

    const cartElement = cart.length > 0 ? (
        <div>
            <h2>Cart</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cartTableRows}
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan="3">Total</th>
                        <th>${totalPrice}</th>
                    </tr>
                </tfoot>
            </table>
            <div className="text-end">
                <NavLink to="/checkout" className="btn btn-success">
                    Check Out
                </NavLink>
            </div>
        </div>
    ) : null;

    return (
        <Layout
            title="我的網站"
            description="這是我的網站"
            darkMode={true}
        >
            <section className="py-5">
                <div className="container">
                    <h2>Home View Content</h2>
                    <div className="row my-4">
                        {productCards}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default HomeView