<script>
import RoundChart from './other-components/round-chart.vue';
import ButtonMenu from './other-components/button-menu.vue';
import './other-components/ScrollElements.js';
import { GetScrollElements, ScrollElement } from './other-components/ScrollElements.js';

export default {
    components: {
        RoundChart,
        ButtonMenu
    },
    methods: {
        Scroll(id){
            ScrollElement(id, this.elements);
        }
    },
    data(){
        return{
            elements : []
        }
    },
    mounted(){
        this.$nextTick(function(){
            this.elements = GetScrollElements(2,3);
            ScrollElement(1, this.elements);
        });
    }
}
</script>

<template lang="pug">
.skills
    .sides
        .left
            p.name-page Навыки
            h1.heading Немного о моем опыте.<br>
                span Что я умею?
            .board
                p.text За 6 лет в сфере программирования, я успел попробовать себя в разынх направлениях. 
                    | Временно решил закрепиться в веб разработке. 
            h1.heading Опыт работы
            .board
                .flex-text
                    p.bold-text • Call Center - 
                        span В 2021 году работал в колл-центре Infotell, в качестве оператора горячей 
                            | линии и менеджера по работе с клиентами.
            h1.heading Желаемый опыт работы
            .board
                .flex-text
                    p.bold-text • Front-end программист - 
                        span Желаю получить комерческий опыт работы front-end программистом. Предпочтительный стэк: WebPack, Pug, JS, Vue, Vite, SCSS. Готов обучаться любым технологиям за короткое время.
                    p.bold-text • Желаемая минимальная зарплата: 
                        span 25.000р
        .right
            .board(id='2id-1-element')
                h1.name-board Опыт в GameDev
                .liner
                p.text Unity, Unreal Engine 4, Game Maker Studio 2.
                RoundChart.RChart(Procentages="25%", style="--c:#006BB9; --p:25; --b:4px;")
            .board(id='2id-2-element')
                h1.name-board Опыт в WebDev
                .liner
                p.text HTML, CSS, JavaScript, Pug, Vue, Vite, SCSS, WebPack.
                RoundChart.RChart(Procentages="60%", style="--c:#1AB900; --p:60; --b:4px;")
            .board(id='2id-3-element')
                h1.name-board Опыт в дизайне
                .liner
                p.text Figma,<br>Photoshop.
                RoundChart.RChart(Procentages="15%", style="--c:#B90000; --p:15; --b:4px;")
            ButtonMenu(class='buttons-menu-block', points_number=3, menu_id=2, @2id_menu_scroll='Scroll')
</template>

<style lang="scss">
.skills{
    background: #fff;
    padding: 117px 10% 117px 10%;
    .sides{
        display: flex;
        .left{
            width: 50%;
            .name-page{
                font-family: 'Lato';
                font-style: normal;
                font-weight: 900;
                font-size: 24px;
                color: #787878;
                margin-bottom: 42px;
            }
            .heading{
                font-family: 'Merriweather';
                font-style: normal;
                font-weight: 900;
                font-size: 36px;
                color: #121212;
                span {
                    line-height: 70px;
                    color: #005FA3;
                }
            }
            .board{
                background: #F3F3F3;
                padding: 25px 25px 25px 25px;
                width: 80%;
                margin: 20px 0 50px 0;
                filter: drop-shadow(6px 6px 5px rgba(0, 0, 0, 0.11));
                .text{
                    font-family: 'Lato';
                    font-style: normal;
                    font-weight: 300;
                    font-size: 20px;
                    line-height: 25px;
                    color: #121212;
                    margin: 0;
                }
                .bold-text{
                    font-family: 'Lato';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 25px;
                    color: #121212;
                    margin: 0;
                    span {
                        font-weight: 300;
                    }
                    &:last-child{
                        margin-top: 25px;
                    }
                    &:first-child{
                        margin-top: 0;
                    }
                }
            }
        }
        .right{
            width: 50%;
            display: flex;
            flex-direction: column;
            .board{
                background: #F3F3F3;
                padding: 25px 25px 25px 25px;
                width: 70%;
                display: flex;
                flex-direction: column;
                margin: 0 auto;
                .name-board{
                    color: #121212;
                    font-family: 'Merriweather';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 32px;
                    text-align: center;
                    margin-bottom: 10px;
                }
                .liner{
                    background: #121212;
                    height: 2px;
                    width: 100%;
                }
                .text{
                    font-family: 'Lato';
                    font-style: normal;
                    font-weight: 300;
                    font-size: 20px;
                    line-height: 24px;
                    text-align: center;
                    width: 70%;
                    margin: 18px auto 50px auto;
                }
                .RChart{
                    margin-left: 50%;
                    transform: translate(-50%, 0);
                }
            }
            .buttons-menu-block{
                margin: 50px auto 0 auto;
            }
        }
    }
}

@media (max-width: 800px){
.skills{
    padding: 50px 10% 50px 10%;
    .sides{
        flex-direction: column;
        .left{
            width: 100%;
            .name-page{
                font-size: 18px;
                line-height: 18px;
                margin-bottom: 30px;
            }
            .heading{
                font-size: 30px;
                margin-bottom: 30px;
                span {
                    line-height: 50px;
                }
            }
            .board{
                padding: 25px 25px 25px 25px;
                width: auto;
                margin: 20px 0 50px 0;
                .text{
                    font-size: 18px;
                }
                .bold-text{
                    font-size: 18px;
                    &:last-child{
                        margin-top: 25px;
                    }
                    &:first-child{
                        margin-top: 0;
                    }
                }
            }
        }
        .right{
            width: 100%;
            .board{
                .name-board{
                    font-size: 20px;
                }
                .text{
                    font-size: 18px;
                    line-height: 25px;
                    width: 100%;
                }
            }
        }
    }
}
}
</style>