import { createStore } from 'vuex';
import auth from '@/store/modules/auth';
import theMovieDB from '@/store/modules/theMovieDB';

import createPersistedState from 'vuex-persistedstate';

export default createStore({
  modules: {
    auth,
    theMovieDB,
  },
  plugins: [createPersistedState()],
});
