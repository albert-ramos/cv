<template>
    <ul id="ls">
         <item v-for="item in items" v-bind:key="item.id" v-bind:item="item"></item>
    </ul>
</template>

<script>
    import Item from './ls/lsItem';

    export default {
        props: {
            'items': Object,
        },

        components: {
            Item
        },

        created() {
            
        }
    }
</script>