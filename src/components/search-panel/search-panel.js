import './search-panel.css';

const SearchPanel = () => {
  return (
    <input
      type="text"
      // bootstrap
      className="form-control searh-input"
      placeholder="Найти сотрудника"
    />
  );
}

export default SearchPanel;
