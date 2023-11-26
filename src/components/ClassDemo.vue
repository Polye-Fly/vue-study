<template>
<h3>样式绑定</h3>
<!-- 两种方式动态绑定样式 -->
<p :class="{'active':isActivate,'text-danger':hasError}"> Class样式绑定</p>
<p :class="classObejct"> Class样式绑定2</p>
<p :class="[arrActive,arrhasError]"> Class样式绑定3</p>
<p :class="[isActivate?'active text-danger':'']"> Class样式绑定4</p>
<!-- 数组里面嵌套对象 -->
<p :class="[isActivate?'active':'', {'text-danger':hasError}]"> Class样式绑定5</p>
</template>

<script>
export default{
    data(){
        return {
            isActivate:true,
            hasError:false,
            classObejct:{
                'active':true,
                'text-danger':true,
            },
            arrActive:"active",
            arrhasError:"text-danger"
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

