<script>
import BuhOneIcon from '../../assets/images/logo.svg';
export default {
    props: {
        img : String,
        name_project : String
    },
    mounted(){
        this.$nextTick(function(){
            let image_icon = document.getElementById('image-card');
            image_icon.src = BuhOneIcon;
        });
    }
}
</script>

<template lang="pug">
.card
    h1.name-project {{name_project}}
    img.icon(id='image-card')
</template>

<style lang="scss">
/*.card{
    background: #fff;
    width: 270px;
    height: 270px;
    padding: 15px 15px 15px 15px;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.11));
    display: flex;
    flex-direction: column;
    margin: 0 25px 0 25px;
    .name-project{
        font-family: 'Merriweather';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 25px;
        color: #121212;
        margin: 0 auto;
    }
    .icon{
        width: 50%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
}*/

@media (max-width: 800px){
.card{
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
    .icon{
        width: 40%;
    }
}
}
</style>