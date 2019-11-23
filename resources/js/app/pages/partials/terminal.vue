<template>
    <div id="terminal">

        <div id="terminal-header" class="py-3 mx-auto w-3/4 text-3xl">
            <span id="terminal-header-prefix" class="block md:inline-block">
                albert@dev:~$
            </span>

            <span id="terminal-command"></span>
        </div>

        <div id="terminal-body" class="py-3 mx-auto w-3/4">
           <man-template v-if="template == 'man'" v-bind:blocks="templateData"></man-template>
           <ls-template v-if="template == 'ls'" v-bind:items="templateData"></ls-template>
        </div>
    </div>
</template>

<script>
    import ManTemplate from './terminal/man';
    import LsTemplate from './terminal/ls';
    import Typed from 'typed.js';

    export default {
        props: {
            'cmd': String,
            'template': String,
            'templateData': Object
        },

        components: {
            ManTemplate,
            LsTemplate
        },

        created() {
            const self = this;
            console.log("erminal created");
            this.$nextTick(function () {
                
                let typed = new Typed('#terminal-command', {
                    strings: [this.cmd],
                    typeSpeed: 50
                });

                console.log(typed);

                self.showTerminalBody(2000);
            })
        },

        methods: {
            showTerminalBody: function(time) {
                let bodyEl = this.$el.querySelector('#terminal-body') 

                if(bodyEl != "undefined") {
                    setTimeout(function(){
                        bodyEl.classList.add('active')
                    }, time)
                }
                    
            }
        }
    }
</script>