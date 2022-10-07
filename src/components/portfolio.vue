<script>
import Card from './other-components/card-project.vue';
import BuhOneIcon from '../assets/images/portfolio-icons/buhone.svg';
import ComputerCoursesIcon from '../assets/images/portfolio-icons/computer-courses.svg';
import OldResumeIcon from '../assets/images/portfolio-icons/old-resume.svg';

let PROJECTS_NUMBER = 0;

export default {
    components: {
        Card
    },
    data(){
        return{
            show_more_projects : true,
            card_lines : [],
            projects : [
                {
                    name : 'BuhOne',
                    picture : BuhOneIcon,
                    description : 'Сайт бухгалтерских услуг в Санкт-Питербурге',
                    href : 'https://kbresume-buhone.netlify.app/'
                },
                {
                    name : 'Computer Courses',
                    picture : ComputerCoursesIcon,
                    description : 'Компьютерные курсы',
                    href : 'https://kbresume-computer-courses.netlify.app/'
                },
                {
                    name : 'Old resume',
                    picture : OldResumeIcon,
                    description : 'Старая версия моего резюме',
                    href : 'https://kbutkovresume.netlify.app/'
                }
            ]
        }
    },
    methods:{
        ProjectsAction(){
            let button = document.getElementById('button-portfolio');
            if (PROJECTS_NUMBER<4){
                button.style.display = 'none';
            }
            this.show_more_projects = !this.show_more_projects;
            if (this.show_more_projects){
                button.innerText='Скрыть проекты';
                for (let i=1; i<this.card_lines.length; i++){
                        this.card_lines[i].style.display='flex';
                }
            } else {
                button.innerText='Еще проекты';
                for (let i=1; i<this.card_lines.length; i++){
                    if (i!=1){
                        this.card_lines[i].style.display='none';
                    }
                }
            }
        },
        HoverCard(id){
            console.log(id);
        }
    },
    mounted(){
        this.$nextTick(function(){
            PROJECTS_NUMBER = this.projects.length;
            let card_lines = Math.ceil(PROJECTS_NUMBER/3);
            let parent = document.getElementById('lines-parent');
            for (let i=1; i<card_lines+1; i++){
                let line = document.createElement('div');
                line.className = 'card-line';
                line.id = 'card-line-'+i;
                parent.appendChild(line);
                this.card_lines[i] = document.getElementById('card-line-'+i)
            }

            let projects_injects = 0;
            let projects_in_line = 0;
            let projects_line = 1;
            for (let i=1; i<PROJECTS_NUMBER+1; i++){
                let card = document.createElement('div');
                let name_project = document.createElement('h1');
                let icon_project = document.createElement('img');
                let description_project = document.createElement('p');
                description_project.innerText = this.projects[projects_injects].description;
                description_project.className='description-project';
                description_project.id='description-project-'+projects_injects+'id';
                card.className='card';
                card.id = 'card-'+projects_injects+'id';
                name_project.innerText = this.projects[projects_injects].name;
                name_project.id='card-name-'+projects_injects+'id';
                name_project.className='name-project';
                icon_project.src = this.projects[projects_injects].picture;
                icon_project.id='card-icon-'+projects_injects+'id';
                icon_project.className='icon';
                this.card_lines[projects_line].appendChild(card);
                card.appendChild(name_project);
                card.appendChild(icon_project);
                card.appendChild(description_project);
                card.href = this.projects[i-1].href;
                card.onmouseover = function(){
                    card.style.background='#266897';
                    name_project.style.color='#fff';
                    description_project.style.opacity = '1';
                    icon_project.style.opacity = '0.5';
                }
                card.onmouseout = function(){
                    card.style.background='#fff';
                    name_project.style.color='#121212';
                    description_project.style.opacity = '0';
                    icon_project.style.opacity = '1';
                }
                card.onmousedown = function(){
                    window.location.href = card.href;
                }
                projects_in_line++;
                projects_injects++;
                if (projects_in_line==3){
                    projects_in_line=0;
                    projects_line+=1;
                }
            }

            this.ProjectsAction();
        });
    }
}
</script>

<template lang="pug">
.portfolio(id='portfolio-block')
    p.name-page Портфолио
    h1.heading Презентация моих работ
    .card-lines(id='lines-parent')
    button.button(id='button-portfolio' @mousedown='ProjectsAction') Скрыть проекты
</template>

<style lang="scss">
.portfolio{
    padding: 117px 10% 117px 10%;
    display: flex;
    flex-direction: column;
    .name-page{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 0;
        color: #787878;
        margin: 0;
        margin-bottom: 42px;
    }
    .heading{
        font-family: 'Merriweather';
        font-style: normal;
        font-weight: 900;
        font-size: 36px;
        color: #121212;
        margin-bottom: 50px;
    }
    .card-lines{
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        margin-bottom: 50px;
    }
    .card-line{
        display: flex;
        margin-bottom: 50px;
        &:last-child{
            margin-bottom: 0;
        }
        .card{
            position: relative;
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
                padding-top: 15px;
            }
            .icon{
                width: 40%;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
            .description-project{
                opacity: 0;
                color: #fff;
                font-family: 'Lato';
                font-size: 18px;
                text-align: center;
                z-index:1;
                font-weight: 300;
                position: absolute;
                top: 45%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }
    .button{
        margin: 0 auto;
        margin-top: 25px;
        padding: 15px 30px 15px 30px;
        width: 30%;
        font-size: 25px;
        color: #fff;
        font-family: 'Lato';
        font-weight: 500;
        background: #005FA3;
        border: none;
        &:hover{
            background: #00528d;
            transition: 0.3s;
        }
    }
}

@media (max-width:800px){
.portfolio{
    padding: 50px 10% 50px 10%;
    .name-page{
        font-size: 18px;
        line-height: 18px;
        margin-bottom: 30px;
    }
    .heading{
        font-size: 30px;
        margin-bottom: 30px;
    }
    .card-lines{
        margin-bottom: 0px;
    }
    .card-line{
        flex-direction: column;
        margin-bottom: 0px;
        .card{
            width: 220px;
            height: 220px;
            margin: 0;
            margin-bottom: 30px;
            .name-project{
                font-size: 20px;
                line-height: 25px;
            }
        }
    }
    .button{
        width: 90%;
        font-size: 18px;
    }
}
}
</style>