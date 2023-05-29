import config from '../../config';

const API = config.developmentENV === 'stg' ? config.stgApiURL : config.apiURL;

export const URL = {
  GENERATE_WORD_BANK: `${API}/api/generate`,
  TRANSLATE_WORD: `${API}/api/translate`,
  TRANSLATE_DAY_NAME: `${API}/api/translate/hari`,
  TRANSLATE_MONTH_NAME: `${API}/api/translate/bulan`,
  LIST_LANGUE: `${API}/api/list`,
};
