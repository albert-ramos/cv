<template>
    <footer class="container mx-auto">
        <div id="shortcuts" class="shortcuts title-to-animate mt-10 pt-5 mx-auto w-3/4">
            <a href="/about" class="text-base inline-block m-2">
                <span class="block">##############</span>
                <span class="block">## About me ##</span>
                <span class="block">##############</span>
            </a>

            <a href="/experience" class="text-base inline-block m-2">
                <span class="block">###################</span>
                <span class="block">## My experience ##</span>
                <span class="block">###################</span>
            </a>

            <a href="https://github.com/albert-ramos" target="_blank" class="text-base inline-block m-2">
                <span class="block">############</span>
                <span class="block">## Github ##</span>
                <span class="block">############</span>
            </a>
            <a href="https://www.linkedin.com/in/albert-ramos/" target="_blank" class="text-base inline-block m-2">
                <span class="block">##############</span>
                <span class="block">## LinkedIn ##</span>
                <span class="block">##############</span>
            </a>
        </div>    
    </footer> 
</template>

<script>
import UtilsHelper from '../helpers/utils'

export default {


  data() {
      return {
          elementToAnimate: 'shortcuts'
      }
  },

  created() {
      const self = this;
      this.$nextTick(function() {
          UtilsHelper.triggerTransition(
              document.querySelector(`#${self.elementToAnimate}`),
              2000
          )
      })
    }


 }
</script>