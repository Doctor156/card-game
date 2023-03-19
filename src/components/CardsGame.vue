<template>
  <div class="card-game__wrapper">
    <div
        v-for="(card, index) in cards" :key="index"
        :class="{'card-game__card--active': card.active, 'card-game__card--freeze': card.freeze}"
        class="card-game__card"
        @click="processCard(index)"
    >
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

    // Если мы до этого выбирали карточку то делаем обе неактивными
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
    visibility: hidden;
    transition: transform 0.8s;

    &--active {
      visibility: visible;
      transform: rotateY(180deg);
    }
  }

  &__front-content {
    visibility: hidden;
    transition: transform 0.8s;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;

    &--active {
      visibility: visible;
      transform-style: preserve-3d;
    }
  }

  &__card {
    width: 100%;
    height: 300px;
    border-radius: 20px;
    background: #f5f5f5;
    position: relative;
    padding: 1.8rem;
    border: 2px solid #c3c6ce;
    transition: 0.5s ease-out;
    overflow: visible;
    perspective: 1000px;
    cursor: pointer;

    &:hover {
      border-color: #008bf8;
      box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
    }

    &--active {
      transform: rotateY(180deg);
    }

    &--freeze {
      cursor: auto;
    }
  }
}
</style>
