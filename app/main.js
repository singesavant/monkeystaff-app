import Vue from 'nativescript-vue'
import App from './components/App'

import store from './store'
import {TNSFontIcon, fonticon} from 'nativescript-fonticon'


// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')
// Prints Colored logs when --env.production is *NOT* set while building
Vue.config.debug = (TNS_ENV !== 'production')

TNSFontIcon.debug = true
TNSFontIcon.paths = {
    'fab': '@fortawesome/fontawesome-free/css/all.css',
};
TNSFontIcon.loadCss()

Vue.filter('fonticon', fonticon);

new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start()

