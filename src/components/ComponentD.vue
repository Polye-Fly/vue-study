<template>
    <h3>componentD</h3>
    <p>{{ onEvent('子级通过函数进行向父级传递的数据') }}</p>
</template>

<script>
export default{
    data(){
        return {
            
        }
    },
    props:{
        onEvent:Function
    }
}
</script>