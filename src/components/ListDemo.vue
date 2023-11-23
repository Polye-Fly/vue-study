<template>
<h3>列表渲染</h3>
<!-- <p v-for="name in names">{{ name }}</p> -->
<!-- <p v-for="name of names">{{ name }}</p> -->
<div>
    <p v-for="(value,key,index) of userinfo">{{ value }}-{{ key }}-{{ index }}</p>
</div>
</template>
<script>
export default{
    data(){
        return {
            names:["x1","x2","x5"],
            userinfo:{
                name:"sss",
                age:18,
                sex:"san"
            }
        }
    }
}
</script>
