import React, { Component } from "react";
import shortId from "shortid";
import Select from "../select/Select";

const INITIAL_STATE = {
  wish: "",
  date: new Date().toDateString(),
  priority: "Normal"
};

class WishForm extends Component {
  state = { ...INITIAL_STATE };

  handleSumbmit = evt => {
    evt.preventDefault();
    console.log(this.state);
    this.props.getFormValueWish({ ...this.state, id: shortId() });
    this.setState({ ...INITIAL_STATE });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  chooseSelect = param => {
    // console.log(param.value);
    this.setState({
      priority: param.value
    });
  };

  render() {
    const { wish } = this.state;
    const { onChooseSelect } = this.props;
    return (
      <>
        <Select onChooseSelect={this.chooseSelect} />
        <form onSubmit={this.handleSumbmit}>
          <input
            maxLength={15}
            minLength={5}
            type="text"
            name="wish"
            onChange={this.handleChange}
            value={wish}
          />
        </form>
      </>
    );
  }
}

export default WishForm;
