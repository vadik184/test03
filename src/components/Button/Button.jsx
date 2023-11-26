// import React from 'react';
// import { ButtonStyled } from 'components/Button/ButtonStyle';

// export const LoadMoreBtn = () => {
//   return <ButtonStyled type="button">Load more</ButtonStyled>;
// };
import React from 'react';
import { ButtonStyled, BtnContainer } from 'components/Button/ButtonStyle';

export const Button = ({ onClick, children }) => {
  return (
    <BtnContainer>
      <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
    </BtnContainer>
  );
};
