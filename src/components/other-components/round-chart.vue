<script>
export default {
    props:{
        Procentages:{
            type: String,
            default: "50%"
        }
    }
}
</script>

<template lang="pug">
.chart
    .chart-line
        span.procentages {{Procentages}} 
</template>

<style lang="scss">
.chart{
    width: 130px;
    height: 130px;
    background: #fff;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    margin: 0 auto;
    margin-top: auto;
    margin-bottom: 0em;
    
    aspect-ratio: 1;
    display: inline-grid;

    .chart-line{
        position: absolute;
        top: var(--b);
        left: var(--b);
        right: var(--b);
        bottom: var(--b);
        background: #f3f3f3;
        z-index: 5;
        border-radius: 50%;
        display: flex;
        box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.151);
    }

    .procentages{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 300;
        font-size: 32px;
        text-height: 0px;
        color: #121212;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
}

.chart:before{
        content: "";
        position: absolute;
        border-radius: 50%;
        inset: 0;
        background: conic-gradient(var(--c) calc(var(--p)*1%),#0000 0);
    }
</style>