<template>
    <div class="main">
        <div class="top">
            <!--<div class="logo"></div>-->
            <image class="logo" resize="cover" src="../src/assets/img/hxm.png"></image>
            <div class="input-wrap">
                <input class="top-input" type="text" placeholder="请输入搜索内容" @input="onchange"/>
            </div>
        </div>
        <div class="banner"></div>
        <div class="item-list"></div>
        <div class="footer"></div>
        <text class="message" @click="test">Ready,let's use Vue.js to build your Weex app.{{value}}</text>
    </div>
</template>
<script>
    var modal = weex.requireModule('modal')
    export default {
        data() {
            return {
                value: ''
            }
        },
        methods: {
            onchange(e) {
                this.value = e.value;
            },
            test() {
                modal('hello')
            }
        }
    }
</script>
<style scoped>
    .main {
        justify-content: flex-start;
    }

    .top {
        padding: 16px 30px;
        flex-direction: row;
    }

    .logo {
        width: 138px;
        height: 40px;
        /*background: url(../assets/img/hxm.png)  0 -100px no-repeat;*/
        /*background-size: cover;*/
        background: 0 -100px;
        margin-right: 20px;
    }

    .input-wrap {
        flex-grow: 1;
    }

    .top-input {
        width: 532px;
        height: 56px;
        line-height: 56px;
        font-size: 20px;
        color: rgba(0, 0, 0, .8);
        background: #ededed;
        text-align: center;
    }
</style>
