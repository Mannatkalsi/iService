import React from 'react';
import Card from './Card';
import './Card.css';
import './CardList.css';
import expertList from './expertList';

const CardList = () => {
    return (
        <div>
            <h1 class ="expert-heading">Featured Experts</h1>
            
            <div className = "row">
                {expertList.map((expert) =>
                
                    <Card
                        key={expert.key}
                        avatar={expert.avatar}
                        name={expert.name}
                        position={expert.position}
                        description={expert.description}
                        rating={expert.rating}
                    />
                    
                )}
        
        </div>
    </div>
    )
}

export default CardList;