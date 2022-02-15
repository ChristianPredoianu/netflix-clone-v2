import { createStore } from 'vuex';
import forms from '@/store/modules/forms';

import createPersistedState from 'vuex-persistedstate';

export default createStore({
  modules: {
    forms,
  },
  plugins: [createPersistedState()],
});
