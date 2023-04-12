<template>
    <div>
        <h1>Home</h1>
        <v-container>
            <v-row dense>
                <v-col
                    v-for="post in getPosts"
                    :key="post.id"
                    :cols="3"
                >
                    <v-card
                        class="mx-auto"
                        max-width="344"
                    >
                        <v-img
                            src="https://via.placeholder.com/344x200"
                            height="200px"
                            cover
                        ></v-img>

                        <v-card-title>
                            {{post.title}}
                        </v-card-title>
                        <v-card-subtitle class="post-subtitle">
                            {{post.body}}
                        </v-card-subtitle>
                        <v-card-actions>
                            <router-link :to="{name: 'SinglePost', params: {id: post.id}}">
                                <v-btn
                                    color="orange-lighten-2"
                                    variant="text"
                                >
                                    View Post
                                </v-btn>
                            </router-link>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style>
    .post-subtitle {
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>

<script>
import {mapGetters} from "vuex";

export default {
    name: "Home",
    computed: {
        ...mapGetters({
            getPosts: 'posts/getPosts'
        })
    },
    beforeCreate() {
        this.$store.dispatch('posts/getData')
    }
}
</script>

<style scoped>

</style>