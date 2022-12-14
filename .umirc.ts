import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/home/index' },
    { path: '/testState', component: '@/pages/testState/index' },
  ],
  fastRefresh: {},
  publicPath: './',
});
