import React, { Component } from "react";
import db from "../config";
// import db from 'firebase'

class RegisterPage extends Component {
  state = {
    message: null,
    error: null
  };

  componentDidMount() {
    this.createUser("max@gmail.com", "qwerdf");
    
  }

  createUser = async (email, pass) => {
    try {
      const data = await db.auth().createUserWithEmailAndPassword(email, pass);
      console.log("data ========== ", data);
    } catch (error) {
      console.log(error);
      this.setState({ message: error.message });
    }
  };

  render() {
    const { error } = this.state;
    return (
      <>
        <h2>Register Page</h2>;
        {error && <h2>{message}</h2>}
        <button onClick={() => props.history.push("/login")}>login</button>
      </>
    );
  }
}

export default RegisterPage;

// const ContactPage = (props) => (

//   <>
// <h2>Register Page</h2>;
// {/* <form>
//   <input placeholder="email" />
//   <input placeholder="password" />
// </form> */}
// <button onClick={() => props.history.push("/login")}>login</button>
//   </>
// );

// export default ContactPage;
