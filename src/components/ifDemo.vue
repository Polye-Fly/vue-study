<template>
    <h3>条件渲染</h3>
    <div v-if="flag">Could you see me ?</div>
    <div v-else>you see me ?</div>
    <div v-show="flag">you see me 2 ?</div>
</template>

<script>
export default{
    data(){
        return {
            flag:true
        }
    }
}
</script>