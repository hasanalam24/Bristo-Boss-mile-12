import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Features from "../Features/Features";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Features></Features>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;