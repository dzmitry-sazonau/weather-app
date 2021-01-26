import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  handle: () => void;
  label: string;
  color?: string;
}

interface StyledButtonProps {
  color?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  height: 40px;
  padding: 12px 18px;
  background: ${({ theme, color }) => color || theme.color.gray_3};
  color: ${({ theme }) => theme.color.white};;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`

export const Button = ({ label, handle, color }: ButtonProps): JSX.Element => {
  return (
    <StyledButton color={color} onClick={handle}>{label}</StyledButton>
  )
}
