import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  handle: () => void;
  label: string;
}

const StyledButton = styled.button`
  height: 40px;
  padding: 12px 18px;
  background: ${({ theme }) => theme.color.gray_3};
  color: ${({ theme }) => theme.color.white};;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`

export const Button = ({ label, handle }: ButtonProps): JSX.Element => {
  return (
    <StyledButton onClick={handle}>{label}</StyledButton>
  )
}
