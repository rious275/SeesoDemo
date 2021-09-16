import { atom } from 'recoil';

export const showListState = atom({
  key: 'showListState',
  default: { action: '', status: false },
});
