import React from "react";
import PropTypes from "prop-types";
import css from "./Profile.module.css";

const Profile = ({ user: { names, tag, location, avatar, stats } }) => (
  <div className={css.container}>
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={names} className={css.avatar} />
        <p className={css.name}>{names}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span className={css.statsLabel}>Followers</span>
          <span className={css.statsValue}>{stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsLabel}>Views</span>
          <span className={css.statsValue}>{stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsLabel}>Likes</span>
          <span className={css.statsValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
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
    ).isRequired
  })
).isRequired;

export default Profile;
