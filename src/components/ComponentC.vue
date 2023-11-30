<template>
    <h3>componentC 使用props进行子级向父级传递数据</h3>
    <ComponentD :onEvent="fun"/>
    <p>{{ msg }}</p>
</template>

<script>
import ComponentD from './ComponentD.vue'
export default{
    data(){
        return {
            msg:""
        }
    },
    components:{
        ComponentD
    },
    methods:{
        fun(data){
            console.log(data)
            this.msg = data
        }
    }
}
</script>