<template>
<div class="header content">
  <div class="header__wrapper">
    <div class="header__logo">amazon</div>
    <div class="header__small-text">Вы находитесь</div>
    <div class="header__big-text">Российская Федерация</div>
    <img class="header__image" src="@/assets/geo.png">
  </div>
</div>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style lang="scss" >

.header {
  padding-top: 6px;
  margin-bottom: 20px;

  &__wrapper {
    display: grid;
    align-items: start;
    grid-template-areas:
      "logo  . small-text small-text"
      "logo  location big-text big-text";
    grid-template-columns: 100px 50px 100px;
  }

  &__logo {
    font-size: 30px;
    grid-area: logo;
    font-weight:bolder;
    color: #ffffff;
    align-self: center;

    @media (max-width: 700px) {
      font-size: 30px;
    }

    @media (max-width: 600px) {
      font-size: 22px;
    }

    @media (max-width: 400px) {
      font-size: 18px;
    }

  }

  &__big-text {
    font-size: 16px;
    grid-area: big-text;
    font-weight: normal;
    color: #ffffff;
    align-self: center;


    @media (max-width: 700px) {
      font-size: 22px;
    }

    @media (max-width: 600px) {
      font-size: 16px;
    }

    @media (max-width: 400px) {
      margin-left: -60px;
      font-size: 10px;
    }

  }

  &__small-text{
    font-size: 14px;
    grid-area: small-text;
    color: #b6b1b1;
    font-weight: normal;
    align-self: center;

    @media (max-width: 700px) {
      font-size: 20px;
    }

    @media (max-width: 600px) {
      font-size: 14px;
    }

    @media (max-width: 400px) {
      margin-left: -60px;
      font-size: 8px;
    }

  }

  &__image {
    grid-area: location;
    width: 20px;
    padding-right: 2px;
    padding-bottom: 2px;
    justify-self: end;
    align-self: start;

    @media (max-width: 400px) {
      display: none;
    }

  }

}



</style>