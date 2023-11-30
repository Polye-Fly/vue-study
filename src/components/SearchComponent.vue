<template>
    <!-- v-model用于在表单元素和组件中创建双向绑定,实现数据在视图和模型之间的同步 -->
    <input type="text" v-model="search">
</template>
<script>
export default{
    data(){
        return{
            search:""
        }
    },
    //侦听器
    watch:{
        search(newvlue,oldvalue){
            this.$emit("searchEvent",newvlue)
        }
    }
}
</script>
