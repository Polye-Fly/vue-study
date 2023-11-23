<template>
    <h3>事件处理器</h3>
    <p @click="getNameHandler(item,$event)" v-for="(item,index) of names" :key="index">{{ item }}</p>
</template>

<script>
export default{
    data(){
        return{
            names:["1","2","3"]
        }
    },
    // 所有的方法都要写在这里
    methods:{
        getNameHandler(item,e){
            console.log(item)
        }
    }
}
</script>
