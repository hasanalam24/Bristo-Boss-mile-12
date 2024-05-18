import FoodCart from "../../../Components/FoodCart/FoodCart";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const OrderCart = ({ items }) => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (

        <div>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='grid md:grid-cols-3 gap-10'>
                        {
                            items.slice(0, 6).map(item => <FoodCart key={item._id} item={item}></FoodCart>)
                        }
                    </div>
                </SwiperSlide>
                {
                    items.length > 6 && <SwiperSlide>
                        <div className='grid md:grid-cols-3 gap-10'>
                            {
                                items.slice(6, items.length).map(item => <FoodCart key={item._id} item={item}></FoodCart>)
                            }
                        </div>
                    </SwiperSlide>
                }

            </Swiper>
        </div>
    );
};

export default OrderCart;