<template>
    <h3>事件修饰符</h3>
    <!-- 阻止默认事件还可以使用以下的形式：
        @click.prevent -->
    <a @click="clickHandle" href="https://www.baidu.com/">百度</a>
    <!-- 阻止事件冒泡还可以使用以下的形式：
        @click.stop -->
    <div @click="clickDiv">
        <p @click="clickP"></p>
    </div>
</template>

<script>
export default{
    data(){
        return{
            names:["1","2","3"]
        }
    },
    // 所有的方法都要写在这里
    methods:{
        clickHandle(e){
            //阻止默认事件
            e.preventDefault();
            console.log("点击按钮")
        },
        clickDiv(e){
            console.log("DIV")
        },
        clickP(e){
            //阻止事件冒泡
            e.stopPropagation()
            console.log("p")
        }
    }
}
</script>
