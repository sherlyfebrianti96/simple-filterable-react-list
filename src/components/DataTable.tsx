import React from 'react';
import DataTableHeader from './DataTableHeader';

interface DataTableProps {
  data: Array<PhoneListType>;
}

interface PhoneListType {
  name: string;
  phone: string;
  email: string;
}

export class DataTable extends React.Component<DataTableProps> {
  getHeaders() {
    return Object.keys(this.props.data[0]);
  }

  render() {
    return (
      <table className='table'>
        <thead>
          <DataTableHeader data={this.getHeaders()} />
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
