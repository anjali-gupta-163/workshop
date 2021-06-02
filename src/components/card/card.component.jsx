import React from 'react';
import './card.styles.css';

export const Card = (props) => {
    const image = props.page1["poster-image"];
    let images = "images/"+image;
    const defaultImg = "images/placeholder_for_missing_posters.png";
    if(image == "posterthatismissing.jpg"){
        images = defaultImg;
    }
     return(
        <div className='card-container'>
            <img 
            alt="show" 
            src={images}
            width={200} height={200}
             />
            <h2>{props.page1.name}</h2>
        </div>
    );
}