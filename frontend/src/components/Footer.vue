<template>
  <v-container class="pa-8" fluid>
    <v-card shaped>
      <v-list color="#f8f7f2" class="teste">
        <v-list-item v-for="icon of icons" :key="icon.title" link :to="icon.to">
          <v-list-item-icon>
            <v-icon>{{ icon.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>{{ icon.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        {
          icon: "mdi-email-edit-outline",
          title: "ajudemeraki@gmail.com",
        },
        { icon: "mdi-phone-classic", title: "(47) 0000-0000" },
        {
          icon: "mdi-facebook",
          title: "Meraki Voluntariado",
          to: "https://m.facebook.com/merakivoluntariadoo/",
        },
        {
          icon: "mdi-instagram",
          title: "@merakivoluntariado",
          to: "https://www.instagram.com/merakivoluntariado/",
        },
      ],
    };
  },
};
</script>

<style>
</style>