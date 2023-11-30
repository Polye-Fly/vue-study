<template>
    <h3>Child组件事件,Child向父级传递数据</h3>
    <button @click="clickEventHandle">Child传递数据</button>

</template>
<script>
export default{
    methods:{
        clickEventHandle(){
            //子传父，通过$emit
            this.$emit("someevent","Child data")
        }
    }
}
</script>