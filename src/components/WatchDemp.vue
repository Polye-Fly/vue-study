<template>
<h3>侦听器</h3>
<p>{{ msg }}</p>
<button @click="updateHandle">修改数据</button>

</template>

<script>
export default{
    data(){
        return {
            msg:"asaas"
        }
    },
    methods:{
        updateHandle(){
            this.msg = "ssss"
        }
    },
    watch:{
        msg(newvalue,oldvalue){
            //数据发生变化自动执行的函数
            // 注意函数名和你要侦听的数据对象名要一致
            console.log(newvalue,oldvalue)
        }
    }
}
</script>

