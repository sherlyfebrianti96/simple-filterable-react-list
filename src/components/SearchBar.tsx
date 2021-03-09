import React from 'react';

export class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input
          className="form-control"
          type="text"
          placeholder="Search..."
        />
      </form>
    );
  };
}

export default SearchBar;
