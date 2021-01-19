import React from 'react';
import styled from 'styled-components';
import { Highlight, HighlightType } from '../model/highlight';
import { Sidebar } from './Sidebar';
import { Slider } from './shared/Slider';

interface HighlightCardProps {
  highlight: Highlight;
}

interface StyledCardProps {
  default: boolean;
}

const StyledCard = styled.div<StyledCardProps>`
  height: ${(props) => props.default ? '160px' : '204px'};
  width: 370px;
  background: ${({ theme }) => theme.bg.card};
  margin-top: 30px;
  padding: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledTitle = styled.div`
  font-size: 16px;
`

const StyledValue = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 64px;
  line-height: 75px;
`

const StyledSubValue = styled.div`
`

export const HighlightCard = ({ highlight }: HighlightCardProps): JSX.Element => {
  return (
    <StyledCard default={highlight.type === HighlightType.default}>
      <StyledTitle>{highlight.label}</StyledTitle>

      <StyledValue>{highlight.value}</StyledValue>

      {highlight.subValue && <StyledSubValue>{highlight.subValue}</StyledSubValue>}

      {highlight.type === HighlightType.slider && <Slider percent={highlight.value} />}
    </StyledCard>
  )
}
