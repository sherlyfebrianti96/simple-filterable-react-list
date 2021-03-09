import React from 'react';
import DataTableHeader from './DataTableHeader';
import DataTableItem from './DataTableItem';
import {PhoneListType} from './../interface/PhoneListType';

interface DataTableProps {
  data: Array<PhoneListType>;
}

export class DataTable extends React.Component<DataTableProps> {
  render() {
    const headers = Object.keys(this.props.data[0]);

    const items = this.props.data.map((item: PhoneListType, index: number) => {
      return (
        <DataTableItem key={'item' + index} data={item} />
      );
    });

    return (
      <table className='table'>
        <thead>
          <DataTableHeader data={headers} />
        </thead>
        <tbody>
          {items}
        </tbody>
      </table>
    );
  };
}

export default DataTable;
