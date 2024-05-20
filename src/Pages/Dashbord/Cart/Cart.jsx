import useCart from "../../../Hooks/useCart";

const Cart = () => {

    const [cart] = useCart()

    const totalPrice = cart.reduce((previousTotal, currentTotal) => previousTotal + currentTotal.price, 0)

    return (
        <div>
            <div className="flex justify-evenly">
                <h2 className="text-4xl">
                    Items: {cart.length}
                </h2>
                <h2 className="text-4xl">
                    Total Price: ${totalPrice}
                </h2>
                <button className="btn btn-secondary">Pay</button>
            </div>
        </div>
    );
};

export default Cart;