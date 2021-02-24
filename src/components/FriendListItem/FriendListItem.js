import React from 'react';
import PropTypes from 'prop-types';

import styles from './FriendListItem.module.css';
import defaultAvatar from './defaultAvatar.jpg';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className="item">
    {isOnline ? (
      <span className="status">Y</span>
    ) : (
      <span className="status">N</span>
    )}
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
  </li>
);

FriendListItem.defaultProps = {
  avatar: defaultAvatar,
  isOnline: false,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
export default FriendListItem;
