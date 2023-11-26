// import React, { Component } from 'react';
// import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
// import { GalleryList } from 'components/ImageGallery/ImageGalleryStyle';
// export class ImageGallery extends Component {
//   state = {};

//   render() {
//     return (
//       <GalleryList>
//         <ImageGalleryItem />
//       </GalleryList>
//     );
//   }
// }
import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from 'components/ImageGallery/ImageGalleryStyle';
export const ImageGallery = ({ images, openModal }) => {
  return (
    <GalleryList>
      {images.map(image => (
        <ImageGalleryItem image={image} key={image.id} onClick={openModal} />
      ))}
    </GalleryList>
  );
};
