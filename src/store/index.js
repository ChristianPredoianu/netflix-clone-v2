import { createStore } from 'vuex';
import theMovieDB from '@/store/modules/theMovieDB';
import userProfiles from './modules/userProfiles';
import userData from './modules/userData';

import createPersistedState from 'vuex-persistedstate';

export default createStore({
  modules: {
    theMovieDB,
    userData,
    userProfiles,
  },
  plugins: [createPersistedState()],
});
