import React from 'react';
import styled from 'styled-components';

interface SliderProps {
  percent: string;
}

interface StyledProgressProps {
  percent: string;
}

const StyledSlider = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const StyledPositions = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`

const StyledText = styled.div`
  line-height: 14px;
  color:  ${(props) => props.theme.color.gray_4};
`

const StyledProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  border-radius: 80px;
  margin: 8px 0;
  background: ${({ theme }) => theme.color.white};
`

const StyledProgress = styled.div<StyledProgressProps>`
  position: absolute;
  width: ${({ percent }) => percent};
  height: 8px;
  border-radius: 80px;
  background: ${({ theme }) => theme.color.yellow};
`

const StyledPercent = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

export const Slider = ({ percent }: SliderProps): JSX.Element => {
  return (
    <StyledSlider>
      <StyledPositions>
        <StyledText>0</StyledText>
        <StyledText>50</StyledText>
        <StyledText>100</StyledText>
      </StyledPositions>

      <StyledProgressBar>
        <StyledProgress percent={percent} />
      </StyledProgressBar>

      <StyledPercent>
        <StyledText>%</StyledText>
      </StyledPercent>
    </StyledSlider>
  )
}
