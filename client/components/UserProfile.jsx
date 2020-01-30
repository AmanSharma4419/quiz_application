import React from "react";

class UserProfile extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <React.Fragment>
        <figure class="image is-128x128">
          <img
            class="is-rounded"
            src="https://bulma.io/images/placeholders/128x128.png"
          />
        </figure>
        <form action="http://localhost:3000/api/v1/user/profile" method="POST">
          <input type="file" name="avtar" id="avtar" required />
          <input type="submit" value="Upload" />
        </form>
      </React.Fragment>
    );
  }
}

export default UserProfile;
