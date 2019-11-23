<template>
   <div id="man">
        <block v-for="block in blocks" v-bind:key="block.id" v-bind:block="block"></block>
    </div>
</template>

<script>
    import Block from './man/manBlock';

    export default {
        props: {
            'blocks': Object,
        },

        components: {
            Block
        },

        created() {
            
        }
    }
</script>