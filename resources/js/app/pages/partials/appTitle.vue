<template>
    <h1 v-bind:id="titlePage" class="text-6xl py-2 title-to-animate">I'm Albert Ramos</h1>
</template>

<script>
    import UtilsHelper from '../../helpers/utils';
    
    export default {

        data() {
            return {
                titlePage: 'title-page'
            }
        },

        created() {
            const self = this;
            this.$nextTick(function() {
                UtilsHelper.triggerTransition(
                    document.querySelector(`#${self.titlePage}`),
                    200
                )
            })
        }
    }
</script>