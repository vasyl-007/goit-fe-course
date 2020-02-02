import React from "react";
import PropTypes from "prop-types";

const ListItem = ({ item }) => 
return <li>Item</li>
// h2>List Item</h2>;

ListItem.prop = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    })
};
export default ListItem;
