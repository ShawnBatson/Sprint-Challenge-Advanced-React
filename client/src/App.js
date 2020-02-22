import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(players => this.setState({ players }))
      .catch(err => console.log("No dogs :(", err));
    console.log("componentDidMount running");
    console.log(this.state);
  }

  render() {
    console.log("rendering...");
    return (
      <div className="App">
        <div className="players">
          <div>
            {this.state.players.map(player => (
              <img width="200" src={player} key={player} alt={player} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
