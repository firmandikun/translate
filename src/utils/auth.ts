/* eslint-disable @typescript-eslint/no-shadow */
import {StorageKey} from '../config/storage';
import {LocalStorage} from './LocalStorage';

export const isAuthenticated = () => {
  const storage = new LocalStorage();

  const token: any = storage.getItem(StorageKey.ACCESS_TOKEN);
  return !!token?.token;
};

export const isLogin = () => {
  const storage = new LocalStorage();

  const token: any = storage.getItem(StorageKey.ACCESS_TOKEN);
  const isLogin = storage.getItem(StorageKey.IS_LOGIN);

  return !!token?.token && isLogin;
};
