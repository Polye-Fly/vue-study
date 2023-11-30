<template>
    <h3>组件事件</h3>
    <ChildEvent @someevent="getHandle"/>
    <p>{{ msg }}</p>
</template>
<script>
import ChildEvent from "./ChildEvent.vue"
export default{
    components:{
        ChildEvent
    },
    methods:{
        getHandle(data){
            console.log("子级元素触发了父级的方法",data)
            this.msg=data
        }
    },
    data(){
        return{
            msg:""
        }
    }
}
</script>