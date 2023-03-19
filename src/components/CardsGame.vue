<template>
  <div class="card-game__wrapper">
    <div v-for="(card, index) in cards" :key="index" class="card-game__card" :ref="index" @click="processCard(index)">
      <div class="card-game__card-content-wrapper">
        <div class="card-game__front-content" :class="{'card-game__front-content--active': !card.active}">Меня не видно</div>
        <div class="card-game__back-content" :class="{'card-game__back-content--active': card.active}">
          <div class="card-game__image-wrapper">
            <img :src="card.src" :alt="card.type">
          </div>
          <div class="card-game__card-name" v-html="card.type" />
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {TCard} from "@/types/TCard";

@Component
export default class CardsGame extends Vue {
  @Prop({default: undefined}) cardsDefault!: TCard[];
  @Prop({default: ''}) text!: string;

  answeredCards: TCard[] = [];
  prevCardIndex: number|undefined = undefined
  created() {
    this.cardsDefault = [...structuredClone(this.cardsDefault), ...this.cardsDefault];
  }

  get cards(): TCard[] {
    return this.cardsDefault;
  }

  processCard(currentCardIndex: number) {
    const currentCard = this.cards[currentCardIndex];
    // Если текущая карта заморожена не делаем ничего
    if (currentCard.freeze) return;

    this.makeCardActive(currentCardIndex);

    // Если у нас есть предыдующая карта и эта карта по типу такая же как эта то ты делаем её активной
    if (this.prevCardIndex !== undefined && this.cards[this.prevCardIndex].type === this.cards[currentCardIndex].type) {
      this.freezeCard(currentCardIndex);
      this.freezeCard(this.prevCardIndex);

      this.prevCardIndex = undefined;

      return;
    }

    if (this.prevCardIndex !== undefined) {
      this.makeCardUnActive(this.prevCardIndex);
      this.makeCardUnActive(currentCardIndex);

      this.prevCardIndex = undefined;

      return;
    }

    this.prevCardIndex = currentCardIndex;
  }

  makeCardActive(index: number) {
    setTimeout(() => {
      this.$set(this.cards[index], 'active', true);
    }, 200);
  }

  makeCardUnActive(index: number) {
    setTimeout(() => {
      this.$set(this.cards[index], 'active', false);
    }, 1000);
  }

  freezeCard(index: number) {
    this.$set(this.cards[index], 'freeze', true);
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

  &__back-content {
    display: none;

    &--active {
      display: flex;
    }
  }

  &__front-content {
    display: none;

    &--active {
      display: flex;
    }
  }

  &__card {
    width: 100%;
    height: 300px;
    background-color: red;
  }
}
</style>
