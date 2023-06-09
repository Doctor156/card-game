<template>
  <div class="card-game__wrapper">
    <div
        v-for="(card, index) in cards" :key="index"
        :class="{'card-game__card--active': card.active, 'card-game__card--freeze': card.freeze}"
        class="card-game__card"
        @click="processCard(index)"
    >
      <div class="card-game__card-content-wrapper">
        <div class="card-game__front-content" :class="{'card-game__front-content--active': !card.active}">YOUR HAPPY CARD</div>
        <div class="card-game__back-content" :class="{'card-game__back-content--active': card.active}">
<!--          <div class="card-game__image-wrapper">-->
<!--            <img :src="card.src" :alt="card.type">-->
<!--          </div>-->
          <div class="card-game__card-name" v-html="card.type" />
        </div>
      </div>
    </div>
    <div class="card-game__game-end-window" v-if="checkForVictory">AAAAAAAAAAAAAAAAA</div>
  </div>
</template>


<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {TCard} from "@/types/TCard";

@Component
export default class CardsGame extends Vue {
  @Prop({default: undefined}) cardsDefault!: TCard[];
  @Prop({default: ''}) text!: string;

  prevCardIndex: number|undefined = undefined;
  // количество замороженных карт
  freezeCardsCount: number = 0
  created() {
    this.cardsDefault = [...structuredClone(this.cardsDefault), ...this.cardsDefault];
  }

  get cards(): TCard[] {
    return this.cardsDefault;
  }

  processCard(currentCardIndex: number) {
    const currentCard = this.cards[currentCardIndex];
    // Если текущая карта заморожена не делаем ничего
    if (currentCard.freeze || currentCardIndex === this.prevCardIndex) return;

    this.makeCardActive(currentCardIndex);

    // Если у нас есть предыдующая карта и эта карта по типу такая же как эта то ты делаем её активной
    if (this.prevCardIndex !== undefined && this.cards[this.prevCardIndex].type === this.cards[currentCardIndex].type) {
      this.freezeCard(currentCardIndex);
      this.freezeCard(this.prevCardIndex);

      // пополняем счетчик количества замороженных карточек
      this.countFreezeCards(currentCardIndex,this.prevCardIndex);
      //поздравляем с победой, если счётчик заполнен
      if (this.checkForVictory) {
        this.reportOfVictory();
      }

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

  // подсчет количества замороженных карт
  countFreezeCards(index: number, prevIndex: number) {
    if (this.cards[index].freeze && this.cards[prevIndex].freeze) {
      return this.freezeCardsCount += 2;
    }
  }

  // поздравление с победой
   reportOfVictory() {
      setTimeout(() => {
        alert("Поздравляю бля с победой");
      }, 1000);
  }

  get checkForVictory(): boolean {
    return this.freezeCardsCount === this.cards.length;
  }

}
</script>

<style lang="scss">
.card-game {
  display: flex;
  font-size: 14px;
  color: #131921;
  justify-items: center;

  &__wrapper {
    display: grid;
    position: relative;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    grid-gap: 3%;

    @media (max-width: 620px) {
      grid-template-columns: repeat(3, 1fr);
      width: 100%;
      align-items: center;
      justify-items: center;
      grid-column-gap: 10px;
    }

    @media (max-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      position: relative;
    }

    @media (max-width: 400px) {
      align-items: center;
      position: relative;
    }

    @media (max-width: 300px) {
      align-items: center;
      position: relative;
    }

  }

  &__back-content {
    visibility: hidden;
    transition: transform 0.8s;
    align-items: center;
    text-align: center;
    font-size: 24px;
    font-weight:bold;
    color: #ffffff;

    @media (max-width: 620px) {
      font-size: 24px;
    }

    @media (max-width: 500px) {
      font-size: 20px;
    }

    @media (max-width: 400px) {
      position: center;
      margin-top: -10px;
      font-size: 16px;
      font-weight:bold;
    }

    @media (max-width: 300px) {
      font-size: 10px;
      font-weight:bold;
    }

    &__card-name {
      text-align: center;
      font-size: 24px;
      font-weight:bolder;
      position: absolute;

      @media (max-width: 620px) {
        margin-top: -20px;
        font-size: 24px;
      }

      @media (max-width: 500px) {
        margin-top: -20px;
        font-size: 20px;
      }

      @media (max-width: 400px) {
        margin-top: -30px;
        font-size: 16px;
        font-weight:bold;
      }

      @media (max-width: 300px) {
        margin-top: -30px;
        font-size: 10px;
        font-weight:bold;
      }
    }

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
    text-align: center;
    font-size: 24px;
    font-weight:bolder;
    color: #ffffff;
    position: absolute;


    @media (max-width: 620px) {
      margin-left: -23px;
      text-align: center;
      font-size: 24px;
    }

    @media (max-width: 500px) {
      text-align: center;
      font-size: 20px;
    }

    @media (max-width: 400px) {
      margin-top: -10px;
      margin-left: -27px;
      text-align: center;
      font-size: 16px;
      font-weight:bold;
    }

    @media (max-width: 300px) {
      margin-top: -20px;
      margin-left: -30px;
      text-align: center;
      font-size: 10px;
      font-weight:bold;
    }

    &--active {
      visibility: visible;
      transform-style: preserve-3d;
    }
  }

  &__card {
    width: 100%;
    height: 250px;
    border-radius: 20px;
    background: #f8a51b;
    position: relative;
    padding: 1.8rem;
    border: 2px solid #F8A51B;
    transition: 0.5s ease-out;
    overflow: visible;
    perspective: 1000px;
    cursor: pointer;

    @media (max-width: 620px) {
      width: 150px;
      height: 150px;
    }

    @media (max-width: 500px) {
      width: 120px;
      height: 120px;
    }

    @media (max-width: 400px) {
      width: 100px;
      height: 100px;
    }

    @media (max-width: 300px) {
      width: 60px;
      height: 60px;
    }

    &:before {
      content: "";
      position: absolute;
      top: -5px;
      right: -5px;
      bottom: -5px;
      left: -5px;
      z-index: -1;
      background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
      background-size: 400%;
      border-radius: 40px;
      opacity: 0;
      transition: .5s;
    }

    &:hover {
      border-color: #008bf8;
      box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
      animation: animate 8s linear infinite;


      &:before {
        filter: blur(20px);
        opacity: 1;
        animation: animate 8s linear infinite;
      }
    }



    &--active {
      transform: rotateY(180deg);
    }

    &--freeze {
      cursor: auto;
    }
  }

  &__game-end-window {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    background-color: #008bf8;
  }

  @keyframes animate {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 400%;
    }
  }
}
</style>
