import React from "react";
import {render} from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import Te from './components/Te';
const history = createBrowserHistory();
const Home = () => {
  return(
  <div>
    <h2>Home</h2>
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
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contacts" component={Contacts}/>
    </BrowserRouter>
  )
}
render(<Test/>, document.getElementById('root'))