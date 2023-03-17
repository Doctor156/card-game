<template>
  <div class="card-game__wrapper">
    Тут будет игра
  </div>
</template>


<script lang="ts">
import {Vue} from 'vue-property-decorator';

export default class CardsGame extends Vue {
  // @Prop({}) came!: ;

  created() {

  }
}
</script>

<style lang="scss" scoped>
.card-game {
  &__wrapper {
    background-color: red;
  }
}
</style>
