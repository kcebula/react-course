import React, { SyntheticEvent } from 'react';
import { SearchBar } from './SearchBar';
import { unsplash } from '../api/unsplash';
import { ImageList } from './ImageList';


export class App extends React.Component {

  state = {
    query: '',
    images: []
  };

  async onSearchSubmit(event: SyntheticEvent, query: string) {
    event.preventDefault();

    if (this.state.query === query) {
      return;
    }

    unsplash.get('/search/photos',{
      params: {
        query: query
      }
    }).then(response => {
      this.setState({ images: response.data.results });
    });
  };

  render() {
    return <div className="ui container">
      <SearchBar onSearchSubmit={(event: SyntheticEvent, query: string) => this.onSearchSubmit(event, query)}/>
      <p>Got {this.state.images.length} images</p>
      <ImageList images={this.state.images} />
    </div>
  }
}
