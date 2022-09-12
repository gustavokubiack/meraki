<template>
  <v-container class="pa-8">
    <h1 class="titulo">Entre em contato conosco</h1>
    <div class="texto-quemSomos pt-6">
      <p>
        Um dos maiores princípios do Meraki Voluntariado é atender a todos que
        precisam, o mais rápido possível. Dessa maneira, possuímos os mais
        diversos meios de comunicação e redes sociais, os quais podem ser
        utilizadas tanto pelos que desejam se voluntariar por algum projeto,
        quanto por ONGs e Instituições que querem ter um contato direto com a
        equipe.
      </p>
    </div>
    <Footer />
  </v-container>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Footer,
  },
};
</script>

<style>
.texto-quemSomos {
  color: #f8f7f2;
  font-family: "Lato", sans-serif;
  font-size: 25px;
  text-align: justify;
}
.titulo {
  text-align: center;
  font-size: 40px;
  color: #f8f7f2;
  font-family: "Prata", serif;
}
</style>
