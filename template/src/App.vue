<template>
    <div id="app" class="demo-app">
        <demo></demo>
    </div>
</template>

<script>
    import Demo from './components';
    export default {
        components: {
            Demo,
        },
    }
</script>

<style lang="less">
    html{
        height: 100%;
    }
    body{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    .demo-app{
        color: #2c3e50;
        margin-top: -100px;
        max-width: 600px;
        font-family: Source Sans Pro, Helvetica, sans-serif;
        text-align: center;
    }
    .demo-app a{
        color: #42b983;
        text-decoration: none;
    }
    .logo {
        width: 100px;
        height: 100px
    }
</style>
