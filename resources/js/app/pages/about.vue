<template>
    <div>
        <terminal v-bind:cmd="cmd" 
                    v-bind:template="template" 
                    v-bind:template-data="templateData"></terminal>
    </div>
</template>

<script>
    import Terminal from './partials/terminal';
    export default {
        components: {
            Terminal
        },


        data() {
            return {
                cmd: 'man albert',
                template: 'man',
                templateData: {
                    0: {
                        'title': 'INFO',
                        'description': '<p>Albert Ramos</p>'
                    },
                    1: {
                        'title': 'DESCRIPTION',
                        'description': '<p>Soy un desarrollador web con 6 años de experiencia trabajando como full stack.</p><p>Como lenguaje de backend me especializo en PHP y trabajando con tecnologias como Code Igniter (DEP) y Laravel sobretodo.</p><p>En el lado frontend he usado diversos frameworks por ejemplo Angular +4 y Vuejs.</p>'
                    }
                },
            }
        }, 

        created() {
        }
        
    }
</script>