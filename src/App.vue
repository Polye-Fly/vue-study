<template>
  <!-- 实际中不要在模板中进行逻辑的操作 -->
  <!-- <h3>模板语法</h3>
  <p>{{msg}}</p>
  <p>{{test01}}</p>
  <p>{{num+1}}</p>
  <p v-html="rawhtml"></p> -->

  <!-- 属性绑定 '
      通过v-bind+属性名称 进行绑定-->
  <!-- <div v-bind:id="dynamicId" v-bind:class="msg">测试属性绑定</div>
  <button :disabled="oncliks">测试点击</button>
  <div v-bind="objectAttrs">测试属性绑定2</div> -->

  <!-- 条件渲染 -->
  <!-- <ifDemo />
  <ListDemo/>
  <EventDemo1/> -->
  <!-- <EventDemo2/> -->
  <!-- <EventDemo3/> -->
  <!-- <EventDemo4/> -->
  <!-- <EventDemo5/>   -->
  <!-- <ArrayList/> -->
  <!-- <ComputeDemo/> -->
  <!-- <ClassDemo/> -->
  <!-- <StyleDemo/> -->
  <!-- <WatchDemp/> -->
  <!-- <ModelDemo/> -->
  <RefDemo/>

</template>

<script setup>
import ifDemo from "./components/ifDemo.vue"
import ListDemo  from "./components/ListDemo.vue"
import EventDemo1 from "./components/EventDemo1.vue"
import EventDemo2 from "./components/EventDemo2.vue"
import EventDemo3 from "./components/EventDemo3.vue"
import EventDemo4 from "./components/EventDemo4.vue"
import EventDemo5 from "./components/EventDemo5.vue"
import ArrayList from "./components/ArrayList.vue"
import ComputeDemo from "./components/ComputeDemo.vue"
import ClassDemo from "./components/ClassDemo.vue"
import StyleDemo from "./components/StyleDemo.vue"
import WatchDemp from "./components/WatchDemp.vue"
import ModelDemo from "./components/ModelDemo.vue"
import RefDemo from "./components/RefDemo.vue"
// export default{
//   // 文本插值的语法
//   // data(){
//   //   //返回值
//   //   return{
//   //     msg:"vue 语法基础",
//   //     test01:"test01",
//   //     num:10,
//   //     rawhtml:"<a href='www.baidu.com'>百度</a>"
//   //   }
//   // }

//   //属性绑定
//   // data(){
//   //   return {
//   //     msg:"activate",
//   //     dynamicId:"appleid",
//   //     oncliks:false,
//   //     objectAttrs:{
//   //       id:"appid",
//   //       class:"appclass"
//   //     }
//   //   }
//   // }

//   //条件渲染
// }
</script>

<!-- scoped 让当前样式只在当前组件生效 -->
<style scoped>
</style>



