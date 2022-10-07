<template lang="pug">
.copyright
    p.text Сайт - Резюме
    p.text @2022 Kirill Butkov
</template>

<style lang="scss">
.copyright{
    padding: 10px 10% 10px 10%;
    background: #F3F3F3;
    display: flex;
    .text {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #5C5C5C;
        line-height: 10px;
        &:last-child{
            margin-left: auto;
            margin-right: 0em;
        }
    }
}

@media (max-width: 800px){
    .copyright{
        .text {
            font-size: 14px;
        }
    }
}
</style>