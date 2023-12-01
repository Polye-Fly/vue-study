<template>
    <h3>动态组件ComponentA</h3>
    <p>{{ msg }}</p>
    <button @click="updateHandle">更新数据</button>
</template>

<script>
export default{
    data(){
        return{
            msg:"old data"
        }
    },
    beforeUnmount(){
        console.log("组件A被卸载之前")
    },
    unmounted(){
        console.log("组件被卸载之后")
    },
    methods:{
        updateHandle(){
            this.msg = "new data"
        }
    }
}
</script>