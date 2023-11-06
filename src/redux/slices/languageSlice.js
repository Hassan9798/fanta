import {createSlice} from '@reduxjs/toolkit';
import {allowedLanguages} from '../../languageSupport/allowedLanguages';

const initialState = {
  language: allowedLanguages.en,
  direction: 'ltr',
};

const languageSlice = createSlice({
  name: 'LanguageSupport',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      const {language, direction} = action.payload;
      state.language = language;
      state.direction = direction;
    },
  },
});

export const {setLanguage} = languageSlice.actions;
export default languageSlice.reducer;
