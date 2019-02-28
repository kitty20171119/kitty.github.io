<template>
  <div class="container">
    <div class="commonHeader">
      <span class="back" @click="goBack">
        <Icon type="ios-arrow-back"/>
        <span></span>
      </span>
      <p class="center bgWhite">活动详情</p>
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
    <div class="courseView">      
      <div style="clear:both;"></div>
    </div>
    <div class="course_content">
      <p class="title_course">活动简介</p>
      <div class="courseAmount" v-for="item in courseMsg" :key="item.index" :id="item.index">
        <span class="left label">{{item.label}}:</span>
        <span class="left info">{{item.info}}</span>
        <div style="clear:both;"></div>
      </div>     
    </div>
    <div class="course_content">
      <p class="title_course">活动详情</p>
      <div class="course_detail">
        <img src="../assets/course_detail.png">
      </div>
    </div>
    <div class="course_content">
      <p class="title_course">培训机构</p>
      <div class="course_content">
        <div class="course_img_training left">
          <img src="../assets/courseLogo.jpg">
        </div>
        <div class="training_info right">
          <p>机构名称</p>
          <div class="tags">
            <span class="training">已认证</span>
            <span class="training">扬琴培训</span>
          </div>
          <div class="trainingIntroduction">
            <span class="left">机构信息，简介说明，机构信息，简介说明</span>
            <span class="right">1.2KM</span>
          </div>
        </div>
        <div style="clear:both;"></div>
      </div>
    </div>
    <div class="footer">
      <Divider></Divider>
      <div class="leftBtn left">
        <div class="btnImg">
          <img src="../assets/detail_home.png">
        </div>
        <p>首页</p>
      </div>
      <div class="leftBtn left">
        <div class="btnImg">
          <img src="../assets/more.png">
        </div>
        <p>更多活动</p>
      </div>
      <div class="leftBtn left">
        <div class="btnImg">
          <img src="../assets/smile.png">
        </div>
        <p>咨询</p>
      </div>
      <div class="rightBtn right">已结束</div>
    </div>
  </div>
</template>
<script>
export default {
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
          info: "认证机构"
        },
        {
          src: "../static/checked.png",
          info: "认证机构"
        }
      ],
      tabs: [
        {
          index: 0,
          title: "课程表",
          class: "current"
        },
        {
          index: 1,
          title: "课程详情",
          class: ""
        },
        {
          index: 2,
          title: "培训机构",
          class: ""
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
      ]
    };
  },
  created: function() {},
  methods: {
    changeView(index) {
      //alert(e.path[0].id);
      for (let i in this.tabs) {
          this.tabs[i].class="";
      }
      this.tabs[index].class = "current";
    },
    goBack(){
      this.$router.go(-1);
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
/**/
</style>