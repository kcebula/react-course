import React, { DOMElement } from 'react';
import { Unsplash } from '../interfaces/unsplash';

import './ImageCard.css'

const rowHeight = 10;

export class ImageCard extends React.Component<{image: Unsplash.Image}> {

  imageRef = React.createRef<HTMLImageElement>();
  state = {spans: 0};

  componentDidMount(): void {
    if (this.imageRef.current) {
      this.imageRef.current.addEventListener('load', this.setSpans);
    }
  }

  setSpans = () => {
    if (this.imageRef.current) {
      const height = this.imageRef.current.clientHeight;
      const spans = Math.ceil( height / rowHeight + 1);
      this.setState({ spans })
    }
  };

  render(): JSX.Element {
    return <img
      ref={this.imageRef}
      src={this.props.image.urls.small}
      alt={this.props.image.alt_description}
      key={this.props.image.id}
      style={{ gridRowEnd: `span ${this.state.spans}`}}
    />
  }
}
