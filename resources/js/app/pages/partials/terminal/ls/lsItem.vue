<template>
   <li class="py-2 md:py-1 text-base">
        <a v-bind:href="item.url" class="block">
            <span class="block w-full md:w-1/5 md:inline-block">{{ item.dirPerm }}</span>
            <span class="block w-full md:w-1/4 md:inline-block">{{ item.dates }}</span>
            <span class="block w-full md:w-1/5 md:inline-block font-bold">{{ item.name }} {{item.slug}}</span>
            <span class="block w-full md:w-1/4 md:inline-block">{{ item.position }}</span>
        </a>
    </li>   
</template>

<script>
    import UtilsHelper from '../../../../helpers/utils';
    export default {
        props: {
            'item': Object,
        },
        

        created() {
            this.prepareObjectToRender();
        },

        methods: {
            prepareObjectToRender: function() {
                this.item.url = `company/${this.slugItemProperty('name')}`
            },

            slugItemProperty: function(itemName) {
                return UtilsHelper.sluggify(this.item[itemName]);
            }
        }
    }
</script>