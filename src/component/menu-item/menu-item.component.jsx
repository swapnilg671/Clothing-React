import React from "react";
import './menu-item.styles.scss'
const MenuItem =({title, image, size, color}) =>(
    <div 
     className={`${size} menu-item`}
     style={
        {
     backgroudImage: `url(${image})`,
     backgroundColor: `${color}`
         }
        }
    >

    
    <div className='content'>
    <h1 className="title">{title.toUpperCase()}</h1>
    <span className="subtitle">Shop Now</span>
    </div>
    </div>

    
);

export default MenuItem;