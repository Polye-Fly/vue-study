<template>
<h3>依赖注入---子组件</h3>
<p>{{ msg }}</p>
<p>{{ globalData }}</p>
</template>

<script>
export default{
  inject:["msg","globalData"]
}
</script>