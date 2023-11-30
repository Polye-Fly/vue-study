<template>
    <h3>组件生命周期函数的应用</h3>
    <p ref="name">AAAAA</p>
</template>

<script>
export default{
    data(){

    },
    beforeMount(){
        console.log(this.$refs.name)  //undefined
    },
    mounted(){
        console.log(this.$refs.name)
    }
}
</script>