import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box-component'

const App = () => {

  console.log('render');
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredLst, setfilteredLst] = useState(monsters);
  console.log(searchField);

  const onSearchChange = (event) => {
    const searchFieldText = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldText);
  }

  useEffect(() => {
    console.log('fetch effect fired');
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users));
  }, []);

  useEffect(() => {
    console.log('filter effect fired');
    const newFilteredLst = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setfilteredLst(newFilteredLst);
  }, [monsters, searchField]);

  return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox 
          className='monsters-search-box'
          placeholder='search monsters'
          onSearchHandler = {onSearchChange}
        /> 
        <CardList monsters={filteredLst} />
      </div>
    );
}

export default App;
