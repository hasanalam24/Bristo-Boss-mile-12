import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItemCard/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className="pt-8">
            {title && <Cover coverImg={coverImg} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-8 my-16 ">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;