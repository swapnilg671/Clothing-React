import React from "react";
import './menu-item.styles.scss';
import { withRouter } from "react-router-dom";

const MenuItem =({title, image, size, color, history}) =>(
    <div 
     className={`${size} menu-item`}
     style={
        {
     backgroudImage: `url(${image})`,
     backgroundColor: `${color}`
         }
        }

    onClick= {()=>history.push()}
    >

    
    <div className='content'>
    <h1 className="title">{title.toUpperCase()}</h1>
    <span className="subtitle">Shop Now</span>
    </div>
    </div>

    
);

export default withRouter(MenuItem);