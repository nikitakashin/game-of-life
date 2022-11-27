<template>
  <div class="page-index">
    <h1>Игра жизнь</h1>
    <div class="game" :key="z">
      <div v-for="(column, index) in field" :key="index" class="column">
        <div
          v-for="(cell, i) in column"
          :key="i"
          :class="['cell', cell === 1 ? 'black' : '']"
          @click="handleClick(i, index)"
        >
          {{ `${index}:${i}` }}
        </div>
      </div>
    </div>
    <button @click="startGame">го</button>
  </div>
</template>

<script>
import { GameField } from '~/utils';

export default {
  name: 'PageIndex',

  data() {
    return {
      game: null,
      z: 0,
      gameStarted: false
    };
  },

  computed: {
    field() {
      return this.game?.field;
    }
  },

  mounted() {
    const game = new GameField();
    game.createGameFieldArray();

    this.game = game;

    setInterval(() => {
      this.z++;
    }, 1000);
  },

  methods: {
    handleClick(x, y) {
      this.game.setByCoords(x, y);
      this.z++;
    },

    startGame() {
      this.game.start();
      this.gameStarted = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.page-index {
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    display: flex;
    justify-content: center;
  }

  .game {
    display: flex;
    justify-content: center;

    .column {
      .cell {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 29px;
        height: 29px;
        background: white;
        border: 1px solid grey;
        font-size: 60%;

        &.black {
          background: #121212;
          color: white;
        }
      }
    }
  }
}
</style>
