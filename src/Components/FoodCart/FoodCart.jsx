
const FoodCart = ({ item }) => {

    const { name, price, image, recipe } = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-5 top-5 bg-slate-900 text-white font-medium py-1 px-3">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title ">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-200 border-orange-400">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;