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
 
    <AppHeader></AppHeader>
    <transition name="fade">
         <router-view :key="$route.fullPath" ></router-view>
    </transition>

</template>

<style lang="scss">
@use './styles/general.scss';


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
