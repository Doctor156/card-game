<template>
  <div>
    <AppHeader />
    <AppContent>
      <template #card-game>
        <CardsGame :cards-default='cards' />
      </template>
    </AppContent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CardsGame from './components/CardsGame.vue';
import {TCard} from "@/types/TCard";
import AppHeader from "@/components/AppHeader.vue";
import AppContent from "@/components/AppContent.vue";

@Component({
  components: {
    AppContent,
    AppHeader,
    CardsGame,
  },
})
export default class App extends Vue {
  get cards(): TCard[] {
   return [
     {
       type: '0$',
      // src: '/favicon.ico',
     },
     {
       type: '500$',
     //  src: '/favicon.ico',
     },
     {
       type: '0$',
      // src: '/favicon.ico',
     },
     ]
  }
}
</script>
