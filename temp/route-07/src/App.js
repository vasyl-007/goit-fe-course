import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import db from './/config'
import { useRouter } from "./router";


class App extends Component {
  state = {
    message: null,
    email: '',
    password: '',
    onAuthStateChanged: null
  };

  componentDidMount = async () => {
    
  }

  
  onStateChanged = async() => {
    await db.auth().onAuthStateChanged(user => {
      this.setState({onStateChanged: user})
    })
  }

  onSignOut () => {
  db.auth().signOut()
  }
  
  render() 
  {
    const routing = useRouter(false);
    return (
      <>
      <>
        <Router>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/login">LOGIN</Link>
            </li>
            <li>
              <Link to="/register">REGISTER</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
          {routing}
        </Router>
        <button onClick={this.onSignOut}></button>
        </>
      </>
    );
  }
}

export default App;
