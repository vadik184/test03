// import React, { Component } from 'react';
// import { GalleryItemstyled } from 'components/ImageGalleryItem/ImageGalleryItemStyle';

// export class ImageGalleryItem extends Component {
//   render() {
//     return (
//       <GalleryItemstyled>
//         <img src="" alt="" />
//       </GalleryItemstyled>
//     );
//   }
// }
import React from 'react';
import {
  GalleryItemstyled,
  GalleryItemImg,
} from 'components/ImageGalleryItem/ImageGalleryItemStyle';

export const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <GalleryItemstyled>
      <GalleryItemImg
        src={image.webformatURL}
        alt={image.tags}
        id={image.id}
        onClick={() => onClick(image.webformatURL)}
      />
    </GalleryItemstyled>
  );
};
