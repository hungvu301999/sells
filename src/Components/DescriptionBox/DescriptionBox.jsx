import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Decription</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates saepe non unde recusandae ipsa
                    at consectetur maiores delectus perspiciatis quam. Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Tempore repudiandae voluptates dignissimos illum aspernatur, ipsum tempora.
                    Blanditiis nemo, laudantium, ab iste illo, eius reiciendis veniam aperiam est esse ratione
                    inventore.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, voluptatum! Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Eligendi cum asperiores aperiam accusantium, aspernatur tempore.
                </p>
            </div>
        </div>
    );
};

export default DescriptionBox;
