<template>

  <!-- <h3>组件生命周期</h3>
  <UserComponment/> -->
  <!-- <ComponmentA/>
  <ComponmentB/> -->

  <!-- component是vue提供的一个可以承载组件的标签 通过is来加载ComponentA组件的内容 
      注意当使用该标签来在多个组件间进行切换的时候，被切换掉的组件会被卸载掉，可以通过<keep-alive>组件强制被切换掉的组件保持“存活”状态
  -->
  <keep-alive>
    <component :is="tabComponent"></component>
  </keep-alive>
  <button @click="changeHandle">切换组件</button>
</template>

<script>
/**
 * 生命周期函数
 *    创建期：beforeCreate created
 *    挂载期：beforeMount mounted
 *    更新期：beforeUpdate update
 *    销毁期：beforeUmount umounted
 */
import UserComponment from './components/UserComponment.vue';
import ComponmentA from './components/ComponmentA.vue';
//这是正常加载组件
// import ComponmentB from './components/ComponmentB.vue';
// 异步加载组件
import { defineAsyncComponent } from 'vue';
const ComponmentB = defineAsyncComponent(()=>
{
  import ('./components/ComponmentB.vue')
})
export default{
  data(){
    return {
      tabComponent:"ComponmentA"
    }
  },
  components:{
    // UserComponment
    ComponmentA,
    ComponmentB
  },
  methods:{
    changeHandle(){
      this.tabComponent = this.tabComponent == "ComponmentA" ? "ComponmentB":"ComponmentA"
    }
  }
}
</script>