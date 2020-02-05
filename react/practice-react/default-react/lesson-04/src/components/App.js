import React, { Component } from "react";
import Form from "./form/Form";
import WishList from "./wishList/WishList";
import WishForm from "./wishForm/WishForm";
import Feedback from "./espresso/Feedback";
//=============================================
import ContactList from "./contacts/ContactList";
//=============================================
class App extends Component {
  state = {
    isVisible: false,
    wishes: []
  };
  getFormValueAuth = value => {
    console.log("app -->", value);
    if (value) {
      this.setState({
        isVisible: true
      });
    }
  };

  getFormValueWish = value => {
    console.log(value);
    this.setState(prev => {
      console.log("prevstate:", prev);
      return {
        wishes: [...prev.wishes, value]
      };
    });
  };

  deleteWish = id => {
    this.setState(prev => ({
      wishes: prev.wishes.filter(elem => elem.id !== id)
    }));
  };

  // chooseSelect = param => {
  //   console.log(param);
  // };

  render() {
    const { isVisible, wishes } = this.state;
    return (
      <>
        {isVisible ? (
          <Form getFormValue={this.getFormValueAuth} />
        ) : (
          <>
            <WishForm
              getFormValueWish={this.getFormValueWish}
              onChooseSelect={this.chooseSelect}
            />
            {wishes.length !== 0 && (
              <WishList onDeleteWish={this.deleteWish} data={wishes} />
            )}
          </>
        )}

        <Feedback />
        <ContactList />
      </>
    );
  }
}

export default App;

// <>
// {isVisible ? (<Form getFormValue={this.getFormValueAuth} />) : (
//   <>
//   <WishForm getFormValueWish={this.getFormValueWish} />
//   {wishes.length !== 0 && (
//     <WishList onDeleteWish={this.onDeleteWish} data={wishes} />)
//   </> }}
// )}
//   <Feedback />
//   <ContactList />
//   <WishForm getFormValueWish={this.getFormValueWish} />
//   {wishes.length !== 0 && (
//     <WishList onDeleteWish={this.onDeleteWish} data={wishes} />
//   )}
//   {/* {isVisible ? <Form getFormValue={this.getFormValueAuth} /> : <p>NEXT</p>} */}
// </>
// }
