<template>
    <div>
        {{codeImageUrl}}
        <button @click="handleClick">登录</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                codeImageUrl:''
            }
        },
        methods: {
            handleClick(){
                console.log(111)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>