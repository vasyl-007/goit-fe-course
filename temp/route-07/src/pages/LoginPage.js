import React from "react";

const LoginPage = props => {
  console.log(props);

    
  handleSumbit = e => {
      this.setState(){
          [e.target.name]: e.target.value
      }
  }

  return (
    <>
      <h2>LoginPage</h2>
        <form>
            <input placeholder="email" name="email" type="email" onChange="this.handleSumbit" />
        </form>

      <button onClick={() => props.history.push("/register")}>register</button>
    </>
  );
};

export default LoginPage;