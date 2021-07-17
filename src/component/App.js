import React from 'react';
import {Switch, Route,Link} from 'react-router-dom';
import './App.css';
import HomePage from '../pages/homepage.component'

const HatsPage=(props)=>{
  console.log(props);
  return(
<div>
  <h1>Hats Page</h1>
  <Link to={`${props.match.url}/1`}>1 </Link>
  <Link to={`${props.match.url}/2`}>2 </Link>
  <Link to={`${props.match.url}/3`}>3 </Link>
</div>
);
  }

const  HatsDetails= props=>{
  return(
<div>
<h1> ID of hats:{props.match.params.hatsID}</h1>

</div>
  );
}

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/hats" component={HatsPage}></Route>
      <Route path="/hats/:hatsID" component={HatsDetails}></Route>
      </Switch>
    </div>
  );
}

export default App;
