<template>
    <v-container>
        <div class="blog-container">
            <div class="d-flex justify-space-between">
                <div class="align-self-start">
                    <router-link :to="{name: 'SinglePost', params: {id: id}}">
                    <v-btn
                            color="orange-lighten-2"
                            variant="text"
                        >
                            Back to Post
                        </v-btn>
                    </router-link>
                </div>
                <div class="align-self-start">
                    <router-link :to="{name: 'SinglePost', params: {id: id}}" @click="editPost">
                        <v-btn
                            color="orange-lighten-2"
                            variant="text"
                        >
                            Save
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
                    <v-text-field label="Title" v-model="postEdited.title"></v-text-field>
                </div>

                <div class="body">
                    <v-textarea label="Body" v-model="postEdited.body"></v-textarea>
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
    data() {
        return {
            postEdited: {
                type: Object,
                required: true
            }
        }
    },
    setup() {
        const route = useRoute();
        const id = Number(route.params.id)

        return {
            id,
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
    },
    mounted() {
        this.postEdited = {...this.post}
    },
    watch: {
        post() {
            this.postEdited = {...this.post}
        }
    },

    methods: {
        editPost() {
            this.$store.dispatch('posts/editPost', this.postEdited)
        }
    }
}
</script>

<style scoped>

</style>