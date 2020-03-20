import React from "react";
import PropTypes from "prop-types";

const Profile = ({ user: { names, tag, location, avatar, stats } }) => (
  <div className="profile">
    <div className="description">
      <img src={avatar} alt={names} className="avatar" />
      <p className="name">{names}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">Followers:</span>
        <span className="quantity">{stats.followers}</span>
      </li>
      <li>
        <span className="label">Views:</span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li>
        <span className="label">Likes:</span>
        <span className="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  location: "location is hidden by the owner of an account",
  avatar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT48qFgcgEBfCXqzPcWmSUcWt_UFCYkBTHNt2CGz9yKmCspUnWJ"
};
Profile.propTypes = PropTypes.objectOf(
  PropTypes.shape({
    names: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.objectOf(
      PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number
      })
    )
  }).isRequired
);

export default Profile;
