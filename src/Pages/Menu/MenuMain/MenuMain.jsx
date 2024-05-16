import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";

import menuImg from '../../../../assets/menu/banner3.jpg'
import PopularMenu from "../../Home/PopularMenu/PopularMenu";


const MenuMain = () => {
    return (
        <div>
            <Helmet>
                <title>Bristo Boss | Menu</title>
            </Helmet>

            <Cover coverImg={menuImg} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>

            <Cover coverImg={menuImg} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>

            <Cover coverImg={menuImg} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default MenuMain;