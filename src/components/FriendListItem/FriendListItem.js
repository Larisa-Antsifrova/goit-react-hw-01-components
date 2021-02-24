import React from 'react';
import PropTypes from 'prop-types';

import styles from './FriendListItem.module.css';

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

export default FriendListItem;
