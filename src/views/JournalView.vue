<template>
  <div class="journal">
    <h2>Historique des Appels</h2>
    <ul>
      <li>
        <strong>{{ $route.query.number }}</strong>
      </li>
    </ul>
    <router-link to="/newcontact"><i class="fa-solid fa-plus"></i></i></router-link>
    <router-link to="/clavier"><i class="fa-solid fa-phone"></i></router-link>

  </div>
</template>

<script>
export default {
  name: 'JournalView',
};
</script>

<style scoped>
    h2 {
        color: white;
    }

    ul {
        color: white;
    }


    .journal {
        display: flex;
        flex-direction: column;
        width: 380px;
        margin: 100px auto;
        justify-content: flex-start;
        align-items: center;
        gap: 40px;
        padding-top:100px ;
        height: 650px;
        border: 1px solid white;
        border-radius: 20px;
    }
    li {
        list-style: none;
    }
    

    i {
        color: white;
        font-size: 30px;
        display: flex;
        justify-content: flex-end;
    }
</style>
