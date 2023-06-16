import {createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
import ContactsView from './views/ContactsView.vue';
import SingleProjectView from './views/SingleProjectView.vue';
import NotFound from './views/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [

        //all routes here
        {
            'path' : '/',
            'name' : 'home',
            'component' : HomeView
        },

        {
            'path' : '/blog/:slug',
            'name' : 'single-project',
            'component' : SingleProjectView
        },

        {
            'path' : '/about',
            'name' : 'about',
            'component' : AboutView
        },

        {
            'path' : '/contacts',
            'name' : 'contacts',
            'component' : ContactsView
        },
        {
            path: "/:pathMatch(.*)*",
             name: "NotFound",
              component: NotFound
        }

    ]
})

export {router};