import React, { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { useDispatch } from 'react-redux';
import { Button } from '../../shared/Button';
import { fetchCity } from '../../../store/effects/city';

const StyledSearch = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
`

export const StyledInput = styled.input`
  border: 1px solid ${({ theme }) => theme.color.white};
  background-color: transparent;
  color: ${({ theme }) => theme.color.white};
  padding: 12px;
  font-size: 16px;
  flex: 1;
  line-height: 19px;
  box-shadow: none;
  position: relative;
  outline: none;
`

const StyledButtonWrap = styled.div`
  margin-left: 10px;
`

export const Search = (): JSX.Element => {
  const themeContext = useContext(ThemeContext);
  const [searchValue, setSearchValue] = useState('')
  const dispatch = useDispatch();
  const search = () => dispatch(fetchCity({ query: searchValue }))

  return (
    <StyledSearch>
      <StyledInput
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value)}
        onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) => event.key === 'Enter' && search()}
        placeholder="search location"
      />

      <StyledButtonWrap>
        <Button
          handle={search}
          label="Search"
          color={themeContext.color.blue}
        />
      </StyledButtonWrap>
    </StyledSearch>
  )
}
