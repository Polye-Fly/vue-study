<template>
<h3>表单输入绑定</h3>
<form>
    <input type="text" v-model="msg">
    <p>{{ msg }}</p>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>
    <!-- lazy修饰符来改为每次change事件后更新数据(点了enter才能更新数据，正常的输入是不会实时显示) -->
    <input type="text" v-model.lazy="msg1">
    <p>{{ msg1 }}</p>
</form>
</template>

<script>
export default{
    data(){
        return {
            msg:"",
            checked:false,
            msg1:""
        }
    }
}
</script>
