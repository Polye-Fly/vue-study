<template>
<h3>style绑定</h3>
<!-- 对象方式动态绑定样式 -->
<p :style="{color:activateColor,fontSize:fontSize+'px'}"> Style样式绑定</p>
<p :style="styleObject"> Style样式绑定2</p>
<!-- 数组形式，但是不建议常用，用的最多的是对象的方式 -->
<p :style="[styleObject]"> Style样式绑定3</p>
<!-- <p :class="classObejct"> Class样式绑定2</p>
<p :class="[arrActive,arrhasError]"> Class样式绑定3</p>
<p :class="[isActivate?'active text-danger':'']"> Class样式绑定4</p> -->
<!-- 数组里面嵌套对象 -->
<!-- <p :class="[isActivate?'active':'', {'text-danger':hasError}]"> Class样式绑定5</p> -->
</template>

<script>
export default{
    data(){
        return {
            activateColor:'green',
            fontSize:30,
            styleObject:{
                color:'red',
                fontSize:"30px"
            }
        }
    
    }
}
</script>

<style>
.active{
    font-size: 30px;
}
.text-danger{
    color: red;
}
</style>

