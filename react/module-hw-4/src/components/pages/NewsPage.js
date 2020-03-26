import { Route, Link } from "react-router-dom";
import React from "react";
import NewPage from ""

const HomePage = ({ history }) => {
    console.log('history', history)
    return (
        <>
        <Link to="/home/new">NEWS</Link>
        <Route path="/home/new" component={NewPage} />
        </>
    )
}


<h2>HomePage</h2>;

export default HomePage;