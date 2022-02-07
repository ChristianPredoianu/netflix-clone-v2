import { createStore } from 'vuex';

import createPersistedState from 'vuex-persistedstate';

export default createStore({
  modules: {},
  plugins: [createPersistedState()],
});
