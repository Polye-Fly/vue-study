<template>
<h3>Slots基础2</h3>
<!-- 插槽内容可以访问到父组件的数据作用域 -->
<slot name="header"></slot>
<hr/>
<slot name="contents"></slot>
</template>

<script>
export default{
    data(){
        return {

        }
    }
}
</script>