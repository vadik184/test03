import React from 'react';
import {
  StyledHeader,
  StyledForm,
  StyledformBtn,
  ButtonLable,
  StyledInput,
} from 'components/Searchbar/SearchbarStyled';
export const Searchbar = () => {
  return (
    <StyledHeader>
      <StyledForm>
        <StyledformBtn type="submit">
          <ButtonLable>Search</ButtonLable>
        </StyledformBtn>

        <StyledInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </StyledForm>
    </StyledHeader>
  );
};
