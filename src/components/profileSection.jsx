import React, { useState } from "react";
import pimage from "../images/profile.svg";
import "../styles/profile.css";
import { Link } from "react-router-dom";

const ProfileSection = () => {
  const [user, setUser] = useState({
    name: "Baqir Hussain",
    username: "baqirex",
    phone: "+9238295837",
    email: "alkdjsfl@gmail.com",
  });
  return (
    <div className="profile-container">
      <div>
        <div className="profile-image">
          <img src={pimage} height="150px" />
        </div>
        <div className="d-flex mb-4">
          <Link to="/edit-profile">
            <button className="btn btn-primary btn-sm mybtn">
              Edit Profile
            </button>
          </Link>
        </div>
        <div className="d-flex">
          <div className="d-flex flex-column justify-content-end">
            <div className="d-flex">
              <i class="bi bi-person"></i>{" "}
              <p className="text-muted ms-2">{user.name}</p>
            </div>
            <div className="d-flex">
              <i class="bi bi-phone"></i>{" "}
              <p className="text-muted ms-2">{user.phone}</p>
            </div>
            <div className="d-flex">
              <i class="bi bi-envelope"></i>{" "}
              <p className="text-muted ms-2">{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
