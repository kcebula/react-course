import React from 'react';

export class SearchBar extends React.Component<{onSearchSubmit: Function}> {
  state = {term: ''};

  render() {
    return (
      <div className="ui segment">

        <form className="ui form" onSubmit={e => this.props.onSearchSubmit(e, this.state.term)}>
          <div className="field">
            <label>Image search</label>
            <input type="text"
                   placeholder="Search..."
                   value={this.state.term}
                   onChange={(e) => this.setState({term: e.target.value})}
            />
          </div>
        </form>
      </div>
    );
  }

}
