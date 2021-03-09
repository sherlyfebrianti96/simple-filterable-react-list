import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import DataTable from './components/DataTable';

export class App extends React.Component {
  state = {
    tableData: [
      {name: 'Tom Jackson', phone: '555-444-333', email: 'tom@gmail.com'},
      {name: 'Mike James', phone: '555-777-888', email: 'mikejames@gmail.com'},
      {name: 'Janet Larson', phone: '555-222-111', email: 'janetlarson@gmail.com'},
      {name: 'Clark Thompson', phone: '555-444-333', email: 'clark123@gmail.com'},
      {name: 'Emma Page', phone: '555-444-333', email: 'emma1page@gmail.com'},
    ]
  };

  render() {
    return (
      <div id="container">
        <div className="row">
          <div className="col-8 offset-2">
            <h1>Filterable React List</h1>
            <SearchBar />
            <DataTable data={this.state.tableData} />
          </div>
        </div>
      </div>
    );
  };
}

export default App;
