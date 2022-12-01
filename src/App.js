import "./App.css";
import React, { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterdMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);
  //I passed a empty array as dependencie, so anything gonna trigger the function again, it will not fetch again the users, if we didn t use useEffect, the fetch function will enter in a loop and will fetch the data infinite time because the users array outside the browser is always different from the inside users

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterdMonsters(newFilteredMonsters);
  }, [monsters, searchField]);
  //filter the monster array as the search field value

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  console.log(filteredMonsters);

  return (
    <div className="App">
      <h1 className="app-title">Monster Catalog</h1>

      <SearchBox
        className="search-box"
        placeholder="search a monster"
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
