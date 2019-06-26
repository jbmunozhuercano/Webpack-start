import sass from '../sass/styles.scss';
import html from '../index.html';

import Vue from 'vue';
import App from '../vue/App.vue';

new Vue({
    el: '#app',
    render: h => h(App)
  })

var a = () => {
    console.log('Babel code is working');
}

a();