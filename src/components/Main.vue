<template>
    <h3>Search Main</h3>
    <p>{{ search }}</p>
    <SearchComponent @searchEvent="getSearch" />
</template>
<script>
import SearchComponent from './SearchComponent.vue';
export default{
    data(){
        return{
            search:""
        }
    },
    components:{
        SearchComponent
    },
    methods:{
        getSearch(data){
            this.search = data
        }
    }
}
</script>
