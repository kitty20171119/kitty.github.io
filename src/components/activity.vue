<template>
  <div class="activity">
    <div class="activity_head">
      <div class="back">
        <img src="../assets/back.png">
      </div>
      <p>活动</p>
       <Divider></Divider>
    </div>
    <div class="tabBar">
      <span class="classify" v-bind:class="item.class"  @click="changeStyle(item.index)" :key="item.id" v-for="item in tabBars">{{item.text}}</span>
    </div>
    <div class="activityItem" v-for="item in activities" :key="item.id">
      <p class="activity_title">{{item.title}}</p>
      <div class="timeAndSignup">
        <span class="activity_time left">{{item.date}}</span>
        <span class="right" v-bind:class="item.class">{{item.status}}</span>
        <div style="clear:both;"></div>
      </div>
      <div class="activity_logo">
        <img src="../assets/activity_logo.png">
      </div>
      <p
        class="activity_info"
      >{{item.title}}</p>
      <div class="addressAndDistance">
        <span>{{item.address}}</span>
        <span>{{item.distance}}</span>
      </div>
      <Divider></Divider>
      <div class="row info">
        <div class="left time">
          <Icon type="android-time"></Icon>
          <span>{{item.time}}</span>
        </div>
        <div class="right">
          <span class="left checkDetail">查看详情</span>
          <div class="moreMessage right">
            <img src="../assets/info1.png">
          </div>
        </div>
        <div style="clear:both;"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
    data () {
        return {
            tabBars:[
                {
                    index:0,
                    text:'全部',
                    class:'current'
                },
                {
                    index:1,
                    text:'亲子互动',
                    class:'' 
                },
                {
                    index:2,
                    text:'创意生活',
                    class:''
                },
                {
                    index:3,
                    text:'活动分类',
                    class:''
                }
            ],
            activities:[
                {
                    id:0,
                    title:'活动名称最多两行展示活动名称最多两行展示活动名称最多两行展示',
                    date:'活动时间:09/11 14:29:02',
                    info:'机构说明机构说明机构说明机构说明机构说明机构说明朵机构说明机构与技术机构说明机构说明机构说明枫就是爱说明机构说明机构说明机构说明机构说明机构说明朵机构说明机构与技术机构说明机构说明机构说明枫就是说明机构说明机构说明机构说明机构说明机构说明朵机构说明机构与技术机构说明机构说明机构说明枫就是说明机构说明机构说明机构说明机构说明机构说明朵机构说明机构与技术机构说明机构说明机构说明枫就是说明机构说明机构说明机构说明机构说明机构说明朵机构说明机构与技术机构说明机构说明机构说明枫就是',
                    address:'张家界',
                    distance:'24.58km',
                    time:'09/01 14:29:02',
                    class:'signUp',
                    status:'进行中'
                },
                   {
                    id:1,
                    title:'活动名称最多两行展示活动名称最多两行展示活动名称最多两行展示',
                    date:'活动时间:09/11 14:29:02',
                    info:'机构说明机构说明机构说明机构说明机构说明机构说明朵机构说明机构与技术机构说明机构说明机构说明枫就是爱说明机构说明机构说明机构说明机构说明机构说明朵机构说明机构与技术机构说明机构说明机构说明枫就是说明机构说明机构说明机构说明机构说明机构说明朵机构说明机构与技术机构说明机构说明机构说明枫就是说明机构说明机构说明机构说明机构说明机构说明朵机构说明机构与技术机构说明机构说明机构说明枫就是说明机构说明机构说明机构说明机构说明机构说明朵机构说明机构与技术机构说明机构说明机构说明枫就是',
                    address:'张家界',
                    distance:'24.58km',
                    time:'09/01 14:29:02',
                    class:'over',
                    status:'已结束'
                }
            ]
        }
    },
    methods:{
        changeStyle(index){
            for(let i in this.tabBars){
                this.tabBars[i].class=''
            }
            this.tabBars[index].class='current'
        }
    }
}
</script>
<style>
.activity_head {
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  background: #fff;
}
.activity_head > p {
  text-align: center;
  font-weight: bold;
  font-size: 13px;
}
.activity_head > .back {
  position: absolute;
  left: 5%;
  width: 2rem;
  height: 2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.back > img {
  width: 35%;
}
.activityItem {
  width: 100%;
  margin-top: 1rem;
  background: #fff;
  padding: 0 5%;
  overflow: hidden;
}
.activityItem > .activity_title {
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  margin-top: 1rem;
  padding-top: 10px;
  background: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
}
.activityItem>p{
    padding-top: 10px;
}
.timeAndSignup {
  margin-top: 10px;
}
.timeAndSignup>.activity_time{
    color: #999;
}
.activity_logo {
  width: 100%;
  overflow: hidden;
  margin-top: 15px;
  border-radius: 5px;
}
.activity_logo > img {
  width: 100%;
}
.activity_info {
  margin-top: 10px;
  color: #000;
  letter-spacing: 1px;
}
.addressAndDistance {
  margin: 10px 0;
}
.ivu-divider-horizontal {
  margin: 0;
}
.moreMessage {
  width: 0.5rem;
  height: 0.8rem;
  overflow: hidden;
  margin-top: 2px;
}
.moreMessage > img {
  width: 100%;
}
.checkDetail {
  margin-right: 5px;
}
.row.info {
  padding: 10px 0;
  color: #999;
}
.timeAndSignup > .signUp {
  border: 1px solid rgb(255, 239, 232);
  background-color: rgb(255, 239, 232);
  color: rgb(255, 103, 34);
  border-radius: 2px;
  padding: 2px;
}
.addressAndDistance{
    color: #999;
}
.timeAndSignup>.over{
    background-color: rgb(245,245,245);
    color: rgb(135,135,135);
    padding: 5px;
    border-radius: 2px;
}
</style>