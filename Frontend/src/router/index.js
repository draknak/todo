import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import register from '@/components/Register';
import login from '@/components/Login';
import boards from '@/components/Boards';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld,
    },
    {
      path: '/register',
      name: 'register',
      component: register,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/boards',
      name: 'boards',
      component: boards,
    },
  ],
});
