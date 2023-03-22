<template>
  <div class="content">
    <div class="content__wrapper">
      <div class="content__title">ВЫИГРАЙ <span style="color: #F8A51B">AMAZON-BOX</span> C ЦЕННЫМ НАПОЛНЕНИЕМ НА 1000$ !</div>
      <div class="content__content-wrapper">
        <div class="content__wrapper-image">
          <img class="content__image" src="@/assets/girlBox.png">
        </div>
        <div class="content__wrapper-text">
          <div class="content__text-1">Найдите счастливую карту и получите Amazon-box с наполнением на 10<span style="color: #F8A51B">$</span>, 100<span style="color: #F8A51B">$</span> и 1000<span style="color: #F8A51B">$</span></div>
          <div class="content__text-2">Просто щелкните мышью по понравившимся  картам. Найденная пара карточек и будет Вашим призом.<span style="color: #F8A51B; font-weight: bold;"> Удачи!</span></div>
          <div class="content__game">
            <slot name="card-game" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppContent"
}
</script>

<style lang="scss">
body {
  background: rgb(35,47,62);
  background: radial-gradient(circle, rgba(35,47,62,1) 0%, rgba(19,25,33,1) 100%);
}

.content {
  width: 1600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1400px) {
    width: 1200px;
  }

  @media (max-width: 1200px) {
    width: 600px;
  }

  @media (max-width: 700px) {
    width: 600px;
  }

  @media (max-width: 600px) {
    width: 400px;
  }

  @media (max-width: 400px) {
    width: 300px;
  }


  &__wrapper {
    color: #ffffff;
  }

  &__title {
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    letter-spacing: 0.035em;
    line-height: 1.4;
    margin-top: 30px;
    margin-bottom: 30px;

    @media (max-width: 700px) {
      font-size: 26px;
      text-align: center;
    }

    @media (max-width: 600px) {
      font-size: 22px;
      text-align: center;
    }

    @media (max-width: 440px) {
      font-size: 18px;
      text-align: center;
    }

  }

  &__content-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;


    @media (max-width: 1200px) {
      grid-template-columns: 1fr;
      gap: 10px;
      justify-items: center;
    }

  }

  &__wrapper-text {
    @media (max-width: 700px) {
      width: 600px;
      text-align: center;
    }

    @media (max-width: 600px) {
      width: 400px;
      text-align: center;
    }

    @media (max-width: 400px) {
      width: 300px;
      text-align: center;
    }

  }

  &__text-1 {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 148.19%;

    @media (max-width: 700px) {
      font-weight: 600;
      font-size: 22px;
      text-align: center;
    }

    @media (max-width: 600px) {
      font-weight: 600;
      font-size: 20px;
      text-align: center;
    }

    @media (max-width: 440px) {
      font-weight: 600;
      font-size: 16px;
      text-align: center;
    }

    @media (max-width: 300px) {
      font-weight: 600;
      font-size: 14px;
      text-align: center;
    }

  }

  &__text-2 {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 148.19%;
    margin-top: 10px;

    @media (max-width: 700px) {
      font-weight: 400;
      font-size: 20px;
    }

    @media (max-width: 600px) {
      font-weight: 400;
      font-size: 18px;
    }

    @media (max-width: 440px) {
      font-weight: 400;
      font-size: 14px;
    }

    @media (max-width: 300px) {
      font-weight: 300;
      font-size: 12px;
    }

  }

  &__game {
    margin-top: 20px;
  }

  &__wrapper-text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    @media (max-width: 320px) {
      display: flex;
    }
  }

  &__image {
    width: 560px;
    height: 700px;

    @media (max-width: 700px) {
      width: 390px;
      height: 500px;
    }

    @media (max-width: 600px) {
      width: 320px;
      height: 420px;
    }

    @media (max-width: 440px) {
      width: 230px;
      height: 300px;
    }

    @media (max-width: 300px) {
      width: 210px;
      height: 270px;
    }
  }
}

</style>