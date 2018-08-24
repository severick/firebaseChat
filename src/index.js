// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueFire)
const config = {
  apiKey: "AIzaSyDxHTRFwCRBHI7xbAIYknI800VxbKogeDY",
  authDomain: "chat-room-eb770.firebaseapp.com",
  databaseURL: "https://chat-room-eb770.firebaseio.com",
  projectId: "chat-room-eb770",
  storageBucket: "chat-room-eb770.appspot.com",
  messagingSenderId: "594432977686"
}
firebase.initializeApp(config)

const database = firebase.database()
database.ref('messages').on('value', snapshot => console.log(snapshot.val()))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
