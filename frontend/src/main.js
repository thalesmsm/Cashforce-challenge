import { createApp } from 'vue';
import App from './App.vue';
import ProviderInfoComponent from './components/ProviderInfoComponent';
import NfsMainPage from './components/NfsMainPage';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{path: '/', redirect: '/nfs'},
	{path: '/nfs', component: NfsMainPage},
	{path: '/provider/:providerId', component: ProviderInfoComponent},
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

createApp(App).use(router).mount('#app');
