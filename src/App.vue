<template>
<!-- <SlotsBase/> -->
<!-- <SlotsBase>
  <div>
    <h3>插槽标题</h3>
    <p>插槽内容</p>
  </div>
</SlotsBase> -->
  <!-- 插槽数据应该在父组件模板中进行定义 -->
  <!-- 具名插槽,可以给每个插槽放一个名字,v-slot：可以简写成# -->
<!-- <SlotsBase2>
  <template v-slot:header>
    <h3>{{msg}}header</h3>
  </template>
  <template #contents>
    <h3>{{msg}}contents</h3>
  </template>
</SlotsBase2> -->
<!-- <SlotsData v-slot="slotProps"> -->
<SlotsData>
  <template #header="slotProps">
    <h3>{{ currtext }}---{{ slotProps.msg }}</h3>
  </template>
</SlotsData>
</template>
<script>
import SlotsBase from './components/SlotsBase.vue';
import SlotsBase2 from './components/SlotsBase2.vue';
import SlotsData from './components/SlotsData.vue';
export default{
  components:{
    // SlotsBase
    // SlotsBase2
    SlotsData
  },
  data(){
    return {
      msg:"插槽内容动态数据",
      currtext:"数据传递测试内容"
    }
  }
}
</script>