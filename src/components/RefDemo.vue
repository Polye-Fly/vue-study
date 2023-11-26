<template>
    <div ref="container" class="container">{{content}}</div>
    <button v-on:click="getElementHandle">获取元素</button>
</template>
<script>
// 内容改变：{{语法模板}}
// 属性改变：v-bind:指令
// 事件：v-on:click
// 但是在实际中如果没有特别需求请不要直接操作dom元素
export default{
    data(){
        return {
            content:"内容"
        }
    },
    methods:{
        getElementHandle(){
            // this.$refs.container 获取到了dom元素
            console.log(this.$refs.container)
            this.$refs.container.innerHTML = "hhh"
        }
    }
}
</script>
