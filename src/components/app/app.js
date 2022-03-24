import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [
          {name: 'Adel M.', salary: 5000, increase: false, id: 1},
          {name: 'Boris S.', salary: 7000, increase: false, id: 2},
          {name: 'Vladimir S.', salary: 4000, increase: true, id: 3},
        ]
    }
  }
  
  deleteItem = (id) => {
    this.setState(({ data }) => {
      // equivalent
      // const index = data.findIndex(elem => elem.id === id);

      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);

      // const newArr = [...before, ...after];
      return {
        data: data.filter(elem => elem.id !== id)
      }
    })
  }

  render() {
    return(
      <div className="app">
        <AppInfo/>
  
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
  
        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem} />
        <EmployeesAddForm/>
      </div>
    );
  }
}

export default App;
