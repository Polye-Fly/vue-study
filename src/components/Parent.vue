<template>
    <h3>parent</h3>
    <Child :title="msg" :names="names" :userinfo="userinfo"/>
</template>

<script>
import Child from './Child.vue'
export default{
    data(){
        return {
            msg:"xxxx",
            names:['1','2','3'],
            userinfo:{
                name:"ls",
                age:20
            }
        }
    },
    //组件和组件之间不是完全相互独立的，组件与组件之间可以进行数据的传递
    //传递数据的解决方案是props
    //pros传递数据只能从父级传递到子级
    //组件可以传递多种类型的数据，不仅仅是字符串，实际上任何类型的数据都可以进行传递
    components:{
        Child
    }
}
</script>

