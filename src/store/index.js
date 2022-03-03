import { createStore } from 'vuex';
import auth from '@/store/modules/auth';
import theMovieDB from '@/store/modules/theMovieDB';
import userProfiles from './modules/userProfiles';
import userData from './modules/userData';

import createPersistedState from 'vuex-persistedstate';

export default createStore({
  modules: {
    auth,
    theMovieDB,
    userData,
    userProfiles,
  },
  plugins: [createPersistedState()],
});
