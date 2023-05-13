import config from '../../config';

const API = config.developmentENV === 'stg' ? config.stgApiURL : config.apiURL;

export const URL = {
  LOGIN: `${API}/login`,
};
