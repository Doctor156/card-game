<template>
  <div>
    <CardsGame :cards-default='cards' />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CardsGame from './components/CardsGame.vue';
import {TCard} from "@/types/TCard";

@Component({
  components: {
    CardsGame,
  },
})
export default class App extends Vue {
  get cards(): TCard[] {
   return [
     {
       type: 'PHP',
       src: '/favicon.ico',
     },
     {
       type: 'VUE',
       src: '/favicon.ico',
     },
     {
       type: 'TS',
       src: '/favicon.ico',
     },
     {
       type: 'JS',
       src: '/favicon.ico',
     }
     ]
  }
}
</script>
