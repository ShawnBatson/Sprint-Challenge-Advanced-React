import React from "react";
import axios from "axios";
import NavBar from "./Components/NavBar";
// import Display from "./Components/Display";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
      name: "",
      country: ""
    };
  }
  componentDidMount() {
    console.log("component mounted");
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        this.setState({ players: res.data });
        console.log("inside mount", this.state.players);
      })
      .catch(err => console.log("No players", err));
  }

  render() {
    console.log("rendering...");
    return (
      <div className="App">
        <NavBar />
        <h1>Women's World Cup players ranked by search interest</h1>
        <div className="players">
          <div>
            {this.state.players.map(players => {
              return (
                <p>
                  {players.name}, from {players.country}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
