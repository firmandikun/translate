import localConfig from './localConfig.js';
// import Config from 'react-native-config';

const config = {
  DEBUG: localConfig.DEBUG,
  developmentENV: localConfig.developmentENV || 'stg',
  apiURL: 'https://hootdev.my.id',

  // STAGING CONFIG
  stgApiURL: 'https://hootdev.my.id',

  // Version Stg
  // versionApp: Config.APP_VERSION_SEMANTIC,
};

export default config;
