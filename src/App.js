import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) => {
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {}
        );
      })
    );
  }
  // this.setState is updating the searchFieldString to be used as a filter in the filteredMonster variable.

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    // destructuring

    const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
      // includes is case sensitive, that why we use toLocalLowerCase
    });

    return (
      <div className="App">
        <h1 className="app-title">Monster Catalog</h1>

        <SearchBox
          onChangeHandler={onSearchChange}
          className="search-box"
          placeholder="search a monster"
        />
        <CardList monsters={filteredMonster} anything={["a", "z"]} />
      </div>
    );
  }
}

export default App;
