<template>
<h3>Slots数据传递</h3>
<slot :msg="childdata"></slot>
</template>
<script>
export default{
    data(){
        return {
            // 子元素的数据要是想在插槽内进行显示，得先将数据传给父组件，父组件将数据更新至插槽内才行
            childdata:"子组件数据"
        }
    }
}
</script>