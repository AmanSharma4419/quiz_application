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
    const img = this.state.img;
    if (!img) {
      return alert("Please Choose Profile Image");
    } else {
      fetch("http://localhost:3000/api/v1/user/profile", {
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
        body: img
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        <figure class="image is-128x128">
          <img
            class="is-rounded"
            src="https://bulma.io/images/placeholders/128x128.png"
          />
        </figure>
        <input type="file" onChange={this.fileChangedHandler} />
        <button class="button is-primary" onClick={this.handleProfileImage}>
          Primary
        </button>
      </React.Fragment>
    );
  }
}

export default UserProfile;
