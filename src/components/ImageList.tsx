import React from 'react';
import { Unsplash } from '../interfaces/unsplash';
import { ImageCard } from './ImageCard';

import './ImageList.css'

export class ImageList extends React.Component<{images: Unsplash.Image[]}> {

  render() {
    const images = this.props.images.map(image => {
      return <ImageCard image={image} key={image.id}/>
    });

    return <div className="image-list">{images}</div>
  }

}
