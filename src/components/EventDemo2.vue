<template>
    <h3>内联事件处理器</h3>
    <!-- v-on:也可以简写成@click -->
    <button v-on:click="addcount">Add</button> 
    <p>{{ count }}</p>
</template>

<script>
export default{
    data(){
        return{
            count:0
        }
    },
    // 所有的方法都要写在这里
    methods:{
        addcount(){
            console.log("点击了")
            this.count++
        }
    }
}
</script>
