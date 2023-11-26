<template>
<h3>数组变化侦听</h3>
<button @click="addArrayHandler">添加数据</button>
<ul>
    <li v-for="(item,index) of names" :key="index" > {{ item }}</li>
</ul>
<button @click="concatHandler">合并数组</button>
<p v-for="(item,index) of nums1" :key="index"> {{ item }}</p>
<p>------</p>
<p v-for="(item,index) of nums2" :key="index"> {{ item }}</p>
</template>

<script>
    export default{
        data(){
            return {
                names:["a1","a2","a3"],
                nums1:[1,2,3,4],
                nums2:[5,6,7,8]
            }
        },
        methods:{
            addArrayHandler(){
                //引起UI自动更新
                // this.names.push("a4")
                // 但是concat方法不会引起UI发生变化，但是数组的内容是发生变化了
                //  需要重新赋值之后才能让UI发生变化
                this.names = this.names.concat("a555")
            },
            concatHandler(){
                this.nums1 = this.nums1.concat(this.nums2)
            }
        }
    }
</script>
