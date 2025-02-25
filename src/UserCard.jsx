// src/UserCard.jsx
import React from "react";
import PropTypes from "prop-types";
import "./UserCard.css"; // Import CSS for styling

const UserCard = ({ name, email, age, backgroundColor }) => {
  return (
    <div className="user-card" style={{ backgroundColor }}>
      <h2 className="user-card__name">{name}</h2>
      <p className="user-card__email">{email}</p>
      <p className="user-card__age">Age: {age}</p>
    </div>
  );
};

// Define prop types for validation
UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string,
};

// Default props
UserCard.defaultProps = {
  backgroundColor: "#f0f0f0", // Default background color
};

export default UserCard;
