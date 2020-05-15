import React from "react";
import PropTypes from "prop-types";
import Container from "../mix/Container";
import Title from "../mix/Title";




const Article = ({ title, image, children }) => (
<Container>
    <div className="flex-1 px-3">
            <Title>{title}</Title>
            <p className="mt-8 pb-12 text-xl font-light leading-relaxed text-justify">
                {children}
            </p>
        <div className=" lg:w-full ">
            <img src={image}
                 className=' lg:w-full lg:h-full '
                 alt="hero"/>
        </div>
    </div>
</Container>
);

Article.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string
};

export default Article;