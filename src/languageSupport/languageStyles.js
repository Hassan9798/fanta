import {store} from '../redux/store';

const direction = store.getState().languageSupport.direction;
export const languageStyles = {
  flexRow: direction === 'ltr' ? 'row' : 'row-reverse',
};
