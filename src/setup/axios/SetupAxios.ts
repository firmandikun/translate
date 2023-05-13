import {Storage} from '../../utils/LocalStorage';
import {StorageKey} from '../../config/storage';

export default function setupAxios(axios: any) {
  axios.interceptors.request.use(
    (config: any) => {
      const token = Storage.getItem(StorageKey.ACCESS_TOKEN);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error: any) => {
      return Promise.reject(error);
    },
  );

  axios.interceptors.response.use(
    (res: any) => res,
    (err: any) => {
      return Promise.reject(err);
    },
  );
}
