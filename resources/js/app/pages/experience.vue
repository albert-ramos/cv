<template>
    <div>
        <terminal v-bind:cmd="cmd" 
                    v-bind:template="template" 
                    v-bind:template-data="templateData"></terminal>
    </div>
</template>

<script>
    import Terminal from './partials/terminal';
    import Provider from '../helpers/provider';
    export default {
        components: {
            Terminal
        },


        data() {
            return {
                cmd: 'ls -l experience/',
                template: 'ls',
                templateData: Provider.getCompanies(),
            }
        }, 

        created() {
        }
        
    }
</script>