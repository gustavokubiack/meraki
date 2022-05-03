<template>
  <v-container class="pa-8">
      <h1 class="titulo-contato">Contato</h1>


      <v-list color="#F8f7f2">
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </p>
        <v-list-item v-for="item of items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
          
        </v-list-item>
      </v-list>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      { icon: "mdi-email-edit-outline", title: "merakivvoluntariado@gmail.com", subtitle: "merakivvoluntariado@gmail.com"},
      { icon: "mdi-phone-classic", title: "(47) 0000-0000"},
      { icon: "mdi-facebook", title: "Meraki Voluntariado",to:"https://m.facebook.com/merakivoluntariadoo/" },
      { icon: "mdi-instagram", title: "@merakivoluntariado",to:"https://www.instagram.com/merakivoluntariado/" },
    ],
  }),
};


</script>

<style>
.titulo-contato {
  text-align: center;
  font-family: 'Prata', serif;
  font-size: 40px;
  color: #f8f7f2;
}
.texto-contato{
  color: #f8f7f2;
  font-family: 'Lato', serif;
  font-size: 30px;
  text-align: justify; 
}


</style>