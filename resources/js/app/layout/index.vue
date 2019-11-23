<template>
  <div id="app" class="container mx-auto">
    
    <app-header></app-header>
    
    <div class="wrapper">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
    
    <app-footer></app-footer>

  </div>

</template>

<script>
import AppHeader from './header.vue'
import AppFooter from './footer.vue'

export default {
  name: 'AppLayout',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>