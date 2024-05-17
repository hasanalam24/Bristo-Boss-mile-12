import FoodCart from "../../../Components/FoodCart/FoodCart";

const OrderCart = ({ items }) => {
    return (
        <div className='grid md:grid-cols-3 gap-10'>
            {
                items.map(item => <FoodCart key={item._id} item={item}></FoodCart>)
            }
        </div>
    );
};

export default OrderCart;