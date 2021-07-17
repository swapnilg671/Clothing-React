import React from 'react';
import{Route, Link} from 'react-router-dom';
import Directory from '.././component/directory/directory.component';

import './homepage.styles.scss'

const HomePage= (props)=>{
return(
<div className='homepage'> 
<Directory/>
<Link to= {`{props.match.url}/13`}>hats 13</Link>
<button onClick={()=>props.history.push('/hats')}>hats</button>
</div>

);

};

export default HomePage;
