<template>
    <h3>componentsA</h3>
    <ComponentsB :title="title"/>
</template>

<script>
import ComponentsB from "./ComponentsB.vue"
export default{
    data(){
        return {
            title:12,
            names:["a","v","k"]
        }
    },
    components:{
        ComponentsB
    }
}
</script>