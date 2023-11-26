<template>
<h3>计算属性</h3>
<h3>{{ man.name }}</h3>
<!-- <p>{{ man.content.length>0 ? "YES":"NO" }}</p> -->
<p>{{ manContent}}</p>
</template>

<script>
export default{
    data(){
        return {
            man:{
                name:"xiao lu",
                content:["aa","bb","cc"]
            }
        }
    },
    //计算属性
    computed:{
        manContent(){
            return this.man.content.length>0 ? "yes":"NO"
        }
    }
}
</script>
