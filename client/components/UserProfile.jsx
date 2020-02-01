import React from "react";

class UserProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      img: ""
    };
  }
  fileChangedHandler = event => {
    this.setState({ ...this, img: event.target.files[0] });
  };
  handleProfileImage = () => {
    const img = {
      avtar: this.state.img
    };
    if (!img) {
      return alert("Please Choose Profile Image");
    } else {
      fetch("http://localhost:3000/api/v1/user/profile", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data"
        },
        body: JSON.stringify(img)
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        <figure className="image is-128x128">
          <img
            className="is-rounded"
            src="https://bulma.io/images/placeholders/128x128.png"
          />
        </figure>
        <input
          type="file"
          enctype="multipart/form-data"
          onChange={this.fileChangedHandler}
        />
        <button className="button is-primary" onClick={this.handleProfileImage}>
          Primary
        </button>
      </React.Fragment>
    );
  }
}

export default UserProfile;
