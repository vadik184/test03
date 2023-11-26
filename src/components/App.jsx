import React, { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { StyledApp } from 'components/AppStyle';
import { LoadMoreBtn } from 'components/Button/Button';
import { findImages } from 'components/Api/pixabay';

export class App extends Component {
  state = {
    image: [],
    query: '',
    page: 1,
    isLoadMore: false,
    isLoading: false,
    url: '',
    error: '',
  };

  componentDidMount() {
    // fetch().then().then().catch()
    this.handleQuery();
  }
  handleQuery = async () => {
    const data = await findImages();
    console.log('data :>>', data);
  };
  componentDidUpdate(_, prevState) {
    console.log(prevState);
  }

  render() {
    return (
      <StyledApp>
        <Searchbar onChange={this.handleChange} />
        <ImageGallery />
        <LoadMoreBtn />
      </StyledApp>
    );
  }
}
