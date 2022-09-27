<template>
  <v-container class="pa-8">
    <v-row class="space" align="center">
      <v-col
        col="12"
        xs="12"
        sm="4"
        class="pa-3"
        v-for="post in posts"
        :key="post._id"
      >
        <v-card class="mx-auto" color="#f8f7f2" max-width="400" link>
          <v-img
            class="white--text align-end"
            height="200px"
            :src="`/${post.image}`"
          ></v-img>
          <v-card-text class="text--primary">
            <h3>{{ post.title }}</h3>

            <p class="text-justify">
              {{ post.description.substring(0, 100) + "..." }}
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="#050a30"
              dark
              :to="{ name: 'post', params: { id: post._id } }"
            >
              Detalhes
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import admin from "@/services/returnPost.js";
export default {
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    this.posts = await admin.environment();
  },
};
</script>

<style></style>
