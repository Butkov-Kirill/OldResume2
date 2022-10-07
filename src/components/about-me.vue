<script>
import ButtonMenu from './other-components/button-menu.vue';
import './other-components/ScrollElements.js';
import { GetScrollElements, ScrollElement } from './other-components/ScrollElements.js';

export default {
    components : {
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
            this.elements = GetScrollElements(1,2);
            ScrollElement(1, this.elements);
        });
    }
}
</script>

<template lang="pug">
.about-me
    .sides
        .left
            p.smoll-text О себе
            h1.heading Информация о владельце
            .human
                img.human-image(src='../assets/images/ava.png')
                .info
                    h1.name Бутков Кирилл<br>Александрович
                    p.job Front-end программист
            .board
                p.text Кирилл, 16 лет. С 2016 года занимаюсь изучением сферы IT, с 2020 года занимаюсь 
                    | музыкой, созданием 2Д графики для игр и веб-дизайном.
        .right
            .board(id = '1id-1-element')
                h1.heading-board О себе
                .liner
                p.text Меня зовут Кирилл, мне 16 лет. Впервые открыл для себя программирование в 2016 
                    | году, желая стать разработчиком игр. Эта идея изменила все последующие 6 лет. 
                    | Я успел попробовать себя во многих сферах IT: разработка игр, ПО, мобильных 
                    | приложений, создание сайтов, информационная безопасность. 
                p.text На данный момент, основным родом деятельности для меня является программирование, 
                    | а именно разработка сайтов и разработка игр на Unity. В свободное время занимаюсь 
                    | музыкой и веб-дизайном.
            .board(id = '1id-2-element')
                h1.heading-board Положительные качества
                .liner
                .quality
                    i(class="fa fa-star")
                    p.text адаптивный / гибкий
                .quality
                    i(class="fa fa-star")
                    p.text целеустремленный
                .quality
                    i(class="fa fa-star")
                    p.text коммуникабельный
                .quality
                    i(class="fa fa-star")
                    p.text восприимчив к критике
                .quality
                    i(class="fa fa-star")
                    p.text креативный
                .quality
                    i(class="fa fa-star")
                    p.text многогранный
                .quality
                    i(class="fa fa-star")
                    p.text энтузиаст
            ButtonMenu(class='buttons-menu-block' points_number=2, id_menu=1, @1id_menu_scroll='Scroll')
</template>

<style lang="scss">
.about-me{
    padding: 117px 10% 100px 10%;
    background: #F3F3F3;
    .sides{
        display: flex;
        .left{
            width: 50%;
            .smoll-text{
                font-family: 'Lato';
                font-style: normal;
                font-weight: 900;
                font-size: 24px;
                line-height: 25px;
                color: #787878;
                margin-bottom: 42px;
            }
            .heading{
                font-family: 'Merriweather';
                font-style: normal;
                font-weight: 900;
                font-size: 36px;
                margin-bottom: 42px;
                color: #121212;
            }
            .human{
                display: flex;
                margin-bottom: 24px;
                .human-image{
                    width: 195px;
                    height: 195px;
                    border-radius: 50%;
                    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
                    margin-right: 20px;
                }
                .info{
                    .name{
                        font-family: 'Merriweather';
                        font-style: normal;
                        font-weight: 900;
                        font-size: 32px;
                        line-height: 40px;
                        color: #121212;
                    }
                    .job{
                        font-family: 'Lato';
                        font-style: normal;
                        font-weight: 100;
                        font-size: 24px;
                        color: #474747;
                    }
                }
            }

            .board{
                width: 70%;
                background: #fff;
                padding: 18px 20px 18px 20px;
                font-family: 'Lato';
                font-style: normal;
                font-weight: 300;
                font-size: 20px;
                line-height: 30px;
                display: flex;
                filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.12));
                p{
                    margin: 0;
                }
            }
        }
        .right{
            width: 50%;
            display: flex;
            flex-direction: column;
            .board{
                background: #fff;
                padding: 18px 20px 18px 20px;
                font-family: 'Lato';
                font-style: normal;
                font-weight: 300;
                font-size: 20px;
                line-height: 30px;
                display: flex;
                filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.12));
                flex-direction: column;
                p{
                    font-family: 'Lato';
                    font-style: normal;
                    font-weight: 300;
                    font-size: 18px;
                    line-height: 30px;
                    text-indent: 30px;
                    margin: 0;
                    &:first-child{
                        margin-bottom: 15px;
                    }
                }
                .heading-board{
                    font-family: 'Merriweather';
                    font-style: normal;
                    font-weight: 900;
                    font-size: 36px;
                    color: #121212;
                    margin-bottom: 15px;
                    text-align: center;
                }
                .liner{
                    width: 100%;
                    height: 2px;
                    background: #121212;
                    margin-bottom: 20px;
                }
                .quality{
                    display: flex;
                    margin-bottom: 25px;
                    i{
                        padding-left: 15px;
                        margin: auto 0;
                    }
                    p{
                        text-indent: 15px;
                        line-height: 0px;
                        margin: auto 0;
                    }
                }
            }
            .buttons-menu-block{
                margin: 0 auto;
                margin-top: auto;
                margin-bottom: 0em;
            }
        }
    }
}

@media (max-width: 800px){
.about-me{
    padding: 50px 10% 50px 10%;
    .sides{
        flex-direction: column;
        .left{
            width: 100%;
            display: flex;
            flex-direction: column;
            .smoll-text{
                font-size: 18px;
                line-height: 18px;
                margin-bottom: 30px;
            }
            .heading{
                font-size: 30px;
                margin-bottom: 30px;
            }
            .human{
                .human-image{
                    width: 120px;
                    height: 120px;
                    margin-right: 15px;
                }
                .info{
                    .name{
                        font-size: 18px;
                        line-height: 25px;
                    }
                    .job{
                        font-size: 16px;
                        margin: 0;
                        margin-top: 10px;
                    }
                }
            }

            .board{
                width: auto;
                font-size: 18px;
                margin-bottom: 20px;
            }
        }
        .right{
            width: 100%;
            .board{
                margin-bottom: 50px;
                font-size: 18px;
                p{
                    font-size: 18px;
                }
                .heading-board{
                    font-size: 25px;
                    text-align: center;
                }
                .liner{
                    width: 100%;
                    height: 2px;
                }
                .quality{
                    i{
                        padding-left: 0px;
                        font-size: 16px;
                    }
                }
            }
        }
    }
}
}
</style>