import React from 'react';
import {PhoneListType} from './../interface/PhoneListType';

interface DataTableItemProps {
  data: PhoneListType;
}

export class DataTableItem extends React.Component<DataTableItemProps> {
  render() {
    return (
      <tr>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.phone}</td>
        <td>{this.props.data.email}</td>
      </tr>
    );
  };
}

export default DataTableItem;
