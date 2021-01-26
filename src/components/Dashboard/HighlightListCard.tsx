import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getActiveWeather } from '../../store/selectors/weather';
import useHighlight from '../../hooks/useHighlight';
import { Highlight } from '../../model/highlight';
import { HighlightCard } from './HighlightCard';

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`

const StyledListCard = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto; 
  column-gap: 25px;
  row-gap: 25px;
  margin-top: 25px;
`;

const StyledTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
`

export default function HighlightListCard(): JSX.Element {
  const activeWeather = useSelector(getActiveWeather);
  const highlights = useHighlight(activeWeather);

  return (
    <Wrap>
      <StyledTitle>Today’s Highlights</StyledTitle>
      <StyledListCard>
        {highlights.map((highlight: Highlight) => (
          <HighlightCard key={highlight.value} highlight={highlight} />
        ))}
      </StyledListCard>
    </Wrap>
  )
}
