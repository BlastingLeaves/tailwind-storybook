import React from "react";
import PropTypes from "prop-types";

import Card from './Card'


const CardComponent = ({ title, image, children }) => (

        <div className="flex-1 px-3">

            <Card className="mb-8">
                <p className="font-semibold text-xl">
                    {image}
                </p>

                <p className="font-semibold text-l ">
                    {title}
                </p>
                <p className="mt-4 mb-4">
                    {children}
                </p>

            </Card>

      </div>
);

CardComponent.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string
};

export default CardComponent;
