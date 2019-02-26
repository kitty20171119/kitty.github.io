<template>
  <div class="container">
    <div class="commonHeader">
      <span class="back" @click="goBack">
        <Icon type="ios-arrow-back"/>
        <span>返回</span>
      </span>
      <p class="center">课程详情</p>
      <span class="more">
          <img src="../assets/xing.png"/>
      </span>
    </div>
    <div class="carousel">
      <div class="demo-carousel">
        <img v-bind:src="src">
      </div>
    </div>
    <div class="tags flex">
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
          <img src="../assets/erji.png">
        </div>
        <p class="seekInfo">咨询</p>
      </div>
      <div style="clear:both;"></div>
      <p class="money left">
        <span class="currentMoney">￥350</span>
        <span class="oldMoney">￥750</span>
      </p>
      <p class="right">已报名124人</p>
      <div style="clear:both;"></div>
    </div>
    <div class="courseView">
      <div
        class="courseView_item"
        v-for="(item,index) in tabs"
        :key="item.index"
        v-bind:class="item.class"
        :id="item.index"
        v-on:click="changeView(item.index)"
      >
        <span class="courseView_item_info">{{item.title}}</span>
      </div>
      <div style="clear:both;"></div>
    </div>
    <div class="course_content">
      <p>课程表</p>
      <Divider></Divider>
      <div class="courseAmount" v-for="item in courseMsg" :key="item.index" :id="item.index">
        <span class="left label">{{item.label}}:</span>
        <span class="left info">{{item.info}}</span>
        <div style="clear:both;"></div>
      </div>
      <p class="anotherInfo">此课程支持试听课，详情请电话咨询</p>
    </div>
    <div class="course_content">
      <p>课程详情</p>
      <div class="course_detail">
        <img src="../assets/course_detail.png">
      </div>
    </div>
    <div class="course_content">
      <p>培训机构</p>
      <Divider></Divider>
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
          <img src="../assets/home.png">
        </div>
        <p>首页</p>
      </div>
      <div class="leftBtn left">
        <div class="btnImg">
          <img src="../assets/more.png">
        </div>
        <p>更多课程</p>
      </div>
      <div class="leftBtn left">
        <div class="btnImg">
          <img src="../assets/zixun.png">
        </div>
        <p>咨询</p>
      </div>
      <div class="rightBtn right">立刻报名</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: 0,
      click:"1",
      src: "../static/2.jpg",
      tags: [
        {
          src: "../static/credient.png",
          info: "认证机构"
        },
        {
          src: "../static/credient.png",
          info: "认证机构"
        },
        {
          src: "../static/credient.png",
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
.tags {
  display: flex;
}
.tags_item {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 3rem;
  overflow: hidden;
  background-color: #fff;
}
.tags_img {
  width: 1rem;
  height: 1rem;
  margin-right: 3px;
}
.tags_img > img {
  width: 100%;
  margin: 0 auto;
  display: block;
}
.ivu-divider-horizontal {
  margin: 0;
}
.courseInfo {
  background-color: #fff;
  padding-left: 5%;
  padding-right: 5%;
}
.courseTitle > .title {
  font-size: 15px;
  font-weight: bold;
  background: #fff;
  border: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 80%;
}
.courseTitle > .time {
  color: rgb(153, 153, 153);
}
.courseTitle .dateTime {
  color: #000;
}
.seek_img > {
  width: 2rem;
  margin-top: 1rem;
  height: 1.5rem;
}
.seek_img > img {
  width: 100%;
  display: flex;
  justify-content: center;
}
.seekInfo {
  color: rgb(254, 109, 1);
  text-align: center;
}
.money > .currentMoney {
  color: rgb(255, 102, 102);
}
.money > .oldMoney {
  color: rgb(153, 153, 153);
}
.course_content {
  width: 100%;
  background-color: #fff;
  padding: 5px;
  margin-bottom: 2rem;
}
.course_content > p {
  width: 90%;
  padding: 10px;
}
.courseAmount {
  width: 90%;
  margin-left: 5%;
  margin-top: 10px;
}

.courseAmount > .label {
  display: block;
  width: 20%;
}
.courseAmount > .info {
  width: 80%;
}
.course_content > .anotherInfo {
  color: #999;
  margin-left: 5%;
  padding: 10px 0;
}
.courseView {
  background-color: #fff;
  margin: 10px;
}
.courseView_item {
  display: flex;
  width: 33.3%;
  float: left;
  text-align: center;
  border: 1px solid rgb(52, 152, 219);
  color: rgb(52, 152, 219);
  padding: 10px;
  border-radius: 3px;
}
.courseView_item.current {
  background-color: rgb(52, 152, 219);
  color: #fff;
}
.courseView_item_info {
  display: block;
  width: 100%;
}
.course_detail {
  width: 100%;
  height: 29rem;
  overflow: hidden;
}
.course_detail > img {
  width: 100%;
}
.courseImg {
  width: 40%;
}
.course_img {
  width: 40%;
  padding: 5px 0;
  border-radius: 10px;
}
.course_img_training {
  width: 40%;
  overflow: hidden;
}
.training_info {
  width: 55%;
}
.training_info > img {
  width: 100%;
}
.training_info > p {
  font-size: 15px;
  margin-top: 15px;
}
.trainingIntroduction {
  width: 100%;
  display: flex;
  margin-top: 10px;
}
.trainingIntroduction > .left {
  width: 100%;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.trainingIntroduction > .right {
  justify-content: flex-end;
  width: 45%;
  display: flex;
}
.tags > .training {
  width: 4rem;
  height: 1.3rem;
  background-color: rgb(255, 205, 182);
  color: rgb(219, 88, 61);
  text-align: center;
  line-height: 1.3rem;
  margin: 5px 5px 5px 0;
}
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
}
.leftBtn {
  width: 20%;
  height: 3rem;
  text-align: center;
  background-color: #fff;
  overflow: hidden;
  line-height: 2;
}
.rightBtn {
  width: 40%;
  background:linear-gradient(rgb(254,58,0),rgb(255,104,1));
  text-align: center;
  line-height: 3rem;
  height: 3rem;
  float: right;
  color: #fff;
}
.btnImg {
  width: 100%;
  height: 2rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
}
.leftBtn > p {
  font-size: 11px;
  line-height: 1.2rem;
}
.btnImg > img {
  width: 42%;
}
/**/
</style>