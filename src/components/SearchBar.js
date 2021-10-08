import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = e => {
      this.setState({term: e.target.value});

  };

  onSearchSubmit = e => {
      e.preventDefault();

      // tells parent component what the current search term is
      this.props.onSearchSubmit(this.state.term);

  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onSearchSubmit} className="ui form">
          <div className="field">
            <label>Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
