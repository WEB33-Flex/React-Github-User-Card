import React from "react";

const FollowerCard = (props) => {
  const followers = props.followers;

  if (!followers) return <h1>Loading</h1>;

  return (
    <div className="card-wrapper">
      <div className="img-container">
        <img className="card-img" src={followers.avatar_url} alt="profile" />
      </div>
      <div className="user-info">
        <h3>{followers.login}</h3>
        <p>
          Profile: <a href={followers.html_url}>{followers.html_url}</a>
        </p>
      </div>
    </div>
  );
};

export default FollowerCard;
