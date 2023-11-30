<template>

  <h3>组件生命周期</h3>
  <UserComponment/>
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
export default{
  data(){
    return {

    }
  },
  components:{
    UserComponment
  }
}
</script>