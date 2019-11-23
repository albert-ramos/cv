<template>
    <div class="container mx-auto px-4">
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
                cmd: this.getDynamicCmd(),
                template: 'man',
                templateData: {
                    0: {
                        'title': '',
                        'description': '<p>Albert Ramos</p>'
                    }
                },
            }
        }, 

        created() {
            
         },

        mounted() {
            this.checkIfCompanyExistsOrShow404()
        },

        methods: {
            getDynamicCmd: function() {
                return `cat my-job-at-${this.$route.params.slug}.txt`
            },

            checkIfCompanyExistsOrShow404: function() {
                if( false == this.getSingleCompany(this.$route.params.slug) )
                    return this.$router.push('/404');
                    
            },

            getAllCompanies: function() {
                return Provider.getCompanies();
            },

            getSingleCompany: function() {
                const company = this.getAllCompanies()[this.$route.params.slug]
                return  company ? company : false;
            }
        }
        
    }
</script>