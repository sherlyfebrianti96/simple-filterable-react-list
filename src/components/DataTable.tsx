import React from 'react';

interface DataTableProps {
  data: Array<any>;
}

export class DataTable extends React.Component<DataTableProps> {
  render() {
    return (
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
    );
  };
}

export default DataTable;
