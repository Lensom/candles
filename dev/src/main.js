import Vue from 'vue';
import App from './App';
import router from './router';
import { store } from './store';
import Typograf from 'typograf';
import VueValidate from 'vee-validate'
import { dictionary } from './validate';
import Helpers from './tools/Helpers';
import ShareLink from './tools/share';

import VueFullPage from 'vue-fullpage.js';

Vue.use(VueFullPage);

import "./assets/scss/app.scss";

Vue.use(VueValidate, {
    locale: 'ru',
    dictionary: {
        en: dictionary.en,
        ru: dictionary.ru
    }
});


let Tp = new Typograf({ locale: ['ru', 'en-US'] });
Vue.directive('typograph', {
    bind: (el, binding, vnode) => {
        el.innerHTML = Tp.execute(el.innerHTML)
    }
});

Vue.use(ShareLink);


Vue.config.productionTip = false;

new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    data() {
        return {
            isMobile: Helpers.isMobile(),
            isIE: Helpers.isIE(),
            macOs: Helpers.isMac(),
            Helpers: Helpers,
        }
    },
    created() {
        window.vue = this;
        this.$on('onResize', () => {
            this.isMobile = Helpers.isMobile();
        })
    },
    components: { App }
});
