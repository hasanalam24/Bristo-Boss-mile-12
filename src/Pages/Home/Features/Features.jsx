import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import featuredImg from '../../../../assets/home/featured.jpg'
import './Features.css'

const Features = () => {
    return (
        <div className="featured-item text-white pt-8 my-16 bg-fixed">

            <SectionTitle
                heading={"Featured Item"}
                subHeading={"Check it Out"}
            ></SectionTitle>

            <div className="md:flex justify-center items-center py-16 px-36 bg-slate-500 bg-opacity-40">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>May 16,2024</p>
                    <p className="uppercase">Where can i get some </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dignissimos officiis aspernatur beatae esse fuga, aut odit voluptates pariatur. Ab voluptate fugit, facilis rem quam tempora suscipit nisi qui odio.</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Features;