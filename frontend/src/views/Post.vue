<template>
<v-container class="pa-8">
    <v-row class="pa-8">
        <v-col class="pa-7">{{post.street}}</v-col>
    </v-row>

</v-container>
</template>

<script>
import API from '../api'
export default {
    data(){
        return{
            posts: [],
        }
    },
    async created(){
        const response = await API.getPostByID(this.$route.params.id);
        this.post = response;
    }
}
</script>

<style>

</style>