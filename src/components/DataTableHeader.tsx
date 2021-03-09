import React from 'react';

interface DataTableProps {
  data: Array<string>;
}

interface JSXElement extends React.ReactElement<any> { }
type Element = JSXElement | null;

export class DataTable extends React.Component<DataTableProps> {
  getHeaders() {
    return this.props.data.map((item: string) => {
      return (<th>{item}</th>);
    })
  }

  render() {
    return (
      <tr className="text-capitalize">
        {this.getHeaders()}
      </tr>
    );
  };
}

export default DataTable;
