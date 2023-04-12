<template>
    <v-container>
        <div class="blog-container">
            <div class="d-flex justify-space-between">
                <div class="align-self-start">
                    <router-link :to="{name: 'Home'}">
                        <v-btn
                            color="orange-lighten-2"
                            variant="text"
                        >
                            Return to Home
                        </v-btn>
                    </router-link>
                </div>

                <div class="align-self-end" v-if="post">
                    <router-link :to="{name: 'EditPost', params: {id: post.id}}">
                        <v-btn
                            color="orange-lighten-2"
                            variant="text"
                        >
                            Edit Post
                        </v-btn>
                    </router-link>
                </div>
            </div>

            <template v-if="post">
                <div class="image">
                    <v-img
                        src="https://via.placeholder.com/1000x200"
                        height="200px"
                        cover
                    ></v-img>
                </div>

                <div class="title">
                    <h1>{{post.title}}</h1>
                </div>

                <div class="body">
                    <p>{{post.body}}</p>
                </div>
            </template>
        </div>
    </v-container>
</template>

<style>
.blog-container {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    margin-top: 20px;
}

.image {
    margin-top: 20px;
}

.title {
    margin-top: 20px;
}

.body {
    margin-top: 20px;
}
</style>

<script>
import {useRoute} from "vue-router";
import {mapGetters} from "vuex";

export default {
    name: "SinglePost",
    setup() {
        const route = useRoute();
        return {
            id: Number(route.params.id)
        }
    },
    computed: {
        ...mapGetters({
            getSinglePost: 'posts/getSinglePost'
        }),
        post() {
            if (!this.getSinglePost(this.id)) {
                this.$store.dispatch('posts/getPost', this.id)
            }
            return this.getSinglePost(this.id)
        }
    }
}
</script>

<style scoped>

</style>