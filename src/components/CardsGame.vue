<template>
  <div class="card-game__wrapper">
    <div v-for="index in 9" :key="index" class="card-game__card" :ref="index" @click="makeCardActive(index)">
      <div class="card-game__card-content-wrapper">
        <div class="card-game__front-content" v-html="content" />
        <div class="card-game__back-content">{{content}}</div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import {Prop, Vue} from 'vue-property-decorator';
import {TCard} from "../types/TCard";

export default class CardsGame extends Vue {
  @Prop({}) cards: TCard[];

  makeCardActive(ev) {
    console.log(ev.target.class)
  }

  get content() {
    return '<h1>Тонечка лохушка аа</h1>'
  }
}
</script>

<style lang="scss" >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.card-game {
  display: flex;
  font-size: 14px;

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    grid-gap: 10px;
  }

  &__card {
    width: 100%;
    height: 300px;
    background-color: red;
  }
}
</style>
