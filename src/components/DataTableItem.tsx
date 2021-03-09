import React from 'react';

interface DataTableProps {
  data: Array<any>;
}

export class DataTable extends React.Component<DataTableProps> {
  render() {
    return (
      <tr>
        <td>Tom Jackson</td>
        <td>555-444-333</td>
        <td>tom@gmail.com</td>
      </tr>
    );
  };
}

export default DataTable;
