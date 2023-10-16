import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductCard = ({ product, addCartItem }) => {
    
    const [quantity, setQuantity] = useState(1);
    const price = product.discount.isDiscount ? (
        <span>
            <s>{product.price}</s>
            <span className='ms-1'>{Math.floor(product.price * product.discount.rate)}</span>
        </span>
    ) : <span>{product.price}</span>;

    const submitHandler = (e) => {
        e.preventDefault();
        const price = product.discount.isDiscount ? Math.floor(product.price * product.discount.rate) : product.price;
        console.log(price, quantity);
        const cartItem = {
            id: product.id,
            name: product.name,
            image: product.image,
            price,
            quantity,
            createdAt: new Date().getTime()
        };
        // 將 cartItem 傳給上層元件
        addCartItem(cartItem);
    }

    // 回傳 react-bootstrap 的 Card 元件
    return (
        <div className="col-lg-4 col-md-6">
            <Card className="mb-4">
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <form onSubmit={submitHandler}>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            <span>$</span> {price}

                            <br />

                            <select onChange={(e) => setQuantity(parseInt(e.target.value))} className="form-control">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </Card.Text>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                        <Button
                            variant="primary"
                            disabled={!product.isAvailable}
                            type="submit"
                        >
                            Add to cart
                        </Button>
                    </form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProductCard;