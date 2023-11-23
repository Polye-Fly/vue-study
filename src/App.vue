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
  <ifDemo />
  <ListDemo/>
  <EventDemo1/>
</template>

<script setup>
// import ifDemo from "./components/ifDemo.vue"
// import ListDemo  from "./components/ListDemo.vue"
import EventDemo1 from "./components/EventDemo1.vue"
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

<style>
</style>



