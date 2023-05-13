/* eslint-disable react-hooks/exhaustive-deps */
import {request} from '../config/request';
import {actionType, initState} from '../config/state';
import {requestReducer} from '../helpers/dataReducer';
import {useCallback, useReducer} from 'react';
import {LocalStorage} from '../utils/LocalStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StorageKey} from '../config/storage';
import {useNavigation} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';
import useApplicationContext from '../context/Context';

export const useRequest = (init = {}) => {
  const storage = new LocalStorage();

  const {setAccessToken} = useApplicationContext();
  const navigation = useNavigation<any>();
  const [state, dispatch] = useReducer(requestReducer, {...initState, ...init});

  const getRequest = useCallback((url: string, config: any = {}) => {
    if (config.isAuth) {
      AsyncStorage.getItem(StorageKey.ACCESS_TOKEN).then((value: any) => {
        if (value) {
          const Authorization = `Bearer ${JSON.parse(value)}`;
          config.headers = {Authorization, ...config.headers};
        }

        const req = {...config, url};

        dispatch({type: actionType.LOADING});
        return request(req)
          .then((res: any) => {
            if (res.data.maintenance) {
              // history.push('/maintenance', { data: res.data.data_maintenance })
              return;
            }

            dispatch({type: actionType.SUCCESS, data: res.data});
            return res;
          })
          .catch((err: any) => {
            const errorMessage = err.response?.data.message || err.message || 'unknown';

            if (err.response?.status === actionType.UNAUTHORIZED) {
              AsyncStorage.removeItem(StorageKey.ACCESS_TOKEN);
              AsyncStorage.removeItem(StorageKey.IS_LOGIN);
              setAccessToken('');
              navigation.dispatch(
                CommonActions.navigate({
                  name: 'Home',
                }),
              );
            }

            // if (status === actionType.INTERNAL_SERVER_ERROR) {
            //   openModalError()
            // }

            dispatch({type: err.response?.status || actionType.ERROR, error: errorMessage});
            console.log('error fetch', err);
          });
      });
    } else {
      const req = {...config, url};

      dispatch({type: actionType.LOADING});
      return request(req)
        .then((res: any) => {
          if (res.data.maintenance) {
            // history.push('/maintenance', { data: res.data.data_maintenance })
            return;
          }

          dispatch({type: actionType.SUCCESS, data: res.data});
          return res;
        })
        .catch((err: any) => {
          const errorMessage = err.response?.data.message || err.message || 'unknown';

          if (err.response?.status === actionType.UNAUTHORIZED) {
            storage.clear();
          }

          // if (status === actionType.INTERNAL_SERVER_ERROR) {
          //   openModalError()
          // }

          dispatch({type: err.response?.status || actionType.ERROR, error: errorMessage});
          console.log('error fetch', err);
        });
    }
  }, []);

  return [state, {getRequest}];
};

export const useGet = (init?: any) => {
  const [state, event] = useRequest(init);

  const getRequest = (url: string, params: any, config = {}) => event.getRequest(url, {...config, params, method: 'get'});

  return [state, {getRequest}];
};

export const usePost = (init?: any) => {
  const [state, event] = useRequest(init);

  const getRequest = (url: string, data = {}, config = {}) => event.getRequest(url, {...config, data, method: 'post'});

  return [state, {getRequest}];
};

export const usePut = (init?: any) => {
  const [state, event] = usePost(init);

  const getRequest = (url: string, data: any = {}, config = {}) => {
    data['_method'] = 'PUT';
    return event.getRequest(url, data, config);
  };

  return [state, {getRequest}];
};

export const usePatch = (init?: any) => {
  const [state, event] = usePost(init);

  const getRequest = (url: string, data: any = {}, config = {}) => {
    data['_method'] = 'PATCH';
    return event.getRequest(url, data, config);
  };

  return [state, {getRequest}];
};

export const useDelete = (init?: any) => {
  const [state, event] = usePost(init);

  const getRequest = (url: string, data: any = {}, config = {}) => {
    data['_method'] = 'DELETE';
    return event.getRequest(url, data, config);
  };

  return [state, {getRequest}];
};

export default useRequest;
