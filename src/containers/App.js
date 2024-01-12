import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from "../component/CardList";
// import { robots } from './robots';
import SearchBox from "../component/SearchBox";
import Scroll from "../component/Scroll";

function App() {
  const [robots, SetRobots] = useState([]);
  const [searchfield, SetSearchfield] = useState("");

  const onSearchChange = (event) => {
    SetSearchfield(event.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        SetRobots(users);
      });
  }, []);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return !robots.length ? (
    <h1 className="flex items-center justify-center loading">Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

export default App;
