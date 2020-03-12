import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { useRouter } from "./components/router";

// import HomePage from "./components/pages/HomePage";
// import LoginPage from "./components/pages/LoginPage";
// import RegisterPage from "./components/pages/RegisterPage";
// import ContactPage from "./components/pages/ContactPage";

function App() {
  const routing = useRouter(false);
  return (
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
        {/* <Switch>
          <Route exact path="/" component={HomePage} />;

          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/contact" component={ContactPage} />
          <Redirect to="/" />
        </Switch> */}
        {routing}
      </Router>
    </>
  );
}

export default App;

// import axios from "axios";

// // import Films from "./components/films/Films";
// // class App extends Component {
// //   state = {};
// //   render() {
// //     return (
// //       <>
// //         <h2>films</h2>;
// //       </>
// //     );
// //   }
// // }
// // export default App;

// class App extends Component {
//   state = {
//     wishes: []
//   };

//   async componentDidMount() {
//     axios.post("https://my-app-firebase-b532d.firebaseio.com/wishes.json", {
//       wish: "react",
//     });
//     this.getWishes();

//     // const data = await axios.get(
//     //   "https://my-app-firebase-b532d.firebaseio.com/wishes.json"
//     // );
//     // console.log("data");
//   }

//   getWishes = async () => {
//     const data = await axios.get(
//       "https://my-app-firebase-b532d.firebaseio.com/wishes.json"
//     );
//     // console.log("dat ============> ", Object.keys(data.data);
//     const transform = Object.keys(data.data).map(key => ({
//       ...data.data[key],
//       id: key
//     }));

//     this.setState({
//       wishes: transform
//     });

//     console.log("transform", transform);
//   };

//   putWish = async wish => {
//     try {
//       await axios.post(
//         "https://my-app-firebase-b532d.firebaseio.com/wishes.json",
//         wish
//       );
//     } catch (er) {
//       console.log(er);
//     }
//   };

//   handleSubmit = async e => {
//     e.preventDefault();
//     console.log(e.target.elements);
//     const value = e.target.elements[0].value;
//     console.log(value);
//     await this.putWish({ wish: value });
//     await this.getWishes();
//   };

//   deleteWish = async id => {
//     try {
//       await axios.delete(
//         `https://my-app-firebase-b532d.firebaseio.com/wishes/${id}.json`
//       );
//       this.getWishes();
//     } catch (er) {
//       console.log(er);
//     }
//   };

//   render() {
//     const { wishes } = this.state;

//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <input type="text" name="wish" />
//           <button type="submit">PUSH</button>
//         </form>
//         <ul>
//           {wishes.map(wish => (
//             <div key={wish.id}>
//               <h2>{wish.wish}</h2>
//               <button onClick={() => this.deleteWish(wish.id)}>DELETE</button>
//             </div>
//           ))}
//         </ul>
//       </>
//     );
//   }
// }

// export default App;
