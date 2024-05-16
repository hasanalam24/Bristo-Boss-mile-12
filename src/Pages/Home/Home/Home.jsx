import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Features from "../Features/Features";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Features></Features>
        </div>
    );
};

export default Home;