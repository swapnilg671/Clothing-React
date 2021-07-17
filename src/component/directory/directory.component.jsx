import React from 'react';
import './directory.styles.scss';
//import {section} from '../../pages/section';
import MenuItems from '../menu-item/menu-item.component';


class Directory extends React.Component {
    constructor(){
    super();
    this.state={
       // section
        sections:[
        {
        title: 'Hats',
        image:'https://www.pexels.com/photo/brown-fedora-hat-in-selective-focus-photography-35185/ ',
        id:1,
        color: '#055a8c',
        linkUrl: 'hats'
        },
        {
        title: 'Jackets',
        image:'https://i.ibb.co/px2tCc3/jackets.png',
        id:2,
        color: '#03C04A',
        linkUrl: ''
    
        },
        {
        title: 'Sneakers',
        image:'https://i.ibb.co/0jqHpnp/sneakers.png',
        id:3,
        color:'brown',
        linkUrl: ''
        },
        {
        title: 'Women',
        image:'https://i.ibb.co/GCCdy8t/womens.png',
        size:'large',
        id:4,
        color: 'pink',
        linkUrl: ''
        },
        {
        title: 'Men',
        image:'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        id:5,
        linkUrl: ''
        }
        ]
        }
               }

    render(){
        return(
        <div className="directory-menu">
            {this.state.sections.map(({title, image, id, size, color,linkUrl}) =>(
                    <MenuItems key={id} title={title} image={image} size={size} color={color} linkUrl={linkUrl}/>
                ))}
        </div>
        ) ;      
} 

};


export default Directory;  