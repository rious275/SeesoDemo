import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { useRecoilState } from 'recoil';

import MonitorSizeList from './DropBoxList/MonitorSizeList';
import DistanceToFaceList from './DropBoxList/DistanceToFaceList';
import { showListState } from '../atom';

const Setting = () => {
  const history = useHistory();
  const [showList, setShowList] = useRecoilState(showListState);
  const [settingData, setSettingData] = useState();

  const { action, status } = showList;

  // 세팅 값 목데이터 활용
  useEffect(() => {
    fetch('data/settingData.json')
      .then(res => res.json())
      .then(data => {
        setSettingData(data);
      });
  }, []);

  const handleStart = () => {
    history.push('/demo');
  };

  return (
    <Parent>
      <SettingContainer>
        {action === 'MonitorSize' && status === true && (
          <MonitorSizeList inchData={settingData.inchData} />
        )}
        <MonitorDropMenu
          onClick={() => setShowList({ action: 'MonitorSize', status: true })}
        >
          Select Monitor Size
        </MonitorDropMenu>
        {action === 'DistancetoFace' && status === true && (
          <DistanceToFaceList centiData={settingData.centiData} />
        )}
        <DistanceDropMenu
          onClick={() =>
            setShowList({ action: 'DistancetoFace', status: true })
          }
        >
          Select Distance to Face
        </DistanceDropMenu>
      </SettingContainer>
      <BtnContainer>
        <StartBtn onClick={handleStart}>Start</StartBtn>
        <CalibrationBtn>Simple Calibration</CalibrationBtn>
      </BtnContainer>
    </Parent>
  );
};

export default Setting;

const Parent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

const SettingContainer = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;
  margin: 0 150px 80px;
`;

const MonitorDropMenu = styled.button`
  width: 30%;
  height: 50px;
  padding: 20px;

  border-style: none;
  border-bottom: 1px solid #000;
  background-color: #e8ebf6;
  text-align: left;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    cursor: pointer;
  }
`;

const DistanceDropMenu = styled(MonitorDropMenu)``;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StartBtn = styled.button`
  margin-right: 40px;
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

const CalibrationBtn = styled(StartBtn)`
  opacity: 0.3;
`;
