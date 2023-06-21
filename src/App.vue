<script>
import { FadeTransition } from 'vue2-transitions';
import { Transition } from 'vue';
import AppHeader from './components/AppHeader.vue';
export default {
    components: {
        AppHeader,
        FadeTransition,
        Transition
    }
}
</script>

<template>
  <div class="router-view-wrapper">
    <AppHeader></AppHeader>
    <transition name="fade">
      <router-view :key="$route.fullPath"></router-view>
    </transition>
  </div>
</template>

<style lang="scss">
@use './styles/general.scss';

.router-view-wrapper {
  background-color: #000000; /* sostituisci con il tuo colore di sfondo */
}

.fade-enter-active,
.fade-leave-active {
  transition: transform 0.3s, filter 0.3s;
}

.fade-enter {
  transform: translateX(-100%);
  filter: blur(5px);
  background-image: url('../public/7957.png');
  background-size: cover;
  background-position: center;
  z-index: 1;
}

.fade-leave-to {
  transform: translateX(100%);
  filter: blur(5px);
  z-index: 0;
}
</style>