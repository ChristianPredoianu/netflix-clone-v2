import { createStore } from 'vuex';
import theMovieDB from '@/store/modules/theMovieDB';
import userProfiles from '@/store/modules/userProfiles';
import userData from '@/store/modules/userData';
import userMovieList from '@/store/modules/userMovieList';

import createPersistedState from 'vuex-persistedstate';

export default createStore({
  modules: {
    theMovieDB,
    userData,
    userProfiles,
    userMovieList,
  },
  plugins: [createPersistedState()],
});
