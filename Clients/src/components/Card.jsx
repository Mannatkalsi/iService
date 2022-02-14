import React from "react";
import './Card.css';

const Card = (props) => {
    return (
    <div className = "column">
        <div class="expert">
            
            <img src={props.avatar} alt="Expert" />
            <p class="expert-name">{props.name}</p>
            <p class="expert-position">{props.position}</p>
            <p class="expert-description">{props.description}</p>
            <p class="expert-rating">{props.rating}</p>
            
        </div>
    </div>
    )
}

export default Card;