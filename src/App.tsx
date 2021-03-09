import React from 'react';
import './App.css';

export class App extends React.Component {
  render() {
    return (
      <div id="container">
        <div className="row">
          <div className="col-8 offset-2">
            <h1>Filterable React List</h1>
            <form>
              <input
                className="form-control"
                type="text"
                placeholder="Search..."
              />
            </form>
            <table className='table'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tom Jackson</td>
                  <td>555-444-333</td>
                  <td>tom@gmail.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
}

export default App;
