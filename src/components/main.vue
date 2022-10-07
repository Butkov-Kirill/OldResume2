<script>
export default {
    methods: {
        Scroll(block){
            let element = document.getElementsByClassName(block);
            element[0].scrollIntoView();
        }
    }
}
</script>

<template lang="pug">
.main
    .background
    .dark-background
    h1.heading Сайт - Резюме
    p.text На данном сайте размещена информация о его владельце и разработанных им проектах.
    button(@mousedown = 'Scroll("aboute-me-block")') Узнать больше
</template>

<style lang="scss">
.main{
    position: relative;
    padding: 0 10% 0 10%;
    background-size: cover;
    .background{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        z-index: -2;
        background: url('../assets/images/background.jpg');
        background-size: cover;
        filter: blur(10px);
        overflow:hidden;
    }
    .dark-background{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        z-index: -1;
        background: rgba(48, 48, 48, 0.88);
        overflow: hidden;
    }
    .heading{
        font-family: 'Merriweather';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 70px;
        padding-bottom: 15px;
        margin-top: 117px;
        color: #fff;
    }
    .text {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 100;
        font-size: 24px;
        line-height: 35px;
        width: 60%;
        margin-bottom: 121px;
        color: #fff
    }
    button{
        background: #005FA3;
        border: none;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        color: #fff;
        padding: 22px 72px 22px 72px;
        margin-bottom: 203px;
        cursor: pointer;
        &:hover{
            background: #00518b;
            transition: 0.2s;
        }
    }
}

@media (max-width: 800px){
.main{
    .heading{
        font-size: 30px;
        margin-top: 50px;
    }
    .text {
        font-size: 18px;
        line-height: 35px;
        width: 80%;
        margin-bottom: 70px;
    }
    button{
        font-size: 18px;
        color: #fff;
        padding: 15px 35px 15px 35px;
        margin-bottom: 70px;
    }
}
}
</style>