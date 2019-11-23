<template>
   <div class="man-block py-4 text-base">

        <div class="man-title py-2">
            <p class="font-bold">{{ block.title }}</p>
        </div>    
        <div class="man-description pl-10">
            <p v-html="block.description"></p>
        </div>    

    </div>
</template>

<script>
    export default {
        props: {
            'block': Object,
        },
        

        created() {
            
        }
    }
</script>