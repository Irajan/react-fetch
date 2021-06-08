import React from "react";
import Profile from "./components/Profile";
import Loading from "./components/Loading";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      name: { title: "", first: "", last: "" },
      image: "",
    };
    this.getUser = this.getUser.bind(this);
  }

  componentWillMount() {
    this.getUser();
  }

  async getUser() {
    this.setState({ loading: true });
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();

    const fetchedName = data.results[0].name;
    const fetchedImage = data.results[0].picture.large;

    this.setState({ loading: false, name: fetchedName, image: fetchedImage });
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <Loading />
        ) : (
          <Profile
            name={this.state.name}
            image={this.state.image}
            onClick={this.getUser}
          />
        )}
      </>
    );
  }
}

export default App;
