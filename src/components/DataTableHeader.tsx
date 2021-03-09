import React from 'react';

interface DataTableHeaderProps {
  data: Array<string>;
}

interface JSXElement extends React.ReactElement<any> { }
type Element = JSXElement | null;

export class DataTableHeader extends React.Component<DataTableHeaderProps> {
  getHeaders() {
    return this.props.data.map((item: string) => {
      return (<th key={item}>{item}</th>);
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

export default DataTableHeader;
