import Layout from "../components/Layout"
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51N3fJlLtUNz4iAH5eA4TrPtlICbtNyyIDTUoJ0gg4zGmNLrN2biG59zFBgQyBcUapodjFZbAC1H2LDhwl31Uil1K00ehLbFsuR");

const CheckoutForm = ({amount}) => {
    const stripe = useStripe();
    const elements = useElements();
    const submitHandler = (e) => {
        e.preventDefault();
        const cardElement = elements.getElement(CardElement);
        console.log("cardElement", cardElement);
        stripe.createPaymentMethod({
            type: 'card',
            card: cardElement
        })
            .then(res => {
                console.log("res:", res);
                const { id } = res.paymentMethod;
                axios.post("http://localhost:5001/api/checkout"), {
                    id,
                    amount
                })
                .then(res => {
                    console.log("res: ", res)
                })
                .catch(err => {
                    console.log("err: ", err)
                })
            })
            .catch(error => {
                console.log("error:", error);
            })
    }
}

const CheckoutView = () => {
    let amount = 0;
    let cart = localStorage.getItem('cart');
    if (cart) {
        cart = JSON.parse(cart);
        cart.forEach((cartItem) => {
            amount += cartItem.price * cartItem.quantity;
        });
    }

    return (
        <Layout title="Checkout" description="">
            <section className="py-5">
                <div className="container">
                    <h2>Amount: $(amount)</h2>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm amount={amount} />
                    </Elements>
                </div>
            </section>
        </Layout>
    )
}

export default CheckoutView;