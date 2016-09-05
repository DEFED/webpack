<template>
    <div class="dev-hello">
        <h1 v-text="msg"></h1>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                msg: 'Hello, defed vue components',
            }
        },
    }
</script>

<style scoped lang="less">
    h1{
        font-size: 50px;
        font-weight: lighter;
        color: #fc9153;
    }
</style>
