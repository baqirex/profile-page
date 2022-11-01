import React from "react";

const editProfile = () => {
  return (
    <div className="container col-md-4 col-8">
      <h3 className="my-4">Please Enter Details</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control inputfield"
            id="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="profile-picture">
            Please Upload Profile Picture
          </label>
          <input type="file" className="form-control" id="profile-picture" />
        </div>

        <button type="submit" className="btn btn-primary mybtn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default editProfile;
