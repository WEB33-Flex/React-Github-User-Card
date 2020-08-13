import React from "react";

const UserCard = (props) => {
  const user = props.user;

  if (!user) return <h1>Loading</h1>;

  return (
    <div className="card-wrapper">
      <div className="img-container">
        <img className="card-img" src={props.user.avatar_url} alt="profile" />
      </div>
      <div className="user-info">
        <h3>{user.login}</h3>
        <p>
          Profile: <a href={user.html_url}>{user.html_url}</a>
        </p>
      </div>
    </div>
  );
};

export default UserCard;
