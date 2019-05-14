import React from 'react';
import { Unsplash } from '../interfaces/unsplash';

export class ImageList extends React.Component<{images: Unsplash.Image[]}> {

  render() {
    const images = this.props.images.map(image => {
      return <img
        src={image.urls.small}
        alt={image.alt_description}
        key={image.id}
      />
    });

    return <div>{images}</div>
  }

}
