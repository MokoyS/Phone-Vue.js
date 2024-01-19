<!-- src/views/NewContactView.vue -->
<template>
    <div class="new">
      <h2>Ajouter un nouveau contact</h2>
      <form @submit.prevent="ajouterContact">
        <label for="nom">Nom :</label>
        <input type="text" id="nom" v-model="nouveauContact.nom" required />
  
        <label for="numero">Numéro :</label>
        <input type="text" id="numero" v-model="nouveauContact.numero" required />
  
        <button type="submit">Ajouter</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nouveauContact: {
          nom: '',
          numero: '',
        },
      };
    },
    methods: {
      ajouterContact() {
        const contacts = {
            numero: this.nouveauContact.numero,
            nom : this.nouveauContact.nom,
        };
        this.$router.push({
            name: 'contact',
            query: {
                number: contacts.numero,
                nom: contacts.nom,
            },
        });
        console.log(contacts);
      },
    },
  };
  </script>
  
  <style scoped>
    .new {
        color: white;
        display: flex;
        flex-direction: column;
        width: 380px;
        margin: 100px auto;
        justify-content: center;
        align-items: center;
        gap: 40px;
        height: 650px;
        border: 1px solid white;
        border-radius: 20px;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
  </style>
  