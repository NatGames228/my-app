import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


import './app.css';

function App() {

  const data = [
    {name: 'Adel M.', salary: 5000, increase: false},
    {name: 'Boris S.', salary: 7000, increase: false},
    {name: 'Vladimir S.', salary: 4000, increase: true},
  ]

  return(
    <div className="app">
      <AppInfo/>

      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>

      <EmployeesList data={data} />
      <EmployeesAddForm/>
    </div>
  );
}

export default App;
