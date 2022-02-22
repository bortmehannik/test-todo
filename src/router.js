import { createRouter, createWebHistory } from 'vue-router';
import Tasks from './views/TasksPage';
import CreateTask from './views/NewPage';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Tasks },
        { path: '/create', component: CreateTask },
    ],
    linkActiveClass: 'active'
});