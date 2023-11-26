import React, { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from 'components/ImageGallery/ImageGalleryStyle';
export class ImageGallery extends Component {
  state = {};
  render() {
    return (
      <GalleryList>
        <ImageGalleryItem />
      </GalleryList>
    );
  }
}
