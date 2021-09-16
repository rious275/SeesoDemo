import React from 'react';
import styled from 'styled-components';

import { useSetRecoilState } from 'recoil';

import { showListState } from '../../atom';

const DistanceToFaceList = props => {
  const setShowList = useSetRecoilState(showListState);
  const { centiData } = props;

  const closeList = () => {
    setShowList({ status: false });
  };

  const selectCmData = data => {
    console.log('data', data);
  };

  return (
    <DropBoxList onClick={closeList}>
      {centiData &&
        centiData.map((centi, idx) => {
          return (
            <SelectCm onClick={() => selectCmData(centi)}>{centi} cm</SelectCm>
          );
        })}
    </DropBoxList>
  );
};

export default DistanceToFaceList;

const DropBoxList = styled.div`
  position: absolute;
  top: 26%;
  right: 10%;

  width: 30%;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 240px;

  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

  z-index: 999;
`;

const SelectCm = styled.button`
  width: 100%;
  height: 54px;

  border-style: none;
  border-bottom: 1px solid #f2f2f2;
  background-color: #fff;

  &:hover {
    cursor: pointer;
    background-color: #e8ebf6;
  }
`;
