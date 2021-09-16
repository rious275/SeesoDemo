import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router-dom';

import { BROCHURE_URL } from '../Variable';

const Start = () => {
  const history = useHistory();

  const handleNext = () => {
    history.push('/setting');
  };

  return (
    <Container>
      <WebcamIcon alt="" src="images/icon_webcam.svg" dragggable="true" />
      <GuideText>상단의 아이콘을 드래그해서 웹캠 위치를 알려주세요.</GuideText>
      <NextBtn onClick={handleNext}>NEXT</NextBtn>
      <BrochureLink href={BROCHURE_URL} target="_blank">
        좀 더 자세한 설명히 필요하세요?
      </BrochureLink>
    </Container>
  );
};

export default Start;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

const WebcamIcon = styled.img`
  position: absolute;
  top: 10px;
  width: 50px;
`;

const GuideText = styled.p`
  margin-bottom: 60px;
`;

const NextBtn = styled.button`
  display: flex;
  margin-bottom: 20px;
  padding: 16px 38px;

  border-style: none;
  border-radius: 28px;
  color: #fff;
  background-color: #4e5fbb;
  font-size: 18px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
`;

const BrochureLink = styled.a`
  &:visited {
    color: #000;
  }
`;
