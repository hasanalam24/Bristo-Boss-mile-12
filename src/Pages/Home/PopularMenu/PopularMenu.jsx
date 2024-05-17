// import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItemCard/MenuItem";
import useMenu from "../../../Hooks/UseHooksMenu";


const PopularMenu = () => {

    // const [menu, setMenu] = useState([])

    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItem = data.filter(item => item.category === 'popular')
    //             setMenu(popularItem)
    //         })
    // }, [])

    //useCustom Hooks
    const [menu] = useMenu()
    const popularItem = menu.filter(item => item.category === 'popular')

    return (
        <div className="mb-12">
            <SectionTitle
                heading={"From Our Menu"}
                subHeading={"Popular Items"}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-8">
                {
                    popularItem.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4">View Full Menu</button>
        </div>
    );
};

export default PopularMenu;