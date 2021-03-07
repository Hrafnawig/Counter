import React,{useContext} from "react";
import {render} from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import Te from './components/Te';
import {UserContext} from './components/Contexts'
const history = createBrowserHistory();
const Home = () => {
  const msg=useContext(UserContext);
  return(
  <div>
    <h2>Home</h2>
    {msg}
  </div>);
};
const About = () => {
  return(<div>
    <h2>About</h2>
  </div>);
};

const Contacts = () => {
  return(<div>
    <h2>Contacts</h2>
  </div>);
};
export default function Test() {
  return (
    <BrowserRouter history={history}>
      <Te/>
        <hr/>
        <UserContext.Provider value="hello">
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contacts" component={Contacts}/>
        </UserContext.Provider>
    </BrowserRouter>
  )
}
render(<Test/>, document.getElementById('root'))