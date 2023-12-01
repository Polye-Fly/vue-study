<template>
<h3>祖宗组件</h3>
<Parent/>
</template>

<script>
import Parent from "./components/Parent.vue"
export default{
  components:{
    Parent
  },
  // provide:{
  //   msg:"aaaa"
  // }
  data(){
    return{
      msg:"bbb"
    }
  },
  //使用函数的形式访问到this
  //provide 和 inject 只能从上到下传递，不可逆转
  provide(){
    return {
      msg:this.msg
    }
  }
}
</script>