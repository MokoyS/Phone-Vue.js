<script>
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import NewContactView from './views/NewContactView.vue';
import ContactView from './views/ContactView.vue';

export default {
  components: {
    NewContactView,
    ContactView,
  },
  data() {
    return {
      // Utiliser un tableau partagé entre les composants
      contacts: [],
    };
  },
  methods: {
    ajouterContact(nouveauContact) {
      // Ajouter le contact à la liste des contacts
      this.contacts.push(nouveauContact);
    },
  },
};
</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <RouterView />
  
</template>

<style scoped>

</style>
