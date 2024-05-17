import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";

import menuImg from '../../../../assets/menu/banner3.jpg'
import dessertBg from '../../../../assets/menu/dessert-bg.jpeg'
import pizzaBg from '../../../../assets/menu/pizza-bg.jpg'
import saladBg from '../../../../assets/menu/salad-bg.jpg'
import soupBg from '../../../../assets/menu/soup-bg.jpg'
import useMenu from "../../../Hooks/UseHooksMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";


const MenuMain = () => {

    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')


    return (
        <div>
            <Helmet>
                <title>Bristo Boss | Menu</title>
            </Helmet>


            <Cover coverImg={menuImg} title="Our Menu"></Cover>

            {/* main cover */}
            <SectionTitle
                subHeading="Don't Miss"
                heading="Today's Offer"
            ></SectionTitle>

            {/* offered Menu */}
            <MenuCategory items={offered}></MenuCategory>


            {/* dessert menu items */}

            <MenuCategory items={dessert} title="dessert" coverImg={dessertBg}></MenuCategory>

            {/* pizza */}
            <MenuCategory items={pizza} title="pizza" coverImg={pizzaBg}></MenuCategory>

            {/* salad */}
            <MenuCategory items={salad} title="salad" coverImg={saladBg}></MenuCategory>

            {/* soup */}
            <MenuCategory items={soup} title="soup" coverImg={soupBg}></MenuCategory>
        </div>
    );
};

export default MenuMain;