import { createWebHistory, createRouter } from "vue-router";
import Posts from "../components/Posts.vue";
import SinglePost from "../components/SinglePost.vue";
import EditPost from "../components/EditPost.vue";

const routes = [
    // {
    //     path: "/",
    //     name: "HelloWorld",
    //     component: HelloWorld,
    // },
    {
        path: "/",
        name: "Home",
        component: Posts,
    },
    {
        path: "/posts/:id",
        name: "SinglePost",
        component: SinglePost,
    },
    {
        path: "/posts/:id/edit",
        name: "EditPost",
        component: EditPost,
        props: true,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;