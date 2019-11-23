<template>
    <div id="home" class="mx-auto mt-10 w-3/4">
        <div class="header">
            <header-title></header-title>
            <p v-bind:id="titles.titlePosition.name" class="text-4xl py-2 title-to-animate">I'm a Full Stack Developer</p>
            <p id="title-info" class="text-2xl py-2 title-to-animate">If you want to know more about me there you have some buttons!</p>     
        </div>    
    </div>
</template>

<script>
    import UtilsHelper from '../helpers/utils'
    import HeaderTitle from './partials/appTitle'
    
    export default {
        components: {
            HeaderTitle
        },

        data() {
            return {
                titles: {
                    titlePosition: {
                        name: 'title-position',
                        time: 1000
                    },
                    titleInfo: {
                        name: 'title-info',
                        time: 2000
                    }
                }
            }
        },

        created() {
            const self = this;
            this.$nextTick(function() {
                self.setTitleClasses()
            })
        },

        methods: {
            setTitleClasses: function() {
                const self = this;

                for(let titleName in self.titles) {
                    let title = self.titles[titleName]
                    
                    UtilsHelper.triggerTransition(
                        document.querySelector(`#${title.name}`),
                        title.time
                    )
                }
            }
        }
    }
</script>