import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router/index';
import store from '@/store';
import firebase from 'firebase/compat/app';
import '@/plugins/firebase';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import addIcons from '@/font-awesome-icons/icons';
import '@/sass/main.scss';

addIcons();

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(router)
      .use(store)
      .component('font-awesome-icon', FontAwesomeIcon)
      .mount('#app');
  }
});
