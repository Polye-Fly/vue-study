<template>
    <h3>child</h3>
    <p>{{ title }}</p>
    <ul>
        <li v-for="(item,index) of names" :key="index">{{ item }}</li>
    </ul>
    <p>{{ userinfo.name }}</p>
    <p>{{ userinfo.age }}</p>
</template>

<script>
export default{
    data(){
        return {
            
        }
    },
    //传递数据解决方案 
    //props接收父级传递的数据
    props:["title","names","userinfo"]
}
</script>

