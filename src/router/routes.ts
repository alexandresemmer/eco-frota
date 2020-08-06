import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [

      { path: 'principal', component: () => import('pages/Principal.vue') },
      { path: 'usuarios', component: () => import('pages/Usuarios.vue') },
      { path: 'veiculos', component: () => import('pages/Veiculos.vue') },
      { path: 'historico', component: () => import('pages/Historicos.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
