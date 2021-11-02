import {createApp} from 'vue'
import App from './App.vue'
import router from './router';
import {store} from './store'
import {IonicVue} from '@ionic/vue';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/core.css';
import BaseLayout from "@/components/BaseLayout";

const firebaseConfig = {
    apiKey: "AIzaSyD-NrbJtbrXAVm-9VF16bNzQXkSzyDUxsk",
    authDomain: "fusiome-23aee.firebaseapp.com",
    projectId: "fusiome-23aee",
    storageBucket: "fusiome-23aee.appspot.com",
    messagingSenderId: "1037195023103",
    appId: "1:1037195023103:web:fb5c6dc6d00c30e279b2ca",
    measurementId: "G-ZMSGEFTHHV"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();


const app = createApp(App)
    .use(IonicVue)
    .use(router)
    .use(store);
app.component('base-layout', BaseLayout)

router.isReady().then(() => {
    app.mount('#app');
});