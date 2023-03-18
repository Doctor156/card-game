<template>
    <CardsGame :text="'222'" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CardsGame from './components/CardsGame.vue';

@Component({
  components: {
    CardsGame,
  },
})
export default class App extends Vue {}
</script>
