import React from 'react';

interface SearchBarProps {
  keyword: string;
  keywordChanged: (newKeyword: string) => void;
  doFilter: () => void;
}

export class SearchBar extends React.Component<SearchBarProps> {
  handleSearchBarChanged(evt: React.ChangeEvent<HTMLInputElement>) {
    this.props.keywordChanged(evt.target.value);
    this.props.doFilter.bind(this);
  }

  render() {
    return (
      <form>
        <input
          className="form-control"
          type="text"
          placeholder="Search..."
          value={this.props.keyword}
          onChange={this.handleSearchBarChanged.bind(this)}
        />
      </form>
    );
  };
}

export default SearchBar;
