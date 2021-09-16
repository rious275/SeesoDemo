import React from 'react';
import styled from 'styled-components';

import { useSetRecoilState } from 'recoil';

import { showListState } from '../../atom';

const MonitorSizeList = props => {
  const setShowList = useSetRecoilState(showListState);
  const { inchData } = props;

  const closeList = () => {
    setShowList({ status: false });
  };

  const selectInchData = inch => {
    console.log('data', inch);
  };

  return (
    <DropBoxList onClick={closeList}>
      {inchData &&
        inchData.map((inch, idx) => {
          return (
            <SelectInch onClick={() => selectInchData(inch)}>
              {inch} inch
            </SelectInch>
          );
        })}
    </DropBoxList>
  );
};

export default MonitorSizeList;

const DropBoxList = styled.div`
  position: absolute;
  top: 26%;
  left: 10%;

  width: 30%;

  overflow-y: auto;
  overflow-x: hidden;
  max-height: 240px;

  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
`;

const SelectInch = styled.button`
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
