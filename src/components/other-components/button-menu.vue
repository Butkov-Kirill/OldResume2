<script>
//import { createElementBlock } from '@vue/runtime-core';
const ACTIVE_POINT = '1', DEACTIVE_POINT = '0.4';

export default {
    props : {
        points_number : {
            Type: Number,
            default : 4
        },
        menu_id : {
            Type: Number,
            default: 1
        }
    },
    data() {
        return{
            points : [],
            id : 1
        }
    },
    mounted(){
        this.$nextTick(function(){
            let points_parent = document.getElementById('points')
            points_parent.id = this.menu_id + 'id_menu_points';
            for (let i = 1; i < parseInt(this.points_number)+1; i++){
                let point = document.createElement("div");
                point.className = 'point';
                point.id = this.menu_id + 'id_point_' + i;
                points_parent.appendChild(point);
                this.points[i] = point;
                if (this.id == i){
                    this.SetPoint(this.id);
                }
            }

            let buttons =   [document.getElementById('button-arrow-left'),
                            document.getElementById('button-arrow-right')];
            for (let i = 0; i < buttons.length; i++){
                buttons[i].id = this.menu_id + 'id-button-arrow-' + i;
            }
        });
    },
    methods: {
        SetPoint(id){
            for (let i = 1; i < this.points.length; i++){
                this.points[i].style.opacity = DEACTIVE_POINT;
                if (this.id == i){
                    this.points[i].style.opacity = ACTIVE_POINT;
                }
            }
        },
        ButtonDown(side){
            if (side == "left"){
                if (this.id > 1){
                    this.id--;
                } else {
                    this.id = this.points.length-1;
                }
            } else if (side == "right"){
                if (this.id < this.points.length-1){
                    this.id++;
                } else {
                    this.id = 1;
                }
            }
            this.SetPoint(this.id);
            this.$emit(this.menu_id + 'id_menu_scroll', this.id);
        }
    }
}
</script>

<template lang="pug">
.buttons-menu
    .button(id='button-arrow-left', @mousedown='ButtonDown("left")')
        .button-background
        i(class="fa fa-chevron-left")
    .points(id='points')
    .button(id='button-arrow-right', @mousedown='ButtonDown("right")')
        .button-background
        i(class="fa fa-chevron-right")
</template>

<style lang="scss">
.buttons-menu{
    display: flex;
    .button{
        width: 50px;
        height: 50px;
        position: relative;
        &:first-child{
            margin-right: 15px;
        }
        &:last-child{
            margin-left: 15px;
        }
        &:hover{
            box-shadow: 0 0 10px rgb(0,0,0,0.4);
            transition: 0.3s;
        }
        .button-background{
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgba(0, 95, 163, 1);
            opacity: 0.6;
        }
        i{
            color: #fff;
            font-size: 30px;
            line-height: 20px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .points{
        display: flex;
        .point{
            width: 10px;
            height: 10px;
            background: rgba(0, 95, 163, 1);
            opacity: 0.4;
            border-radius: 50%;
            margin: auto 0;
            margin-left: 10px;
            margin-right: 10px;
        }
    }
}
</style>