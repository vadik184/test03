// import React from 'react';

// export const Modal = () => {
//   return (
//     <div class="overlay">
//       <div class="modal">
//         <img src="" alt="" />
//       </div>
//     </div>
//   );
// };
import { Component } from 'react';
import { StyledModal, StyledImg } from 'components/Modal/MadalStyled';

export class Modal extends Component {
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleClick = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <StyledModal onClick={this.handleClick}>
        <StyledImg src={this.props.url} alt="modal_img" />
      </StyledModal>
    );
  }
}
