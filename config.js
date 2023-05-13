import localConfig from './localConfig.js';
import Config from 'react-native-config';

const config = {
  DEBUG: localConfig.DEBUG,
  developmentENV: localConfig.developmentENV || 'stg',
  apiURL: 'https://localhost.com/',

  // STAGING CONFIG
  stgApiURL: 'https://staging-api-casion.belum.live/user/api/v1',

  // Version Stg
  versionApp: Config.APP_VERSION_SEMANTIC,
};

export default config;
