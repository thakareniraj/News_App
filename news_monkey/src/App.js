import './App.css';
import Navbar from './Component/Navbar';
import News from './Component/News';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";

// Import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
// import { BrowserRouter as Router, Route,Switch , NavLink } from 'react-router-dom'

function App() {

  return (
      <>
      <Router>
          <Navbar />
          <Switch>
            <Route exact path ="/" ><News key ="general" pageSize ={6} country ='in' category ='general'   /></Route>
            <Route   path ="/business" ><News  key ="business" pageSize ={6} country ='in' category ='business'  /></Route>
            <Route   path ="/entertainment"><News key ="entertainment" pageSize ={6} country ='in' category ='entertainment'   /></Route>
            <Route   path ="/general"><News key ="general" pageSize ={6} country ='in' category ='general'   /></Route>
            <Route   path ="/health"><News  key ="health" pageSize ={6} country ='in' category ='health'  /></Route>
            <Route   path ="/sports"><News   key ="sports" pageSize ={6} country ='in' category ='sports'  /></Route>
            <Route   path ="/science"><News key ="science" pageSize ={6} country ='in' category ='science'   /></Route>
            <Route   path ="/technology"><News  key ="technology"  pageSize ={6} country ='in' category ='technology'  /></Route>
          </Switch>
      </Router> 
      </>
 
  );
}

export default App;
