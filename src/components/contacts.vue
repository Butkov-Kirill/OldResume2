<script>
import {Email} from './other-components/smtp.js';
const ERROR = 'rgb(199, 0, 0)', ACCEPT = 'rgb(0, 199, 0)';

export default {
    data(){
        return{
            status_message : null,
            message_is_send : false
        }
    },
    mounted(){
        this.$nextTick(function(){
            let status_message = document.getElementById('status-message');
            this.status_message = status_message;
            this.status_message.style.opacity = '0';
        });
    },
    methods: {
        SetStatus(text, color){
            this.status_message.style.opacity = '1';
            this.status_message.style.color = color;
            this.status_message.innerText = text;
        },
        SendEmail(){
            let username = document.getElementById('username-input').value;
            let useremail = document.getElementById('useremail-input').value;
            let message_box = document.getElementById('message-box-input').value;

            if (username && useremail && message_box && !this.message_is_send){
                Email.send({
                    //Host: "smtp.elasticemail.com",
                    //Username: "kbutkovresume@gmail.com",
                    //Password: "$#%grereh3t523gddg$#",
                    SecureToken : 'DF2B4C44-8C7C-4429-9DA4-1DB58136E441',
                    To : "Butkov.Kirill.2022@yandex.ru",
                    From : "WebSite", //"kbutkovresume@gmail.com"
                    Subject : "Message from site-resume",
                    Body : "Name: "+username+".<br>Email: "+useremail+"<br>Message: "+message_box,
                }).then(message => alert(message)/*this.SendAccept()*/);
            } else if (!this.message_is_send){
                this.SetStatus('Заполните все поля!', ERROR);
            } else if (this.message_is_send){
                this.SetStatus('Вы уже отправляли письмо!', ERROR);
            }
        },
        SendAccept(){
            this.SetStatus('Письмо успешно отправленно, ожидайте ответа!', ACCEPT);
            this.message_is_send = true;
        },
        EmailButton(domain){
            var bufer = document.createElement('textarea');
            if (domain=='google'){
                bufer.value = "programmer.man.2018@gmail.com";
            } else if (domain='yandex'){
                bufer.value = "Butkov.Kirill.2022@yandex.ru";
            }
            let email = bufer.value;
            document.body.appendChild(bufer);
            bufer.select();
            document.execCommand('copy');
            document.body.removeChild(bufer);
            alert("Почта "+email+" скопирована в буфер обмена!");
        }
    }
}
</script>

<template lang="pug">
.contacts
    .background
    .dark-background
    .sides
        .left
            p.name-page Контакты
            h1.heading Контактная информация
            .buttons
                a(href="https://t.me/SALVADOR_BEATS").button
                    i(class='fab fa-telegram fa-lg')
                    p Telegram
                a(href="https://www.instagram.com/invites/contact/?i=1l2rpcwj66hzd&utm_content=mkixo7g").button
                    i(class='fab fa-instagram fa-lg')
                    p Instagram
                a(href="https://vk.com/salvador.salvador").button
                    i(class='fab fa-vk fa-lg')
                    p VK
                a(@mousedown = "EmailButton('google')").button
                    i(class='fab fa-google fa-lg')
                    p Gmail
                a(@mousedown = "EmailButton('yandex')").button
                    i(class='fab fa-yandex fa-lg')
                    p Yandex
        //.right
        //    h1.heading Отправить письмо
        //    p.status-message(id='status-message') Заполните все поля!
        //    //.form
        //    //    .inputs
        //    //        .input
        //    //            label Имя
        //    //            input(id='username-input' type='name' placeholder="Иван")
        //    //        .input
        //    //            label Почта
        //    //            input(id='useremail-input' type='email' placeholder="ivan.ivanov@gmail.com")
        //    //    .message-box
        //    //        label Сообщение
        //    //        textarea(id='message-box-input' placeholder="Ваше сообщение")
        //    //    button(id='button-submit' @mousedown='SendEmail()') Отправить письмо
        //    //    //button(id='button-submit', type='submit') Отправить письмо
</template>

<style lang="scss">
.contacts{
    padding: 117px 10% 117px 10%;
    position: relative;
    display: flex;
    flex-direction: column;
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
        top: 0;
    }
    .dark-background{
        top: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        z-index: -1;
        background: rgba(48, 48, 48, 0.88);
        overflow: hidden;
    }
    .sides{
        display: flex;
        .left{
            width: 50%;
            .name-page{
                color: #E2E2E2;
                font-family: 'Lato';
                font-style: normal;
                font-weight: 900;
                font-size: 24px;
                margin: 0;
                margin-bottom: 42px;
            }
            .heading{
                font-family: 'Merriweather';
                font-style: normal;
                font-weight: 900;
                font-size: 36px;
                color: #fff;
                margin-bottom: 80px;
            }
            .buttons{
                color: #fff;
                
                .button{
                    display: flex;
                    font-family: 'Lato';
                    font-style: normal;
                    font-weight: 100;
                    font-size: 25px;
                    padding: 5px 0 5px 0;
                    width: 30%;
                    cursor: pointer;
                    text-decoration: none;
                    i{
                        margin: 0;
                        width: 60px;
                        color: #fff;
                    }
                    p{
                        margin: 0;
                        line-height: 0;
                        margin: auto 0;
                        color: #fff;
                    }
                    margin-bottom: 50px;
                }
            }
        }
        .right{
            width: 50%;
            display: flex;
            flex-direction: column;
            .heading{
                font-family: 'Merriweather';
                font-style: normal;
                font-weight: 900;
                font-size: 36px;
                color: #fff;
                margin-bottom: 80px;
                margin: 0 auto;
                margin-bottom: 40px;
            }
            .status-message{
                line-height: 25px;
                color: rgb(199, 0, 0);
                text-shadow: 1px 1px 4px rgb(0, 0, 0);
                font-family: 'Lato';
                font-style: normal;
                font-weight: 100;
                font-size: 20px;
                margin: 0 auto;
                margin-bottom: 40px;
            }
            .form{
                color: #fff;
                display: flex;
                flex-direction: column;
                height: 100%;
                label{
                    font-family: 'Lato';
                    font-style: normal;
                    font-weight: 900;
                    font-size: 20px;
                    line-height: 20px;
                    margin-bottom: 5px;
                }
                .inputs{
                    display: flex;
                    margin-bottom: 30px;
                    .input{
                        display: flex;
                        flex-direction: column;
                        width: 48%;
                        input{
                            background: none;
                            border: none;
                            border-bottom: 1px solid #fff;
                            padding: 10px 0 10px 0;
                            font-family: 'Lato';
                            font-style: normal;
                            font-weight: 300;
                            font-size: 20px;
                            color: #fff;
                            &:focus{
                                outline: none;
                            }
                        }
                        &:last-child{
                            margin-left: auto;
                            margin-right: 0em;
                        }
                    }
                }
                .message-box{
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    textarea{
                        background: none;
                        border: none;
                        border-bottom: 1px solid #fff;
                        resize: none;
                        font-family: 'Lato';
                        font-style: normal;
                        font-weight: 300;
                        font-size: 20px;
                        line-height: 25px;
                        color: #fff;
                        height: 100%;
                        &:focus{
                            outline: none;
                        }
                    }
                }
                button{
                    font-family: 'Lato';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 20px;
                    color: #fff;
                    background: #005FA3;
                    border: none;
                    padding: 15px 57px 15px 57px;
                    line-height: 20px;
                    margin: 43px 0em 0px auto;
                    cursor: pointer;
                    &:hover{
                        background: #005491;
                        transition: 0.3s;
                    }
                }
            }
        }
    }
}

@media (max-width: 800px){
.contacts{
    padding: 50px 10% 50px 10%;
    position: relative;
    display: flex;
    flex-direction: column;
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
                margin-bottom: 50px;
            }
            .buttons{
                .button{
                    font-size: 20px;
                    width: 60%;
                    margin-bottom: 30px;
                }
                margin-bottom: 70px;
            }
        }
        .right{
            width: 100%;
            .heading{
                font-size: 30px;
                margin: 0 auto;
                margin-bottom: 15px;
            }
            .status-message{
                font-size: 20px;
                margin-bottom: 20px;
            }
            .form{
                .inputs{
                    flex-direction: column;
                    margin-bottom: 50px;
                    .input{
                        &:first-child{
                            margin-bottom: 30px;
                        }
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                    }
                }
                .message-box{
                    height: 200px;
                }
                button{
                    margin: 0 auto;
                    font-size: 18px;
                    padding: 15px 40px 15px 40px;
                    margin-top: 40px;
                }
            }
        }
    }
}
}
</style>