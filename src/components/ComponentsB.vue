<template>
    <h3>componentsB</h3>
    <p>{{ title }}</p>
</template>

<script>
export default{
    data(){
        return {
            
        }
    },
    props:{
        //注意props是只读的，不能对父级传过来的数据进行修改
        title:{
            type:[String,Number],
            default:0,
            //必选项
            required:true

        },
        //数字和字符串的默认值可以直接default:xxx，但是如果是数组和对象，必须通过工厂函数返回默认值
        names:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>