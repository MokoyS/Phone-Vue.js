<!-- src/views/ContactView.vue -->
<template>
    <div class="contacts">
      <h2>Liste des contacts</h2>
      
      <ul>
        <li>
          <strong>{{ $route.query.nom }}</strong> - {{ $route.query.number }}
        </li>
      </ul>
      <router-link to="/newcontact"><i class="fa-solid fa-plus"></i></router-link>
      <router-link to="/clavier"><i class="fa-solid fa-phone"></i></router-link>
    </div>
  </template>
  
  <script>

  </script>
  
  <style scoped>
    .contacts {
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
  </style>
  