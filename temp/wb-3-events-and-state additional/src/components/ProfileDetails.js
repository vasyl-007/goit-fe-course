import React from "react";
import PropTypes from "prop-types";

const ProfileDetails = ({ name, email }) => (
  <>
    <p>Name: {name}</p>
    <p>email: {email}</p>
    <hr />
  </>
);

ProfileDetails.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default ProfileDetails;
