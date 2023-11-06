import {useSelector} from 'react-redux';
import languageData from './languageData.json';
import {allowedLanguages} from './allowedLanguages';

export const useGetTranslation = () => {
  const language = useSelector(state => state.languageSupport.language);
  return key => {
    const matchedKey = languageData.find(data => data.key === key);
    const notFoundKey = languageData.find(data => data.key === 'NOTFOUND');
    switch (language) {
      case allowedLanguages.en:
        return matchedKey?.en || notFoundKey?.en || '';
      case allowedLanguages.ar:
        return matchedKey?.ar || notFoundKey?.ar || '';
      default:
        return notFoundKey.en || '';
    }
  };
};

export const getTranslatedText = language => {
  return key => {
    const matchedKey = languageData.find(data => data.key === key);
    const notFoundKey = languageData.find(data => data.key === 'NOTFOUND');
    switch (language) {
      case allowedLanguages.en:
        return matchedKey?.en || notFoundKey?.en || '';
      case allowedLanguages.ar:
        return matchedKey?.ar || notFoundKey?.ar || '';
      default:
        return notFoundKey.en || '';
    }
  };
};
