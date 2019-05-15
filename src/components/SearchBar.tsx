import React, { ChangeEvent, FormEvent } from 'react';

export class SearchBar extends React.Component<{onSearchSubmit: Function}> {
  state = {
    query: ''
  };

  onFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    // add callback
    this.props.onSearchSubmit(this.state.query);
  };

  onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({query: event.target.value})
  };

  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video search</label>
            <input type="text"
                   name="query"
                   value={this.state.query}
                   onChange={this.onInputChange}
                   placeholder="Video search" />
          </div>
        </form>
      </div>
  );
  }
  }
