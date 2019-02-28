<template>
  <div class="container">
    <div class="commonHeader">
      <span class="back" @click="goBack">
        <Icon type="ios-arrow-back"/>
        <span></span>
      </span>
      <p class="center bgWhite">课程详情</p>
      <span class="more">
          <img src="../assets/xing2.png"/>
      </span>
    </div>
    <div class="carousel">
      <div class="demo-carousel">
        <img src="../assets/activity_logo.png">
      </div>
    </div>
    <div class="tags label flex">
      <div class="tags_item" v-for="item in tags" :key="item.index">
        <div class="tags_img">
          <img v-bind:src="item.src">
        </div>
        <span class="tagInfo">{{item.info}}</span>
      </div>
    </div>
    <Divider></Divider>
    <div class="courseInfo">
      <div class="courseTitle left">
        <p class="title">课程名称课程名称课程名称一行展示</p>
        <p class="time">
          报名截止还剩:
          <span class="dateTime">1天23时43分</span>
        </p>
      </div>
      <div class="seek right">
        <div class="seek_img">
          <img src="../assets/zixun2.png">
        </div>
        <p class="seekInfo">咨询</p>
      </div>
      <div style="clear:both;"></div>
      <p class="money left">
        <span class="currentMoney">￥350</span>
        <span class="oldMoney">￥750</span>
      </p>
      <p class="right signup">已报名124人</p>
      <div style="clear:both;"></div>
    </div>
  <!--<div class="courseView">      
      <div style="clear:both;"></div>
    </div>-->
      <div class="tabBar">
        <router-link
          class="classify threeItem"
          v-bind:class="item.class"
          @click="changeStyle(item.index)"
          :key="item.id"
          v-for="item in tabBars"
          :to="item.path"
        >{{item.text}}</router-link>
      </div>
      <Divider></Divider>
      <router-view></router-view>
    <div class="footer">
      <Divider></Divider>
      <div class="leftBtn btn_courseDetail left">
        <div class="btnImg">
          <img src="../assets/detail_home.png">
        </div>
        <p>首页</p>
      </div>
      <div class="leftBtn btn_courseDetail left">
        <div class="btnImg">
          <img src="../assets/more.png">
        </div>
        <p>更多课程</p>
      </div>
      <div class="leftBtn btn_courseDetail left">
        <div class="btnImg">
          <img src="../assets/smile.png">
        </div>
        <p>咨询</p>
      </div>
      <div class="rightBtn right">立刻报名</div>
    </div>
  </div>
</template>
<script>
import courseDetail_schedule from '@/components/courseDetail_schedule'
export default {
  components:{
    courseDetail_schedule,
  },
  data() {
    return {
      value1: 0,
      click:"1",
      src: '',
      tags: [
        {
          src: "../static/checked.png",
          info: "认证机构"
        },
        {
          src: "../static/checked.png",
          info: "底价承诺"
        },
        {
          src: "../static/checked.png",
          info: "消费保障"
        }
      ],
      tabBars: [
        {
          index: 0,
          text: "课程表",
          class: "",
          path:'/courseDetail_schedule'
        },
        {
          index: 1,
          text: "课程详情",
          class: "",
          path:'/'
        },
        {
          index: 2,
          text: "培训机构",
          class: "",
          path:'',
        }
      ],
      courseMsg: [
        {
          label: "课时数量",
          info: "1节课"
        },
        {
          label: "每节时长",
          info: "90分钟"
        },
        {
          label: "上课时间",
          info: "请直接致电预约上课时间"
        },
        {
          label: "班级人数",
          info: "20人"
        },
        {
          label: "教学地点",
          info: "宝安区松岗平安路十号山美新村大厦二楼小白鸽少儿舞蹈团"
        }
      ],
     
    };
  },
  created: function() {},
  methods: {
    goBack(){
      this.$router.go(-1);
    },
     changeStyle(index) {
      for (let i in this.tabBars) {
        this.tabBars[i].class = "";
      }
      this.tabBars[index].class = "current";
    }
  }
};
</script>
<style>
.bgWhite{
  background-color: #fff;
  font-size: 15px;
  font-weight: bold;
}
.seekInfo{
  color: #999;
}
.seek,.signup{
  color: #999;
}
.rightBtn>.right{
  background-color:rgb(74,210,84);
}
.btn_courseDetail{
  width: 20%;
}
 .router-link-exact-active.current{
   color: rgb(62, 186, 69);
   background-clip: rgb(62, 186, 69);
 }
/**/
</style>>