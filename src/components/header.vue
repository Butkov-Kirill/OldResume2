<script>
export default {
    methods: {
        Scroll(block){
            let element = document.getElementsByClassName(block);
            element[0].scrollIntoView();
            if (this.menuIsOpen){
                this.menuIsOpen = false;
            }
        },
        MenuAction(isOpen){
            this.menuIsOpen = isOpen;
        }
    },
    data(){
        return {
            menuIsOpen : false
        }
    }
}
</script>

<template lang="pug">
.header
    .name-site
        i.icon(class = "fa fa-laptop-code")
        h1.name К. Бутков
    .buttons
        button Главная
        button(@mousedown = 'Scroll("aboute-me-block")') О себе
        button(@mousedown = 'Scroll("skills-block")') Навыки
        button(@mousedown = 'Scroll("portfolio-block")') Порфтолио
        button(@mousedown = 'Scroll("contacts-block")') Контакты
    .menu-bar
        i(class="fa fa-bars" v-if='!menuIsOpen' @mousedown='MenuAction(true)')
        .menu(v-if='menuIsOpen')
            button.button(@mousedown = 'Scroll("aboute-me-block")') О себе
            button.button(@mousedown = 'Scroll("skills-block")') Навыки
            button.button(@mousedown = 'Scroll("portfolio-block")') Портфолио
            button.button(@mousedown = 'Scroll("contacts-block")') Контакты
            i(class='fa fa-angle-up' @mousedown='MenuAction(false)')
</template>

<style lang="scss">
.header{
    padding: 38px 10% 38px 10%;
    display: flex;
    background: #fff;
    .name-site{
        display: flex;
        .icon {
            font-size: 30px;
            margin-right: 15px;
        }
        .name{
            font-family: 'Merriweather';
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
        }
    }
    .menu-bar{
        display: none;
    }
    .buttons{
        margin: auto 0;
        margin-left: auto;
        margin-right: 0em;
        button{
            background: none;
            border: none;
            padding: 0;
            font-family: 'Lato';
            font-style: normal;
            font-weight: 100;
            font-size: 20px;
            margin-left: 68px;
            text-transform: uppercase;
            padding-bottom: 2px;
            border-bottom: 1px solid rgba(0, 0, 0, 0);

            &:hover{
                border-bottom: 1px solid #000;
                transition: 0.3s;
            }
        }
    }
}

@media(max-width: 800px){
   .header{
        .name-site{
            .icon {
                font-size: 25px;
                margin-right: 15px;
            }
            .name{
                font-family: 'Merriweather';
                font-style: normal;
                font-weight: 700;
                font-size: 20px;
            }
        }
        .buttons{
            display: none;
        }
        .menu-bar{
            display: flex;
            margin-left: auto;
            margin-right: 0em;
            position: relative;
            i{
                margin: auto 0;
                font-size: 25px;
            }
            .menu{
                background: #F3F3F3;
                box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.507);
                padding: 15px 30px 15px 30px;
                position: absolute;
                transform: translate(-100%, 0);
                display: flex;
                flex-direction: column;
                z-index: 10;
                .button{
                    margin-bottom: 10px;
                    padding-top: 5px;
                    padding-bottom: 5px;
                    font-family: 'Lato';
                    font-weight: 100;
                    border: none;
                    background: none;
                    font-size: 16px;
                    background: #fff;
                    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.185);
                    &:last-child{
                        margin: 0;
                    }
                }
                i{
                    margin: 0;
                    font-size: 30px;
                    margin: 0 auto;
                    padding-left: 5px;
                    padding-right: 5px;
                }
            }
        }
    } 
}
</style>