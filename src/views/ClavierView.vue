<!-- src/views/ClavierView.vue -->
<template>
    <div class="clavier">
      <div class="affiche"><h1>{{ currentNumber }}</h1></div>
      <p class="verif" v-if="currentNumber < 10">veuillez rentrer un numéro valide</p>
      <div class="touches">
        <button v-for="digit in digits" :key="digit" @click="addToNumber(digit)">{{ digit }}</button>
      </div>
      <button class="call" @click="makeCall" ><i class="fa-solid fa-phone"></i></button>
    </div>
  </template>
  
  <script>
export default {
    data() {
      return {
        currentNumber: '',
        digits: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
      }
    },
    methods: {
      addToNumber(digit) {
        this.currentNumber += digit
      },
      makeCall() {
      if (this.currentNumber.length >= 10) {
        const historique = {
          number: this.currentNumber,
        };
        this.currentNumber = '';
        this.$router.push('/journal');
        this.$router.push({
            name: 'journal',
            query: {
                number: historique.number,
            },
        });
        console.log(historique);
      }
    },
}

    
}

  </script>
  
  <style scoped>

    .clavier {
        display: flex;
        flex-direction: column;
        width: 380px;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
        gap: 40px;
        height: auto;
        border: 1px solid white;
        border-radius: 20px;
        padding-bottom: 40px;
    }
    .affiche h1 {
        color: white;
        padding-top: 100px;
    }
    .touches {
        display: flex;
        width: 360px;
        flex-wrap: wrap;
        padding-top: 100px;
        justify-content: center;
        
    }
    .touches button {
        height: 60px;
        width: 60px;
        border-radius: 25px;
        margin:20px;
        cursor: pointer;
    }

    i {
        height: 60px;
        width: 60px;
        font-size: 60px;
        color: white;
    }

    .call {
        background-color: #181818;
        border: none;
        cursor: pointer;
    }

    .verif {
        color: red;
        font-size: 20px;
    }
  </style>
  